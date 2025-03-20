import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
}) => {
  return (
    <div className="bg-[#2a2b2a] p-6 rounded-xl relative group hover:bg-opacity-60 transition-all duration-300 border border-[#ddd9d9] border-opacity-10 hover:border-opacity-20">
      <div className="absolute top-6 left-6 text-5xl text-[#f59d40] opacity-20 group-hover:opacity-30 transition-opacity">"</div>
      <div className="absolute bottom-6 right-6 text-5xl text-[#f59d40] opacity-20 group-hover:opacity-30 transition-opacity rotate-180">"</div>
      <p className="relative mb-5 text-[#ddd9d9] z-10 pt-4">"{quote}"</p>
      <div className="flex items-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#f59d40] bg-opacity-20 flex items-center justify-center text-xl font-bold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-[#ddd9d9] text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 