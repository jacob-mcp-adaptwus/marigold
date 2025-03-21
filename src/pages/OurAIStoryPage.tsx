import React from 'react';
import Layout from '../components/layout/Layout';
import { ArrowRight, Sparkles, Zap, Brain, Star, Lightbulb } from 'lucide-react';

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
    content1: "Our flagship product, dAisy Ad Management, was born from our own need to optimize advertising campaigns more efficiently. We built an AI system that could not only manage campaigns across multiple platforms but learn and improve over time.",
    content2: "What started as an internal tool quickly became our most sought-after offering. Clients who adopted dAisy saw an average of 40% improvement in ad performance and 60% reduction in management time."
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
      {/* Hero section */}
      <div className="bg-white pt-24 pb-12">
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
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">{storyData.section1.title}</h2>
            <p>{storyData.section1.content}</p>
            
            <div className="my-12 p-6 bg-[#f8f8f8] rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-[#f59d40] mr-3" />
                <h3 className="text-xl font-bold text-[#2a2b2a] m-0">{storyData.visionCallout.title}</h3>
              </div>
              <p className="m-0">
                "{storyData.visionCallout.quote}"
              </p>
              <p className="italic text-right m-0 mt-2">{storyData.visionCallout.attribution}</p>
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
            <p>{storyData.section3.content1}</p>
            <p>{storyData.section3.content2}</p>
            
            <div className="my-12 p-6 bg-gradient-to-r from-[#fdf8f1] to-[#fff8ea] rounded-xl border border-[#f59d40] relative overflow-hidden">
              {/* Tech circuit pattern */}
              <div className="absolute inset-0 z-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M10,50 L90,50" stroke="#bb141a" strokeWidth="1" />
                      <path d="M50,10 L50,90" stroke="#bb141a" strokeWidth="1" />
                      <path d="M20,20 L80,80" stroke="#bb141a" strokeWidth="1" />
                      <path d="M20,80 L80,20" stroke="#bb141a" strokeWidth="1" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#bb141a" strokeWidth="1" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#bb141a" strokeWidth="1" />
                      <circle cx="50" cy="50" r="15" fill="none" stroke="#bb141a" strokeWidth="1" />
                    </pattern>
                    <pattern id="marigold" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M30,10 C35,10 40,15 40,20 C40,25 35,30 30,30 C25,30 20,25 20,20 C20,15 25,10 30,10 Z" fill="#f59d40" opacity="0.2" />
                      <path d="M30,15 C33,15 36,18 36,21 C36,24 33,27 30,27 C27,27 24,24 24,21 C24,18 27,15 30,15 Z" fill="#f59d40" opacity="0.4" />
                      <path d="M30,40 L30,50" stroke="#2a8735" strokeWidth="1" opacity="0.5" />
                      <path d="M28,42 L26,46" stroke="#2a8735" strokeWidth="1" opacity="0.5" />
                      <path d="M32,42 L34,46" stroke="#2a8735" strokeWidth="1" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                  <rect width="100%" height="100%" fill="url(#marigold)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#2a2b2a] mb-4">{storyData.testimonial.title}</h3>
                <p className="mb-2">
                  "{storyData.testimonial.quote}"
                </p>
                <p className="italic text-right m-0">{storyData.testimonial.attribution}</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#2a2b2a] mb-6">{storyData.section4.title}</h2>
            <p>{storyData.section4.content1}</p>
            <p>{storyData.section4.content2}</p>
            
            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold text-[#2a2b2a] mb-4">{storyData.cta.title}</h3>
              <p>{storyData.cta.content}</p>
              <div className="mt-6">
                <a
                  href={storyData.cta.buttonLink}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#bb141a] hover:bg-[#ea5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bb141a] transition-colors"
                >
                  {storyData.cta.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurAIStoryPage; 