import React from 'react';
import { Lightbulb, Shield, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

const ProductShowcaseSection: React.FC = () => {
  const products = [
    {
      title: 'MarigoldAI Assistant',
      icon: <Lightbulb className="h-10 w-10 text-[#bb141a]" />,
      description: 'Intelligent virtual assistant for customer support and engagement',
      features: [
        '24/7 customer support automation',
        'Natural language understanding',
        'Multi-channel integration'
      ],
      price: '$299',
      period: '/month',
      ctaText: 'Get Started',
      ctaHref: '#',
      color: '#bb141a'
    },
    {
      title: 'SecureAI Vault',
      icon: <Shield className="h-10 w-10 text-[#2a2b2a]" />,
      description: 'Advanced data protection with AI threat detection',
      features: [
        'Predictive threat analysis',
        'End-to-end encryption',
        'Compliance management'
      ],
      price: '$499',
      period: '/month',
      ctaText: 'Request a Demo',
      ctaHref: '#',
      color: '#2a2b2a'
    },
    {
      title: 'LearnBoost LMS',
      icon: <BookOpen className="h-10 w-10 text-[#f59d40]" />,
      description: 'AI-powered learning management system',
      features: [
        'Personalized learning paths',
        'Automated progress tracking',
        'Interactive content creation'
      ],
      price: '$399',
      period: '/month',
      ctaText: 'Start Free Trial',
      ctaHref: '#',
      color: '#f59d40'
    }
  ];

  return (
    <section id="product-showcase" className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, rgba(187, 20, 26, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 20, 26, 0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            Featured <span className="text-[#bb141a]">Products</span>
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            Discover our innovative solutions designed to elevate your business performance
          </p>
        </div>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
            >
              {/* Left side with icon and description */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${product.color}10` }}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2a2b2a]">{product.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <ul className="grid grid-cols-1 gap-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right side with pricing and CTA */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-5" style={{
                    background: `radial-gradient(circle at top right, ${product.color}, transparent 70%)`
                  }}></div>
                  
                  <h4 className="text-xl font-semibold mb-2">Pricing</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: product.color }}>{product.price}</span>
                    <span className="text-gray-500 ml-1">{product.period}</span>
                  </div>
                  
                  <a 
                    href={product.ctaHref} 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors"
                    style={{ 
                      backgroundColor: product.color,
                      boxShadow: `0 4px 14px 0 ${product.color}40`
                    }}
                  >
                    {product.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  
                  <div className="mt-6 text-sm text-gray-500">
                    Includes all features with full support
                  </div>
                </div>
              </div>
              
              {/* Connecting visual element */}
              {index !== products.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-8 w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;