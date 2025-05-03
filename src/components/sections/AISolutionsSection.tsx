import React from 'react';
import { CheckCircle2, Lightbulb, ArrowRight, BarChart, Cpu } from 'lucide-react';

// Logo as base64 - this is the exact logo image the user provided
const DAISY_LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAB4CAYAAAAVfyuiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFrmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OTc5NywgMjAyMy8wNi8yNS0yMzo1NzoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA0LTI2VDEwOjA4OjA0LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA0LTI2VDEwOjA4OjA0LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNC0yNlQxMDowODowNC0wNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMzFmYWNiZi0wYTYwLTRkMzMtYTEzNi1lYzQ3Y2RlMmU1NDEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZDU5ZmNiOS00NTBiLWEwNDgt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";

// Placeholder for One11 Suite logo - you'll need to replace this with the actual logo
const ONE11_LOGO_BASE64 = "data:image/png;base64,YOUR_ONE11_LOGO_BASE64_STRING_HERE";

// Placeholder for Custom AI Applications logo - you'll need to replace this with the actual logo
const CUSTOM_AI_LOGO_BASE64 = "data:image/png;base64,YOUR_CUSTOM_AI_LOGO_BASE64_STRING_HERE";

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

interface Solution {
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  features: string[];
  ctaText: string;
  ctaHref: string;
  bgFrom?: string;
  bgTo?: string;
  logoSrc?: string;
}

interface SolutionsSectionProps {}

const AISolutionsSection: React.FC<SolutionsSectionProps> = () => {
  const solutions: Solution[] = [
    {
      title: 'dAisy Ad Management',
      icon: <BarChart className="h-10 w-10 text-white" />,
      description: (
        <>
          Let <ColoredDaisy /> do the heavy lifting! Our AI-powered ad management runs your campaigns 24/7, fine-tuning targeting, budgets, and performance—so you can sit back and watch the results roll in. Results faster, unplug sooner.
        </>
      ),
      features: [
        'Smart budget allocation',
        'Automated Management Across Multiple Platforms',
        'A/B testing automation'
      ],
      ctaText: 'View Pricing',
      ctaHref: 'https://daisydigital.io',
      bgFrom: '#bb141a',
      bgTo: '#ea5830',
      logoSrc: DAISY_LOGO_BASE64
    },
    {
      title: 'One11 Suite',
      icon: <Cpu className="h-10 w-10 text-white" />,
      description: 'Struggling to grow your business while drowning in daily tasks? ONE11 Suite keeps everything—customers, marketing, and invoices—in one place, automating the busywork so you can spend less time working in your business and more time growing your business.',
      features: [
        'Customer relationship management',
        'Email & SMS automation',
        'Service bookings'
      ],
      ctaText: 'View Pricing',
      ctaHref: '/demo',
      bgFrom: '#2a2b2a',
      bgTo: '#464747',
      logoSrc: ONE11_LOGO_BASE64
    },
    {
      title: 'Custom AI Applications',
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      description: 'AI isn\'t just for big tech—your business deserves smart solutions too. From chatbots that never sleep to automation that streamlines your workflow, our custom AI tools take efficiency to the next level.',
      features: [
        'Tailored AI solutions',
        'AI-Powered Workflows',
        'Seamless integration with existing systems'
      ],
      ctaText: 'Get a Quote',
      ctaHref: '/quote',
      bgFrom: '#f59d40',
      bgTo: '#ea5830',
      logoSrc: CUSTOM_AI_LOGO_BASE64
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
                  {solution.logoSrc ? (
                    <div className={`bg-white px-4 py-3 rounded-lg flex items-center justify-center ${index === 0 ? '' : 'mt-4'}`} style={{ minHeight: "56px", minWidth: "220px" }}>
                      <img 
                        src={solution.logoSrc}
                        alt={solution.title} 
                        className="w-full"
                        style={{ maxWidth: "180px", height: "auto" }}
                        onError={(e) => {
                          console.error(`Logo failed to load for ${solution.title}`);
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<h3 class="text-2xl font-bold text-[#2a2b2a]">${solution.title}</h3>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  )}
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
                <a 
                  href={solution.ctaHref} 
                  className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors"
                  target={solution.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={solution.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={solution.ctaHref.startsWith('http') ? (e) => {
                    e.preventDefault();
                    window.open(solution.ctaHref, '_blank', 'noopener,noreferrer');
                  } : undefined}
                >
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