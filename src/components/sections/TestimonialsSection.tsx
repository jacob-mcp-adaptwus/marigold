import React, { useState, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

// Helper function to process quotes that might contain dAisy
const formatQuoteWithDaisy = (quote: string) => {
  if (quote.includes('dAisy')) {
    const parts = quote.split('dAisy');
    return (
      <>
        {parts[0]}<ColoredDaisy />{parts[1]}
      </>
    );
  }
  return quote;
};

const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = 2; // We have 6 testimonials and show 3 at a time, so 2 pages
  
  const testimonials = [
    {
      quote: "Marigold is amazing! Pam and Trent are a wonderful pair, they compliment each other so well and are a powerhouse of information and have helped me with my business in so many ways. I cannot say how much I recommend them and their team!",
      author: "Jacalin F.",
      role: "Business Owner"
    },
    {
      quote: "I have been working with Marigold111 for several years now. There service and knowledge is exceptional. I have worked with other vendors in the past with little results. Marigold 111 handles my website, my social media marketing and blog articles. It is comforting to have one agency handle it all for me. I am not just a client but feel there success and my success depends on us both working together in a partnership.",
      author: "Mark S.",
      role: "Business Owner"
    },
    {
      quote: "With help from Marigold ONE11, we found our sweet spot: a 30% conversion rate from Google Ads. After testing both overqualified and underqualified lead forms, a simple, balanced approach—asking only key info and following up fast—gave us quality leads without overwhelming the team. We're now scaling with confidence.",
      author: "Rafael P.",
      role: "Marketing Director"
    },
    {
      quote: "Trent, Pam, and Kurstin have been absolutely amazing to work with! They are so hands on and work with us personally day in and day out to optimize and market our business! I don't have enough kind words for this team and what they have done for our company!",
      author: "Jack S.",
      role: "Business Owner"
    },
    {
      quote: "What truly set this experience apart was the professionalism and expertise demonstrated by the team at Marigold ONE11. Their deep understanding of digital advertising, coupled with a commitment to delivering exceptional service, made the entire process seamless. From campaign planning to execution and performance analysis, they ensured that every aspect was handled with precision and care. Their proactive communication and strategic insights played a pivotal role in helping us achieve our marketing objectives.",
      author: "Maggi T.",
      role: "Partner Success Strategist"
    },
    {
      quote: "I appreciate the guidance and the partnership that Trent and Pam provide in an ongoing and structured way. I look forward to further developing my website with their instruction and support. Thank you for being a dynamic team!",
      author: "Keele T.",
      role: "Client"
    }
  ];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Determine which testimonials to show based on current page
  const getVisibleTestimonials = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

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
        
        {/* Multi-card Carousel Section */}
        <div className="relative">
          {/* Navigation Arrow - Left */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 text-[#bb141a] z-10 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Testimonial Cards - 3 at once */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${currentPage}-${index}`}
                quote={formatQuoteWithDaisy(testimonial.quote)}
                author={testimonial.author}
                role={testimonial.role}
                variant={index === 1 ? "highlight" : "default"}
              />
            ))}
          </div>
          
          {/* Navigation Arrow - Right */}
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 text-[#bb141a] z-10 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Page indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index ? 'bg-[#bb141a] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;