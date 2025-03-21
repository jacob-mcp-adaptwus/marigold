# Marigold One11 - AI Solutions Website

A modern, responsive website for Marigold One11, a company specializing in AI solutions, services, and training. Built with React, TypeScript, and TailwindCSS.

![Marigold Website](public/screenshot.png)

## Project Overview

This website serves as the online presence for Marigold One11, showcasing:

- AI services offered
- AI solutions for various industries
- Training programs
- Case studies and resources
- Blog content

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Deployment**: AWS CloudFront + S3 (via CloudFormation)

## Project Structure

- `/src` - Application source code
  - `/components` - Reusable UI components
    - `/ui` - Basic UI elements (buttons, cards, etc.)
    - `/layout` - Layout components (header, footer)
    - `/sections` - Homepage section components
  - `/pages` - Page components
  - `/assets` - Static assets like images
- `/infrastructure` - AWS CloudFormation templates
- `/public` - Static files

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/marigold-one11.git
cd marigold-one11

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

### Building for Production

```bash
# Create production build
npm run build
```

## Deployment

This project uses AWS S3 and CloudFront for hosting. A deployment script is provided:

```bash
# Method 1: Using npm scripts
npm run deploy:dev    # Deploy to development environment
npm run deploy:staging    # Deploy to staging environment
npm run deploy:prod    # Deploy to production environment

# Method 2: Manual deployment
# Set environment
export NODE_ENV=dev  # Options: dev, staging, prod

# Deploy
./deploy.sh
```

The deployment script will:
1. Create/update the CloudFormation stack
2. Build the React application
3. Upload files to S3
4. Configure CloudFront distribution
5. Output the CloudFront URL

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

[MIT License](LICENSE)
