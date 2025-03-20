import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "MarigoldONE11's AI solutions increased our marketing ROI by 250%. Their team made the integration seamless and provided outstanding support.",
      author: "Sarah Johnson",
      role: "CMO, TechVision Inc."
    },
    {
      quote: "The dAisy Ad Management platform revolutionized our approach to digital advertising. We've seen a 40% increase in conversion rates since implementation.",
      author: "Michael Chen",
      role: "Digital Director, NexGen Retail"
    },
    {
      quote: "Their strategic consulting helped us navigate AI adoption across our enterprise. MarigoldONE11 truly understands how to align technology with business objectives.",
      author: "Elena Rodriguez",
      role: "CEO, Innovate Group"
    }
  ];

  return (
    <section className="py-16 bg-white text-[#2a2b2a] relative overflow-hidden">
      {/* Subtle background with barely visible tech lines and marigold elements */}
      <div className="absolute inset-0">
        {/* Extremely subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(to right, rgba(245, 157, 64, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 157, 64, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Very subtle marigold flowers - top right */}
        <div className="absolute top-20 right-20 opacity-[0.08]">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at center, #f59d40 15%, transparent 65%)'
            }}></div>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-14 h-14 bg-[#f59d40] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(16px)`,
                  filter: 'blur(0.5px)'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Very subtle marigold flowers - bottom left */}
        <div className="absolute bottom-20 left-20 opacity-[0.08]">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at center, #f59d40 15%, transparent 65%)'
            }}></div>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-10 h-10 bg-[#f59d40] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(12px)`,
                  filter: 'blur(0.5px)'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Almost invisible tech circuit lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f59d40] to-transparent opacity-[0.03]"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f59d40] to-transparent opacity-[0.03]"></div>
          <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#f59d40] to-transparent opacity-[0.03]"></div>
          <div className="absolute left-2/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#f59d40] to-transparent opacity-[0.03]"></div>
          
          {/* Circuit nodes */}
          <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-[#f59d40] opacity-[0.05]"></div>
          <div className="absolute top-1/3 left-2/3 w-2 h-2 rounded-full bg-[#f59d40] opacity-[0.05]"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-[#f59d40] opacity-[0.05]"></div>
          <div className="absolute top-2/3 left-2/3 w-2 h-2 rounded-full bg-[#f59d40] opacity-[0.05]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            What Our <span className="text-[#bb141a]">Clients</span> Say
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            Don't just take our word for it. See how MarigoldONE11 has helped businesses transform with AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;