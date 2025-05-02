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
    <section className="min-h-[85vh] pt-20 relative overflow-hidden bg-[#2a2b2a] text-white">
      {/* Background Elements - Aligned with website style */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        {/* Digital Marigold Element */}
        <div className="absolute left-10 top-1/3 w-2/3 h-2/3">
          <div className="absolute left-0 top-0 w-full h-full">
            {/* Marigold Petals - Digital Style - More aligned with brand */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-52 h-52 bg-gradient-to-r from-[#f59d40] to-[#ea5830] rounded-tr-full rounded-bl-full opacity-[0.12]"
                style={styles.marigoldPetal(i)}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Tech elements */}
        <div className="absolute inset-0">
          {/* Distributed circuit lines pattern */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`h-${i}`}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f59d40]/20 to-transparent"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  opacity: 0.1 + (i * 0.05)
                }}
              ></div>
            ))}
            
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`v-${i}`}
                className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#f59d40]/20 to-transparent"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  opacity: 0.1 + (i * 0.05)
                }}
              ></div>
            ))}
            
            {/* Diagonal lines - top left to bottom right */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={`d1-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#f59d40]/15 to-transparent"
                style={{
                  width: `${100 + (i * 20)}%`,
                  top: `${(i + 1) * 15}%`,
                  left: '-10%',
                  transform: 'rotate(45deg)',
                  opacity: 0.1 + (i * 0.03)
                }}
              ></div>
            ))}
            
            {/* Diagonal lines - top right to bottom left */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={`d2-${i}`}
                className="absolute h-[1px] bg-gradient-to-l from-transparent via-[#f59d40]/15 to-transparent"
                style={{
                  width: `${100 + (i * 20)}%`,
                  top: `${(i + 1) * 15}%`,
                  right: '-10%',
                  transform: 'rotate(-45deg)',
                  opacity: 0.1 + (i * 0.03)
                }}
              ></div>
            ))}
            
            {/* Connection points */}
            {[...Array(20)].map((_, i) => (
              <div 
                key={`point-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#f59d40]/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: '0 0 5px rgba(245, 157, 64, 0.2)'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlay - creates depth without darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(245,157,64,0.05)]"></div>
        
        {/* Radial accent - consistent with other sections */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] opacity-[0.15]" style={{
          background: 'radial-gradient(circle at center, #f59d40 5%, transparent 70%)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="inline text-white relative z-10">Plant the Seed.</span><br />
            <span className="inline text-[#f59d40]"> Watch Success Grow.</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 mb-6 md:mb-8">
            Marigold ONE11 Provides Expert Consulting, AI Marketing<br className="hidden sm:inline" />
            and Digital Tools To Help You Achieve More With Less Effort.
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
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-[#f59d40] mb-2">{stat.number}</div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
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