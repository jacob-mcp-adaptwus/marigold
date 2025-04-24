import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  title: string;
  description: string | React.ReactNode;
  company: string;
  industry: string;
  metrics: string[];
  link: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  company,
  industry,
  metrics,
  link,
  image
}) => {
  // Check if the link is internal or external
  const isInternalLink = link.startsWith('/');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-50">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-[#f59d40] rounded text-xs font-medium text-white">
          {industry}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#2a2b2a] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        
        {/* Metrics */}
        <ul className="space-y-2 mb-4">
          {metrics.map((metric, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-[#f59d40] mr-2">•</span>
              <span className="text-gray-600">{metric}</span>
            </li>
          ))}
        </ul>
        
        {/* Link */}
        {isInternalLink ? (
          <Link 
            to={link} 
            className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <a 
            href={link} 
            className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard; 