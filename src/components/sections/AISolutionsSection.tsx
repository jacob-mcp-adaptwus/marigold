import React from 'react';
import { CheckCircle2, Lightbulb, ArrowRight, BarChart, Cpu } from 'lucide-react';

interface Solution {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  bgFrom?: string;
  bgTo?: string;
}

interface SolutionsSectionProps {}

const AISolutionsSection: React.FC<SolutionsSectionProps> = () => {
  const solutions: Solution[] = [
    {
      title: 'dAisy Ad Management',
      icon: <BarChart className="h-10 w-10 text-white" />,
      description: 'Let dAisy do the heavy lifting! Our AI-powered ad management runs your campaigns 24/7, fine-tuning targeting, budgets, and performance—so you can sit back and watch the results roll in. Results faster, unplug sooner.',
      features: [
        'Smart budget allocation',
        'A/B testing automation',
        'Audience targeting optimization'
      ],
      ctaText: 'View Pricing',
      ctaHref: '/pricing',
      bgFrom: '#bb141a',
      bgTo: '#ea5830'
    },
    {
      title: 'One11 Suite',
      icon: <Cpu className="h-10 w-10 text-white" />,
      description: 'Juggling customers, marketing, and invoices? Daisy CRM keeps it all in one place, automating the busywork so you can focus on growing your business (or finally taking that coffee break).',
      features: [
        'Customer relationship management',
        'Learning management system',
        'Email & SMS automation'
      ],
      ctaText: 'Schedule Demo',
      ctaHref: '/demo',
      bgFrom: '#2a2b2a',
      bgTo: '#464747'
    },
    {
      title: 'Custom AI Applications',
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      description: 'AI isn\'t just for big tech—your business deserves smart solutions too. From chatbots that never sleep to automation that streamlines your workflow, our custom AI tools take efficiency to the next level.',
      features: [
        'Bespoke AI development',
        'Seamless integration with existing systems',
        'Ongoing support and optimization'
      ],
      ctaText: 'Get a Quote',
      ctaHref: '/quote',
      bgFrom: '#f59d40',
      bgTo: '#ea5830'
    }
  ];

  return (
    <section id="ai-solutions" className="py-16 relative overflow-hidden bg-gradient-to-r from-[#f8f8f8] to-[#f2f2f2]">
      {/* Tech-inspired subtle background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(98,124,66,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(187,20,26,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Tech-inspired subtle Marigold flower - center circle with radiating lines */}
        <div className="absolute right-1/4 top-1/3 opacity-5">
          {/* Center circle */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#f59d40]/20 to-[#ea5830]/20" style={{
            boxShadow: '0 0 30px rgba(245, 157, 64, 0.1)'
          }}></div>
          
          {/* Radiating lines - like circuit traces */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-[#f59d40]/10 to-transparent"
              style={{
                width: '120px',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(30px)`,
              }}
            ></div>
          ))}
          
          {/* Connection points */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#f59d40]/20"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(80px)`,
                boxShadow: '0 0 5px rgba(245, 157, 64, 0.2)'
              }}
            ></div>
          ))}
        </div>
        
        {/* More subtle background elements */}
        <div className="absolute left-1/5 bottom-1/4 opacity-5">
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#627c42]/15 to-[#bb141a]/15" style={{
            boxShadow: '0 0 20px rgba(98, 124, 66, 0.1)'
          }}></div>
          
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-[#627c42]/10 to-transparent"
              style={{
                width: '80px',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(25px)`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle geometric tech elements */}
        <div className="absolute top-1/4 right-1/3 w-72 h-72 border border-[#bb141a]/5 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 border border-[#627c42]/5 rounded-lg transform -rotate-12"></div>
        
        {/* Circuit trace lines - very subtle */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px"
            style={{
              top: `${10 + (i * 20)}%`,
              left: '5%',
              right: '5%',
              opacity: 0.05,
              background: i % 2 === 0 ? 'linear-gradient(to right, transparent, #bb141a, transparent)' : 'linear-gradient(to right, transparent, #627c42, transparent)',
            }}
          ></div>
        ))}
        
        {/* Technology dots - very subtle */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-10 ${i % 2 === 0 ? 'bg-[#bb141a]' : 'bg-[#627c42]'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: i % 2 === 0 ? '0 0 3px rgba(187,20,26,0.2)' : '0 0 3px rgba(98,124,66,0.2)'
            }}
          ></div>
        ))}
        
        {/* Binary code - extremely subtle */}
        <div className="absolute right-10 bottom-1/4 opacity-5 font-mono text-xs text-[#2a2b2a]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-1">
              {[...Array(15)].map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            Our <span className="text-[#bb141a]">AI Solutions</span>
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            Powerful AI tools designed to transform your business operations<br />
            and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ddd9d9]"
                id={index === 0 ? 'daisy-ad-management' : index === 1 ? 'one11-suite' : 'custom-ai'}>
              <div 
                className="h-48 relative p-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom right, ${solution.bgFrom || '#bb141a'}, ${solution.bgTo || '#ea5830'})`
                }}
              >
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '15px 15px'
                }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2a2b2a] mb-5 opacity-80">
                  {solution.description}
                </p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#2a2b2a]">{feature}</span>
                    </div>
                  ))}
                </div>
                <a href={solution.ctaHref} className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors">
                  {solution.ctaText} <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection; 