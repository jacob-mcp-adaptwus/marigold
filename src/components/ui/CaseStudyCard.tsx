import React, { ReactNode } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  company: string;
  description: ReactNode;
  metrics: string[];
  link?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  company,
  description,
  metrics,
  link = '#',
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col space-y-1 mb-4">
          <span className="text-gray-500 text-sm font-medium">{company}</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="border-t border-gray-100 pt-4 mb-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Results</h4>
          <ul className="space-y-2">
            {metrics.map((metric, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{metric}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a href={link} className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200">
          Read case study
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard; 