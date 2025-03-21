#!/bin/bash
# /scripts/deploy_frontend.sh
set -e

STACK_NAME="marigold-frontend"
BUCKET_NAME="marigold-frontend"
REGION="us-east-1"
PROFILE="${AWS_PROFILE:-default}"

[ -z "$NODE_ENV" ] && echo "ERROR: NODE_ENV not set" && exit 1

# Build parameter overrides
PARAMS="BucketName=${BUCKET_NAME} Environment=${NODE_ENV}"

# Create infrastructure directory if it doesn't exist
mkdir -p infrastructure

# Create basic CloudFormation template if it doesn't exist
if [ ! -f "infrastructure/cloudformation.yaml" ]; then
    cat > infrastructure/cloudformation.yaml << 'EOF'
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Marigold Frontend Infrastructure'

Parameters:
  BucketName:
    Type: String
    Description: Name of the S3 bucket
  Environment:
    Type: String
    Description: Deployment environment
    Default: dev
    AllowedValues:
      - dev
      - staging
      - prod

Resources:
  FrontendBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref BucketName
      AccessControl: Private
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true

  CloudFrontOriginAccessIdentity:
    Type: AWS::CloudFront::CloudFrontOriginAccessIdentity
    Properties:
      CloudFrontOriginAccessIdentityConfig:
        Comment: !Sub "OAI for ${BucketName}"

  BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref FrontendBucket
      PolicyDocument:
        Statement:
          - Action: 's3:GetObject'
            Effect: Allow
            Resource: !Sub 'arn:aws:s3:::${FrontendBucket}/*'
            Principal:
              CanonicalUser: !GetAtt CloudFrontOriginAccessIdentity.S3CanonicalUserId

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Origins:
          - DomainName: !GetAtt FrontendBucket.DomainName
            Id: S3Origin
            S3OriginConfig:
              OriginAccessIdentity: !Sub 'origin-access-identity/cloudfront/${CloudFrontOriginAccessIdentity}'
        Enabled: true
        DefaultRootObject: index.html
        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods:
            - GET
            - HEAD
            - OPTIONS
          CachedMethods:
            - GET
            - HEAD
            - OPTIONS
          ForwardedValues:
            QueryString: false
            Cookies:
              Forward: none
        PriceClass: PriceClass_100
        ViewerCertificate:
          CloudFrontDefaultCertificate: true
        CustomErrorResponses:
          - ErrorCode: 404
            ResponseCode: 200
            ResponsePagePath: /index.html
          - ErrorCode: 403
            ResponseCode: 200
            ResponsePagePath: /index.html

Outputs:
  CloudFrontDomainName:
    Description: Domain name of the CloudFront distribution
    Value: !GetAtt CloudFrontDistribution.DomainName
EOF
    echo "Created basic CloudFormation template in infrastructure/cloudformation.yaml"
fi

# Deploy CloudFormation
aws cloudformation deploy \
    --template-file infrastructure/cloudformation.yaml \
    --stack-name ${STACK_NAME} \
    --parameter-overrides ${PARAMS} \
    --capabilities CAPABILITY_IAM \
    --region ${REGION} \
    --profile ${PROFILE}

# Build and deploy frontend
npm run build

# Check if build directory exists
if [ -d "build" ]; then
    BUILD_DIR="build"
elif [ -d "dist" ]; then
    BUILD_DIR="dist"
else
    echo "ERROR: Could not find build directory (checked 'build' and 'dist')"
    exit 1
fi

# Deploy to S3
aws s3 sync ${BUILD_DIR}/ s3://${BUCKET_NAME}/ \
    --delete \
    --cache-control "max-age=31536000" \
    --region ${REGION} \
    --profile ${PROFILE}

# Set no-cache for index.html
aws s3 cp ${BUILD_DIR}/index.html s3://${BUCKET_NAME}/index.html \
    --cache-control "no-cache" \
    --region ${REGION} \
    --profile ${PROFILE}

# Get and output CloudFront URL
CLOUDFRONT_URL=$(aws cloudformation describe-stacks \
    --stack-name ${STACK_NAME} \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomainName`].OutputValue' \
    --output text \
    --region ${REGION} \
    --profile ${PROFILE})

echo "Deployment complete!"
echo "CloudFront URL: https://${CLOUDFRONT_URL}"