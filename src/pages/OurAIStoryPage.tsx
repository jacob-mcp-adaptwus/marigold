import React from 'react';
import Layout from '../components/layout/Layout';
import { ArrowRight, Sparkles, Zap, Brain, Star, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

// Background pattern component
const MarigoldBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M10,100 L190,100" stroke="#bb141a" strokeWidth="1.5" />
          <path d="M100,10 L100,190" stroke="#bb141a" strokeWidth="1.5" />
          <path d="M40,40 L160,160" stroke="#bb141a" strokeWidth="1.5" />
          <path d="M40,160 L160,40" stroke="#bb141a" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#bb141a" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#bb141a" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#bb141a" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="10" fill="none" stroke="#bb141a" strokeWidth="1" />
          <circle cx="170" cy="170" r="10" fill="none" stroke="#bb141a" strokeWidth="1" />
          <circle cx="30" cy="170" r="10" fill="none" stroke="#bb141a" strokeWidth="1" />
          <circle cx="170" cy="30" r="10" fill="none" stroke="#bb141a" strokeWidth="1" />
        </pattern>
        <pattern id="marigold-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Marigold Flower 1 */}
          <g transform="translate(60, 60)">
            {/* Petals */}
            <path d="M0,-15 C10,-15 20,-5 20,5 C20,15 10,25 0,25 C-10,25 -20,15 -20,5 C-20,-5 -10,-15 0,-15 Z" fill="#f59d40" />
            <path d="M-22,-8 C-17,-15 -7,-20 3,-15 C13,-10 18,0 13,10 C8,20 -2,25 -12,20 C-22,15 -27,5 -22,-8 Z" fill="#f59d40" />
            <path d="M-13,-22 C-5,-27 5,-27 13,-22 C22,-17 27,-7 22,3 C17,13 7,18 -3,13 C-13,8 -18,-2 -13,-12 Z" fill="#f59d40" />
            <path d="M8,-25 C15,-20 20,-10 15,0 C10,10 0,15 -10,10 C-20,5 -25,-5 -20,-15 C-15,-25 -5,-30 5,-25 Z" fill="#f59d40" />
            <path d="M22,-10 C27,0 27,10 22,20 C17,30 7,35 -3,30 C-13,25 -18,15 -13,5 C-8,-5 2,-10 12,-5 Z" fill="#f59d40" />
            <circle cx="0" cy="0" r="10" fill="#bb141a" />
            {/* Stem */}
            <path d="M0,25 L0,60" stroke="#2a8735" strokeWidth="3" />
            <path d="M-3,35 L-8,45" stroke="#2a8735" strokeWidth="2" />
            <path d="M3,35 L8,45" stroke="#2a8735" strokeWidth="2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      <rect width="100%" height="100%" fill="url(#marigold-pattern)" />
    </svg>
  </div>
);

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

// Template data - replace with your actual content
const storyData = {
  // Hero section
  heroTitle: "Our AI Story",
  heroSubtitle: "How we transformed our business with artificial intelligence and built a company that embraces AI at every level.",
  
  // Section 1: Beginning
  section1: {
    title: "The Beginning",
    content: "Marigold ONE11 began with a single, powerful idea: What if business could grow the way gardens do—through care, companionship, and the right environment? Inspired by the practice of companion planting, we embraced the concept that marigolds enhance the growth of surrounding plants, and we built a company that would do the same for businesses.\n\nFounded in Omaha in a time of rapid technological change, we saw not just the power of AI, but the potential for it to nurture businesses just as marigolds protect and enrich a garden."
  },
  
  // Vision callout
  visionCallout: {
    title: "The Marigold Vision",
    quote: "We believe growth is a result of the right environment, nurturing support, and intentional strategy. At Marigold ONE11, we don't just build marketing plans—we cultivate ecosystems.",
    attribution: "— Founder & CEO"
  },
  
  // Section 2: AI in Our DNA
  section2: {
    title: "AI in Our DNA",
    content: "From day one, we built our systems and workflows around AI capabilities. Our internal operations leverage custom-built AI tools that handle everything from client onboarding to project management. This means our team spends less time on administrative tasks and more time on creative strategy and client relationships."
  },
  
  // AI features
  aiFeatures: [
    {
      icon: <Brain className="h-6 w-6 text-[#bb141a] mr-2" />,
      title: "AI-Powered Research",
      description: "Our AI systems analyze market trends and competitor strategies 24/7, giving us insights that would take weeks to gather manually."
    },
    {
      icon: <Zap className="h-6 w-6 text-[#bb141a] mr-2" />,
      title: "Automated Workflows",
      description: "We've automated 75% of our internal processes, from content scheduling to performance reporting."
    }
  ],
  
  // Section 3: DAIsy Revolution
  section3: {
    title: "The dAisy Revolution",
    content1: "Our flagship product, <ColoredDaisy /> Ad Management, was born from our own need to optimize advertising campaigns more efficiently. We built an AI system that could not only manage campaigns across multiple platforms but learn and improve over time.",
    content2: "What started as an internal tool quickly became our most sought-after offering. Clients who adopted <ColoredDaisy /> saw an average of 40% improvement in ad performance and 60% reduction in management time."
  },
  
  // Client testimonial
  testimonial: {
    title: "Client Success Story",
    quote: "After implementing Marigold ONE11's AI systems, we saw our conversion rates increase by 52% while reducing our marketing team's workload by nearly a third. The insights we get from their dashboards have transformed how we approach our digital strategy.",
    attribution: "— Marketing Director, E-commerce Client"
  },
  
  // Section 4: Looking Forward
  section4: {
    title: "Looking Forward",
    content1: "Today, Marigold ONE11 continues to push the boundaries of what's possible with AI in marketing and business operations. We're constantly developing new tools and refining our existing ones, always with the goal of helping our clients work smarter, not harder.",
    content2: "Our story is still being written, but one thing is clear: AI isn't just part of our business model—it is our business model. And we're excited to help more companies discover the transformative power of artificial intelligence, tailored to their unique needs."
  },
  
  // CTA section
  cta: {
    title: "Ready to Start Your AI Journey?",
    content: "Whether you're looking to optimize your advertising, streamline your operations, or implement AI throughout your business, we're here to help.",
    buttonText: "Schedule a Consultation",
    buttonLink: "/contact"
  }
};

const OurAIStoryPage: React.FC = () => {
  return (
    <Layout>
      <MarigoldBackground />
      {/* Hero section */}
      <div className="bg-white/95 pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-[#2a2b2a] sm:text-5xl md:text-6xl mb-6">
              {storyData.heroTitle.includes("AI") 
                ? <>Our <span className="text-[#f59d40]">AI</span> Story</>
                : storyData.heroTitle
              }
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {storyData.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="bg-white/95 py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">{storyData.section1.title}</h2>
            <p>{storyData.section1.content}</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-[#f8f8f8] to-white rounded-xl border-l-4 border-[#f59d40] shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-[-10px] right-[-10px] w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#bb141a" strokeWidth="2" />
                  <path d="M20,50 L80,50" stroke="#bb141a" strokeWidth="2" />
                  <path d="M50,20 L50,80" stroke="#bb141a" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g transform="translate(50, 50)">
                    <path d="M0,-20 C12,-20 24,-8 24,4 C24,16 12,28 0,28 C-12,28 -24,16 -24,4 C-24,-8 -12,-20 0,-20 Z" fill="#f59d40" />
                    <path d="M0,-12 C8,-12 16,-4 16,4 C16,12 8,20 0,20 C-8,20 -16,12 -16,4 C-16,-4 -8,-12 0,-12 Z" fill="#bb141a" />
                    <path d="M0,28 L0,50" stroke="#2a8735" strokeWidth="3" />
                  </g>
                </svg>
              </div>
              
              <div className="flex items-center mb-4 relative z-10">
                <Sparkles className="h-8 w-8 text-[#f59d40] mr-3" />
                <h3 className="text-xl font-bold text-[#2a2b2a] m-0">{storyData.visionCallout.title}</h3>
              </div>
              <p className="m-0 relative z-10 text-lg font-medium">
                "{storyData.visionCallout.quote}"
              </p>
              <p className="italic text-right m-0 mt-2 text-[#bb141a] relative z-10">{storyData.visionCallout.attribution}</p>
            </div>
            
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">{storyData.section2.title}</h2>
            <p>{storyData.section2.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {storyData.aiFeatures.map((feature, index) => (
                <div key={index} className="p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h4 className="font-bold text-[#2a2b2a] m-0">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 m-0">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">
              {storyData.section3.title.includes("dAisy") 
                ? <>The <ColoredDaisy /> Revolution</> 
                : storyData.section3.title
              }
            </h2>
            <p>Our flagship product, <ColoredDaisy /> Ad Management, was born from our own need to optimize advertising campaigns more efficiently. We built an AI system that could not only manage campaigns across multiple platforms but learn and improve over time.</p>
            <p>What started as an internal tool quickly became our most sought-after offering. Clients who adopted <ColoredDaisy /> saw an average of 40% improvement in ad performance and 60% reduction in management time.</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-[#fdf8f1] to-white rounded-xl border border-[#f59d40] shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <Star className="w-full h-full text-[#f59d40]" />
              </div>
              <div className="absolute left-[-30px] bottom-[-30px] w-64 h-64 opacity-10">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  {/* Marigold Flower - Larger for testimonial */}
                  <g transform="translate(60, 60)">
                    {/* Petals */}
                    <path d="M0,-20 C15,-20 30,-5 30,10 C30,25 15,40 0,40 C-15,40 -30,25 -30,10 C-30,-5 -15,-20 0,-20 Z" fill="#f59d40" />
                    <path d="M-30,-10 C-22,-20 -10,-30 5,-20 C20,-10 25,5 15,20 C5,35 -10,40 -25,30 C-40,20 -40,0 -30,-10 Z" fill="#f59d40" />
                    <path d="M-20,-30 C-5,-40 10,-40 25,-30 C40,-20 45,-5 35,10 C25,25 10,30 -5,20 C-20,10 -30,-5 -20,-20 Z" fill="#f59d40" />
                    <path d="M10,-35 C25,-25 35,-10 25,5 C15,20 0,25 -15,15 C-30,5 -35,-10 -25,-25 C-15,-40 -5,-45 10,-35 Z" fill="#f59d40" />
                    <path d="M30,-15 C40,0 40,15 30,30 C20,45 5,50 -10,40 C-25,30 -30,15 -20,0 C-10,-15 5,-20 20,-10 Z" fill="#f59d40" />
                    <circle cx="0" cy="0" r="15" fill="#bb141a" />
                    {/* Stem */}
                    <path d="M0,40 L0,90" stroke="#2a8735" strokeWidth="4" />
                    <path d="M-5,55 L-12,70" stroke="#2a8735" strokeWidth="3" />
                    <path d="M5,55 L12,70" stroke="#2a8735" strokeWidth="3" />
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#2a2b2a] mb-4">{storyData.testimonial.title}</h3>
                <p className="mb-2 text-lg">
                  "{storyData.testimonial.quote}"
                </p>
                <p className="italic text-right m-0 text-[#bb141a]">{storyData.testimonial.attribution}</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">{storyData.section4.title}</h2>
            <p>{storyData.section4.content1}</p>
            <p>{storyData.section4.content2}</p>
            
            <div className="mt-12 mb-8 p-8 bg-gradient-to-br from-[#fdf8f1] via-white to-[#f8f8f8] rounded-xl border border-[#f59d40] shadow-lg relative overflow-hidden">
              {/* Decorative tech pattern */}
              <div className="absolute top-0 right-0 bottom-0 w-1/3 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 200">
                  <path d="M0,0 L100,0 L100,200 L0,200 Z" fill="#bb141a" opacity="0.1" />
                  <path d="M20,10 L80,10" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,20 L90,20" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,30 L80,30" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,40 L90,40" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,50 L80,50" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,60 L90,60" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,70 L80,70" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,80 L90,80" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,90 L80,90" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,100 L90,100" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,110 L80,110" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,120 L90,120" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,130 L80,130" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,140 L90,140" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,150 L80,150" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,160 L90,160" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,170 L80,170" stroke="#bb141a" strokeWidth="1" />
                  <path d="M10,180 L90,180" stroke="#bb141a" strokeWidth="1" />
                  <path d="M20,190 L80,190" stroke="#bb141a" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Decorative marigold */}
              <div className="absolute bottom-[-20px] left-[-10px] w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100">
                  <g transform="translate(50, 50)">
                    <path d="M0,-15 C10,-15 20,-5 20,5 C20,15 10,25 0,25 C-10,25 -20,15 -20,5 C-20,-5 -10,-15 0,-15 Z" fill="#f59d40" />
                    <path d="M-22,-8 C-17,-15 -7,-20 3,-15 C13,-10 18,0 13,10 C8,20 -2,25 -12,20 C-22,15 -27,5 -22,-8 Z" fill="#f59d40" />
                    <path d="M-13,-22 C-5,-27 5,-27 13,-22 C22,-17 27,-7 22,3 C17,13 7,18 -3,13 C-13,8 -18,-2 -13,-12 Z" fill="#f59d40" />
                    <path d="M8,-25 C15,-20 20,-10 15,0 C10,10 0,15 -10,10 C-20,5 -25,-5 -20,-15 C-15,-25 -5,-30 5,-25 Z" fill="#f59d40" />
                    <path d="M22,-10 C27,0 27,10 22,20 C17,30 7,35 -3,30 C-13,25 -18,15 -13,5 C-8,-5 2,-10 12,-5 Z" fill="#f59d40" />
                    <circle cx="0" cy="0" r="10" fill="#bb141a" />
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#2a2b2a] mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-[#f59d40] mr-2" />
                  {storyData.cta.title}
                </h3>
                <p className="text-lg">{storyData.cta.content}</p>
                <div className="mt-6">
                  <Link
                    to={storyData.cta.buttonLink}
                    className="inline-flex items-center px-6 py-3 border border-[#2a8735] text-base font-medium rounded-md shadow-sm text-[#2a8735] bg-transparent hover:bg-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a8735] transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {storyData.cta.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurAIStoryPage; 