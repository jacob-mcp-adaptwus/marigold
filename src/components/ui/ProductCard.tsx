import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  price: string;
  period?: string;
  ctaText?: string;
  ctaHref?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  icon,
  description,
  features,
  price,
  period = '/month',
  ctaText = 'Get Started',
  ctaHref = '#',
  gradientFrom = '#bb141a',
  gradientTo = '#ea5830',
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-[#ddd9d9] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className={`relative h-64 bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] p-6`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-opacity-90">{description}</p>
      </div>
      <div className="p-6 flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <span className="text-2xl font-bold text-[#2a2b2a]">{price}</span>
          <span className="text-[#2a2b2a] opacity-70">{period}</span>
        </div>
      </div>
      <div className="px-6 pb-6">
        <a 
          href={ctaHref} 
          className="w-full bg-[#bb141a] hover:bg-[#ea5830] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center inline-block"
        >
          {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard; 