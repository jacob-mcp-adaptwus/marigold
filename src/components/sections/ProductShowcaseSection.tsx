import React from 'react';
import { Lightbulb, Shield, BookOpen, CheckCircle2, ArrowRight, Flower, Sprout, Trees } from 'lucide-react';

const ProductShowcaseSection: React.FC = () => {
  const products = [
    {
      title: 'BLOOM',
      icon: <Sprout className="h-10 w-10 text-white" />,
      description: 'For startups or small businesses beginning their digital transformation.',
      features: [
        'Digital Strategy Consultation (monthly)',
        'Basic Website Optimization',
        '1 Landing Page + CTA Funnel',
        'Foundational CRM setup or cleanup',
        'Up to 2 automated workflows (email/SMS)',
        'dAisy Ad Management Lite (up to $500/mo ad spend)',
        'Basic SEO Audit',
        '1 Monthly Report with KPIs'
      ],
      price: '$1200',
      period: ' a month',
      pricePrefix: 'starting at ',
      ctaText: 'Get Started',
      ctaHref: '#',
      color: '#bb141a'
    },
    {
      title: 'THRIVE',
      icon: <Flower className="h-10 w-10 text-white" />,
      description: 'For growing businesses ready to scale with smart automation and better data.',
      features: [
        'Includes everything in BLOOM, plus:',
        'CRM Integration with automation tools',
        'Custom GPT or chatbot integration (simple use case)',
        'Facebook/Google Ad Campaign Management (up to $1,500/mo ad spend)',
        'Up to 4 active workflows (email, SMS, internal ops)',
        'Dynamic Landing Page Testing (A/B)',
        'Monthly Growth Strategy Session',
        'Enhanced Reporting + Dashboard Access'
      ],
      price: '$2500',
      period: ' a month',
      pricePrefix: 'starting at ',
      ctaText: 'Request a Demo',
      ctaHref: '#',
      color: '#2a2b2a'
    },
    {
      title: 'FLOURISH',
      icon: <Trees className="h-10 w-10 text-white" />,
      description: 'For high-growth companies seeking full-stack AI + marketing transformation.',
      features: [
        'Includes everything in THRIVE, plus:',
        'Custom AI Application (Private GPT, data access, internal tools)',
        'Private AI Infrastructure consulting (via partnership)',
        'Governance Strategy & AI Compliance Policies',
        'Full Ad Campaign Build + Daily Optimization (Meta, Google, YouTube)',
        'Unlimited automated workflows + course setup',
        'Advanced Data Analysis & ROI Attribution',
        'Dedicated Account Manager'
      ],
      price: '$5000',
      period: ' a month',
      pricePrefix: 'starting at ',
      ctaText: 'Schedule Consultation',
      ctaHref: '#',
      color: '#f59d40'
    }
  ];

  return (
    <section id="product-showcase" className="py-16 bg-gray-50 relative">
      {/* Simple, professional background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2a2b2a]">
            AI-Powered <span className="text-[#bb141a]">Bundles</span> for Business Growth
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg">
            Discover our expertly bundled services designed to simplify your marketing, automation, and AI strategy. Each package is crafted to maximize efficiency, streamline workflows, and drive real results—all at a transparent price.
          </p>
        </div>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 relative bg-white rounded-lg shadow-md overflow-hidden`}
            >
              {/* Left side with icon and description */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2a2b2a]">{product.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 border-l-2 pl-4" style={{ borderColor: product.color }}>{product.description}</p>
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
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">Pricing</h4>
                  <div className="mb-6">
                    {product.pricePrefix && (
                      <span className="text-gray-500">{product.pricePrefix}</span>
                    )}
                    <span className="text-4xl font-bold" style={{ color: product.color }}>{product.price}</span>
                    <span className="text-gray-500 ml-1">{product.period}</span>
                  </div>
                  
                  <a 
                    href={product.ctaHref} 
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-md text-white font-medium transition-colors"
                    style={{ 
                      backgroundColor: product.color
                    }}
                  >
                    {product.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  
                  <div className="mt-6 text-sm text-gray-500 text-center">
                    Includes all features with full support
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;