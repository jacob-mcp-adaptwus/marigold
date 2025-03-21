import React from 'react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';

const HeroSection: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Custom AI Integrations' },
    { number: '75%', label: 'Marketing Task Automation' },
    { number: '1.5x', label: 'ROI Improvement' }
  ];

  return (
    <section className="min-h-[85vh] pt-20 relative overflow-hidden bg-gradient-to-br from-[#626262] via-[#5a5a5a] to-[#626262]">
      {/* Background Elements - Made More Subtle and Blurred */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden filter blur-[2px]">
        {/* Digital Marigold Element - Much more subtle */}
        <div className="absolute left-10 top-1/3 w-2/3 h-2/3">
          <div className="absolute left-0 top-0 w-full h-full">
            {/* Marigold Petals - Digital Style - Extremely subtle */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-52 h-52 bg-gradient-to-r from-[#f59d40] to-[#ea5830] rounded-tr-full rounded-bl-full opacity-[0.15]"
                style={styles.marigoldPetal(i)}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Tech elements on the right side */}
        <div className="absolute right-0 top-1/4 w-1/2 h-2/3">
          {/* Digital Circuit Lines - Subtle but visible */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-1/3 w-32 h-1 bg-[#f59d40] opacity-[0.17] transform rotate-45"></div>
            <div className="absolute top-1/3 right-1/2 w-40 h-1 bg-[#f59d40] opacity-[0.15] transform rotate-30"></div>
            <div className="absolute top-2/3 right-1/4 w-28 h-1 bg-[#f59d40] opacity-[0.17] transform -rotate-20"></div>
            <div className="absolute top-1/4 right-1/3 w-24 h-1 bg-[#f59d40] opacity-[0.17] transform rotate-75"></div>
          </div>
          
          {/* Digital Connection Points - Subtle but visible */}
          <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-[#f59d40] opacity-[0.17] shadow-none"></div>
          <div className="absolute top-1/3 right-1/2 w-4 h-4 rounded-full bg-[#f59d40] opacity-[0.15] shadow-none"></div>
          <div className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-[#f59d40] opacity-[0.17] shadow-none"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.17] shadow-none"></div>
        </div>
        
        {/* Connecting lines from flower to right side - NEW */}
        <div className="absolute inset-0">
          {/* Middle connecting lines */}
          <div className="absolute top-1/2 left-1/4 w-64 h-1 bg-[#f59d40] opacity-[0.15] transform rotate-5"></div>
          <div className="absolute top-[45%] left-1/3 w-72 h-1 bg-[#f59d40] opacity-[0.17] transform rotate-2"></div>
          <div className="absolute top-[55%] left-1/5 w-56 h-1 bg-[#f59d40] opacity-[0.15] transform -rotate-3"></div>
          
          {/* Bottom connecting lines */}
          <div className="absolute top-3/4 left-1/4 w-80 h-1 bg-[#f59d40] opacity-[0.17] transform rotate-10"></div>
          <div className="absolute top-[80%] left-1/3 w-96 h-1 bg-[#f59d40] opacity-[0.15] transform -rotate-5"></div>
          
          {/* Connection nodes */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.15] shadow-none"></div>
          <div className="absolute top-[45%] left-1/3 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.17] shadow-none"></div>
          <div className="absolute top-3/4 left-1/4 w-4 h-4 rounded-full bg-[#f59d40] opacity-[0.15] shadow-none"></div>
          <div className="absolute top-[80%] left-1/3 w-3 h-3 rounded-full bg-[#f59d40] opacity-[0.17] shadow-none"></div>
        </div>
        
        {/* Small digital dots scattered - Almost invisible */}
        <div className="absolute left-1/6 top-1/2 w-40 h-40">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#f59d40] rounded-full shadow-none"
              style={styles.digitalDot()}
            ></div>
          ))}
        </div>
        
        {/* Binary code pattern overlay - Almost invisible */}
        <div className="absolute right-10 top-1/3 opacity-[0.12] text-[#f59d40] font-mono text-[10px]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-1">
              {[...Array(10)].map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
        
        {/* Subtle binary/digital pattern - Almost invisible */}
        <div className="absolute inset-0 opacity-[0.11]" style={styles.binaryPattern}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="inline text-[#ffffff] relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Plant the Seed.</span><br />
            <span className="inline text-[#f59d40]"> Watch Success Grow.</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0f0f0] mb-6 md:mb-8">
            Marigold ONE11 Provides Expert Consulting, AI Marketing<br className="hidden sm:inline" />
            and Digital Tools To Help You Achieve More With Less Effort
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 md:mt-8">
            <Button href="/ai-services" variant="secondary" size="lg" withArrow>
              AI Working for You in Just Minutes
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const styles = {
  marigoldPetal: (index: number) => ({
    transform: `rotate(${index * 30}deg) translateX(130px)`,
    transformOrigin: 'center',
    boxShadow: 'none',
    filter: 'blur(3px)'
  }),
  
  digitalDot: () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: 0.01 + (Math.random() * 0.01),
    filter: 'blur(1px)'
  }),
  
  binaryPattern: {
    backgroundImage: 'radial-gradient(circle, rgba(245,157,64,0.01) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    filter: 'blur(1px)'
  }
};

export default HeroSection; 