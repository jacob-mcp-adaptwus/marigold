import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  linkHref = '/pricing',
  linkText = 'View Pricing',
}) => {
  // Check if the link is internal or external
  const isInternalLink = linkHref.startsWith('/');

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-transparent hover:border-[#f59d40] group">
      <div className="mb-4 bg-[#bb141a] bg-opacity-20 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#bb141a] group-hover:text-white transition-all duration-300 relative overflow-hidden">
        {/* Light source effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-30 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute -inset-1 bg-[#bb141a] opacity-0 group-hover:opacity-20 blur-md group-hover:blur-xl transition-all duration-300"></div>
        <div className="transition-colors relative z-10">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#2a2b2a]">{title}</h3>
      <p className="text-[#2a2b2a] mb-4 opacity-80">{description}</p>
      {isInternalLink ? (
        <Link 
          to={linkHref} 
          className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors"
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      ) : (
        <a 
          href={linkHref}
          className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ServiceCard; 