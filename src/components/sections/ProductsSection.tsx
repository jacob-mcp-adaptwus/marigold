import React from 'react';
import { Sparkles, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const ProductsSection: React.FC = () => {
  const products = [
    {
      title: 'dAisy Ad Management',
      icon: <Sparkles className="h-5 w-5 text-[#f59d40] mr-2" />,
      description: 'AI-driven advertising platform that optimizes campaign performance in real-time.',
      features: ['Automated bid management', 'Creative performance analysis', 'Audience targeting optimization']
    },
    {
      title: 'DataSpark Analytics',
      icon: <Zap className="h-5 w-5 text-[#3b82f6] mr-2" />,
      description: 'Comprehensive data analytics solution providing actionable insights from your business data.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting']
    },
    {
      title: 'ComplianceGuard',
      icon: <CheckCircle2 className="h-5 w-5 text-[#10b981] mr-2" />,
      description: 'Automated compliance monitoring system ensuring adherence to industry regulations.',
      features: ['Regulatory updates', 'Audit trail generation', 'Risk assessment tools']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Suite</h2>
          <p className="text-gray-600 text-lg">
            Powerful solutions designed to drive your business forward with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="font-bold text-xl">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full justify-center mt-2"
                  withArrow
                  href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" withArrow href="/products">
            View all solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 