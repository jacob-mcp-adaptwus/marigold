import React, { ReactNode } from 'react';

interface TestimonialCardProps {
  quote: ReactNode;
  author: string;
  role: string;
  variant?: 'default' | 'highlight';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  variant = 'default'
}) => {
  const bgClass = variant === 'highlight' 
    ? "bg-gradient-to-br from-[#f8e8e8] to-[#f0dfdf] border-[#e8cdcd]" 
    : "bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] border-[#ddd9d9]";
    
  return (
    <div className={`${bgClass} p-6 rounded-xl relative group hover:shadow-md transition-all duration-300 border`}>
      <div className="absolute top-6 left-6 text-5xl text-[#f59d40] opacity-30 group-hover:opacity-40 transition-opacity">"</div>
      <div className="absolute bottom-6 right-6 text-5xl text-[#f59d40] opacity-30 group-hover:opacity-40 transition-opacity rotate-180">"</div>
      <p className="relative mb-5 text-[#555555] z-10 pt-4">"{typeof quote === 'string' ? quote : <>{quote}</>}"</p>
      <div className="flex items-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#f59d40] bg-opacity-20 flex items-center justify-center text-xl font-bold text-[#bb141a] mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-[#2a2b2a]">{author}</h4>
          <p className="text-[#666666] text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 