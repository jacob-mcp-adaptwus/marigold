import React from 'react';
import Layout from '../components/layout/Layout';
import { CheckCircle2, ArrowRight, Code, Users, TrendingUp, Shield, Brain, BrainCircuit, Network, Bot, Laptop, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
  ctaHref: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  ctaText, 
  ctaHref,
  color
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px] group flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 relative overflow-hidden">
        {/* Accent top border that appears on hover */}
        <div className="absolute inset-x-0 top-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: color }}></div>
        
        <div className="flex items-center gap-4 mb-4 min-h-[56px]">
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow duration-300 flex-shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            {/* Light effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" 
                 style={{ background: `radial-gradient(circle at 30% 30%, white, transparent 70%)` }}></div>
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#2a2b2a] group-hover:text-[#bb141a] transition-colors duration-300">{title}</h3>
        </div>
        <div className="min-h-[80px]">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50 relative overflow-hidden flex-grow flex flex-col">
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
          <div className="absolute top-1/4 right-1/4 w-20 h-px" style={{ backgroundColor: color }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-px" style={{ backgroundColor: color }}></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
        </div>
        
        <h4 className="font-semibold text-lg mb-3 text-[#2a2b2a]">Key Features</h4>
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color }} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="h-8 flex items-center mt-auto">
          <a 
            href={ctaHref} 
            className="inline-flex items-center font-medium group-hover:underline transition-all duration-300"
            style={{ color }}
          >
            <span className="relative">
              {ctaText}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: color }}></span>
            </span>
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI application development tailored to your business needs. From chatbots to predictive analytics, we build solutions that leverage the latest in artificial intelligence to drive business growth.",
      icon: <BrainCircuit className="h-10 w-10 text-[#bb141a]" />,
      features: [
        "Custom AI application development",
        "Machine learning model creation & training",
        "Natural language processing solutions",
        "Computer vision implementation",
        "Automated workflow systems",
        "Predictive analytics tools"
      ],
      ctaText: "Explore Development",
      ctaHref: "/contact",
      color: "#bb141a"
    },
    {
      title: "AI Consulting",
      description: "Navigate the complex world of AI with expert guidance. Our consultants help you identify opportunities, develop strategic roadmaps, and implement AI solutions that align with your business objectives.",
      icon: <Brain className="h-10 w-10 text-[#2a2b2a]" />,
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Business process optimization",
        "Technology stack recommendations",
        "ROI analysis for AI investments",
        "Executive leadership workshops"
      ],
      ctaText: "Get Expert Advice",
      ctaHref: "/contact",
      color: "#2a2b2a"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI solutions into your existing systems and workflows. We ensure your AI investments work harmoniously with your technology ecosystem to maximize efficiency and ROI.",
      icon: <Network className="h-10 w-10 text-[#f59d40]" />,
      features: [
        "Legacy system integration",
        "API development and management",
        "Data pipeline construction",
        "Cross-platform compatibility",
        "Cloud integration services",
        "Scalable architecture design"
      ],
      ctaText: "Integrate AI Solutions",
      ctaHref: "/contact",
      color: "#f59d40"
    },
    {
      title: "AI Governance",
      description: "Implement robust governance frameworks for your AI systems. Ensure compliance, ethics, and transparency in your AI operations while maintaining control over your AI assets.",
      icon: <Shield className="h-10 w-10 text-[#ea5830]" />,
      features: [
        "Ethical AI framework development",
        "Compliance monitoring systems",
        "Privacy protection protocols",
        "Bias detection and mitigation",
        "AI audit and documentation",
        "Risk management strategies"
      ],
      ctaText: "Ensure Compliance",
      ctaHref: "/contact",
      color: "#ea5830"
    }
  ];

  return (
    <Layout>
      <div className="relative pt-28 pb-16 bg-[#f8f8f8]">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(to right, rgba(187, 20, 26, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 20, 26, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Circuit lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bb141a] to-transparent opacity-[0.07]"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f59d40] to-transparent opacity-[0.07]"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#bb141a] to-transparent opacity-[0.07]"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#f59d40] to-transparent opacity-[0.07]"></div>
          
          {/* Circuit nodes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.1]"></div>
          <div className="absolute top-1/4 left-3/4 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.1]"></div>
          <div className="absolute top-3/4 left-1/4 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.1]"></div>
          <div className="absolute top-3/4 left-3/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.1]"></div>
          
          {/* Marigold flower elements */}
          <div className="absolute top-40 right-20 opacity-[0.05]">
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

          {/* Second marigold flower */}
          <div className="absolute bottom-40 left-20 opacity-[0.05]">
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
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2a2b2a]">
              Our <span className="text-[#f59d40]">AI Services</span>
            </h1>
            <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
              Comprehensive AI solutions that nurture your business growth,<br />
              just as marigolds strengthen the garden around them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                ctaText={service.ctaText}
                ctaHref={service.ctaHref}
                color={service.color}
              />
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-white rounded-xl shadow-md text-center relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'radial-gradient(circle, #f59d40 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2a2b2a]">Need a Custom <span className="text-[#bb141a]">AI Solution</span>?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We understand that every business has unique challenges. Contact us today to discuss how our AI expertise can help solve your specific business problems.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              href="/contact"
              withArrow
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIServicesPage; 