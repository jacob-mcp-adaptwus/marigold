import React from 'react';
import { BarChart3, Zap, Lightbulb } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-[#f59d40]" />,
      title: 'AI Powered Advertising',
      description: 'Leverage AI to optimize your advertising campaigns for maximum ROI and targeted audience engagement.'
    },
    {
      icon: <Zap className="h-8 w-8 text-[#f59d40]" />,
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation, reducing manual tasks and increasing productivity.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#f59d40]" />,
      title: 'AI Consulting',
      description: 'Custom AI Solutions and strategic guidance to transform your business and gain competitive advantage.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#ddd9d9] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          radial-gradient(circle, rgba(245, 157, 64, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Tech-inspired digital circuit patterns */}
      <div className="absolute inset-0">
        {/* Digital circuit paths */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-32 h-2 bg-[#f59d40] opacity-15 transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-2 bg-[#f59d40] opacity-15 transform -rotate-30"></div>
          <div className="absolute top-3/4 right-1/3 w-28 h-2 bg-[#f59d40] opacity-25 transform -rotate-15"></div>
          <div className="absolute top-1/3 left-1/3 w-36 h-2 bg-[#f59d40] opacity-20 transform rotate-75"></div>
          
          {/* Connection points */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[#f59d40] opacity-20 shadow-[0_0_10px_rgba(245,157,64,0.4)]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-[#f59d40] opacity-20 shadow-[0_0_10px_rgba(245,157,64,0.4)]"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 rounded-full bg-[#f59d40] opacity-20 shadow-[0_0_10px_rgba(245,157,64,0.4)]"></div>
          <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-[#f59d40] opacity-20 shadow-[0_0_10px_rgba(245,157,64,0.4)]"></div>
          
          {/* Intersecting nodes */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-[#f59d40] opacity-20 shadow-[0_0_15px_rgba(245,157,64,0.5)]"></div>
        </div>
        
        {/* Binary code pattern */}
        <div className="absolute left-5 top-1/4 opacity-10 text-[#2a2b2a] font-mono text-xs">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-1">
              {[...Array(10)].map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Marigold flower elements */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, #f59d40 20%, transparent 70%)'
        }}></div>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-14 h-14 bg-[#f59d40] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(16px)`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
      
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-10">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, #f59d40 20%, transparent 70%)'
        }}></div>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-10 h-10 bg-[#f59d40] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(12px)`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
      
      {/* Tech nodes and connections */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-[#2a2b2a]"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              opacity: 0.2 + (Math.random() * 0.5)
            }}
          ></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px bg-[#2a2b2a]"
            style={{
              left: `${Math.random() * 100}%`,
              top: 0,
              bottom: 0,
              opacity: 0.2 + (Math.random() * 0.5)
            }}
          ></div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#2a2b2a]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15 + (Math.random() * 0.2)
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            Our AI-Driven <span className="text-[#f59d40]">Services</span>
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            We seamlessly integrate AI technology into your business operations, much like marigolds nurture and strengthen the growth of the plants around them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 