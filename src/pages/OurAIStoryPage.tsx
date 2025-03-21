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
    content: "MarigoldONE11 started with a simple idea: what if we could harness the power of AI not just as a service we offer, but as the foundation of how we operate? In 2021, as AI tools became increasingly sophisticated, we saw an opportunity to build a different kind of agency—one where AI wasn't just a buzzword, but our core competitive advantage."
  },
  
  // Vision callout
  visionCallout: {
    title: "The Marigold Vision",
    quote: "We don't just use AI—we live it. Every process, every client interaction, every campaign we run is enhanced by artificial intelligence. This isn't about replacing humans, it's about empowering them.",
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
    quote: "After implementing MarigoldONE11's AI systems, we saw our conversion rates increase by 52% while reducing our marketing team's workload by nearly a third. The insights we get from their dashboards have transformed how we approach our digital strategy.",
    attribution: "— Marketing Director, E-commerce Client"
  },
  
  // Section 4: Looking Forward
  section4: {
    title: "Looking Forward",
    content1: "Today, MarigoldONE11 continues to push the boundaries of what's possible with AI in marketing and business operations. We're constantly developing new tools and refining our existing ones, always with the goal of helping our clients work smarter, not harder.",
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
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <Star className="w-full h-full text-[#f59d40]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a2b2a] mb-4">{storyData.testimonial.title}</h3>
              <p className="mb-2">
                "{storyData.testimonial.quote}"
              </p>
              <p className="italic text-right m-0">{storyData.testimonial.attribution}</p>
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