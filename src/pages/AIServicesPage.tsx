import React from 'react';
import Layout from '../components/layout/Layout';
import { CheckCircle2, ArrowRight, Code, Users, TrendingUp, Shield } from 'lucide-react';

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}10` }}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-[#2a2b2a]">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="p-6 bg-gray-50">
        <h4 className="font-semibold text-lg mb-3 text-[#2a2b2a]">Key Features</h4>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color }} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={ctaHref} 
          className="inline-flex items-center font-medium hover:underline"
          style={{ color }}
        >
          {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI application development tailored to your business needs. From chatbots to predictive analytics, we build solutions that leverage the latest in artificial intelligence to drive business growth.",
      icon: <Code className="h-10 w-10 text-[#bb141a]" />,
      features: [
        "Custom AI application development",
        "Machine learning model creation & training",
        "Natural language processing solutions",
        "Computer vision implementation",
        "Automated workflow systems",
        "Predictive analytics tools"
      ],
      ctaText: "Explore Development",
      ctaHref: "/development",
      color: "#bb141a"
    },
    {
      title: "AI Consulting",
      description: "Navigate the complex world of AI with expert guidance. Our consultants help you identify opportunities, develop strategic roadmaps, and implement AI solutions that align with your business objectives.",
      icon: <Users className="h-10 w-10 text-[#2a2b2a]" />,
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Business process optimization",
        "Technology stack recommendations",
        "ROI analysis for AI investments",
        "Executive leadership workshops"
      ],
      ctaText: "Get Expert Advice",
      ctaHref: "/consulting",
      color: "#2a2b2a"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI solutions into your existing systems and workflows. We ensure your AI investments work harmoniously with your technology ecosystem to maximize efficiency and ROI.",
      icon: <TrendingUp className="h-10 w-10 text-[#f59d40]" />,
      features: [
        "Legacy system integration",
        "API development and management",
        "Data pipeline construction",
        "Cross-platform compatibility",
        "Cloud integration services",
        "Scalable architecture design"
      ],
      ctaText: "Integrate AI Solutions",
      ctaHref: "/integration",
      color: "#f59d40"
    },
    {
      title: "AI Governance",
      description: "Implement robust governance frameworks for your AI systems. Ensure compliance, ethics, and transparency in your AI operations while maintaining control over your AI assets.",
      icon: <Shield className="h-10 w-10 text-[#627c42]" />,
      features: [
        "Ethical AI framework development",
        "Compliance monitoring systems",
        "Privacy protection protocols",
        "Bias detection and mitigation",
        "AI audit and documentation",
        "Risk management strategies"
      ],
      ctaText: "Ensure Compliance",
      ctaHref: "/governance",
      color: "#627c42"
    }
  ];

  return (
    <Layout>
      <div className="relative pt-28 pb-16 bg-gradient-to-b from-[#f8f8f8] to-white">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(to right, rgba(187, 20, 26, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 20, 26, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Subtle marigold flowers */}
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
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2a2b2a]">
              Our <span className="text-[#bb141a]">AI Services</span>
            </h1>
            <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
              Comprehensive AI solutions for every stage of your business journey.<br />
              From development to governance, we provide end-to-end AI expertise.
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
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2a2b2a]">Need a Custom Solution?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We understand that every business has unique challenges. Contact us today to discuss how our AI expertise can help solve your specific business problems.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#bb141a] text-white font-medium rounded-lg hover:bg-[#ea5830] transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIServicesPage; 