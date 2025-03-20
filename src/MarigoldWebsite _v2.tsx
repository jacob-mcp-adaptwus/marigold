import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Zap, BarChart3, CheckCircle2, ExternalLink, MessageSquare, Share2, Cpu, Lightbulb, BrainCog, Shield, BookOpen } from 'lucide-react';
import daisyLogo from './assets/images/daisy_ad_management_logo.png';
import one11Logo from './assets/images/55352374-54d1-42a8-9135-0655c9803f6b.png';

const MarigoldWebsite = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Add CSS for diagonal clip path
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .clip-path-diagonal {
        clip-path: polygon(0 0, 100% 0, 100% 100%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f59d40] to-[#ea5830] mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className={`text-2xl font-bold ${isSticky ? 'text-[#2a2b2a]' : 'text-white'}`}>
                MarigoldONE11
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['AI Services', 'Solutions', 'Training', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium hover:text-[#f59d40] transition-colors ${isSticky ? 'text-[#2a2b2a]' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-[#bb141a] hover:bg-[#ea5830] text-white px-5 py-2 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#2a2b2a]"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isSticky ? 'text-[#2a2b2a]' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isSticky ? 'text-[#2a2b2a]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {['AI Services', 'Solutions', 'Training', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-[#2a2b2a] hover:text-[#f59d40] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-[#bb141a] hover:bg-[#ea5830] text-white px-5 py-2 rounded-lg font-medium transition-colors mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-br from-[#2a2b2a] via-[#2a2b2a] to-[#2a2b2a]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          {/* Digital Marigold Element */}
          <div className="absolute right-0 top-1/4 w-2/3 h-2/3">
            <div className="absolute right-0 top-0 w-full h-full">
              {/* Marigold Petals - Digital Style */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-52 h-52 bg-gradient-to-r from-[#f59d40] to-[#ea5830] rounded-tr-full rounded-bl-full opacity-35
                "
                  style={{
                    transform: `rotate(${i * 30}deg) translateX(130px)`,
                    transformOrigin: 'center',
                    boxShadow: '0 0 20px rgba(245, 157, 64, 0.5)'
                  }}
                ></div>
              ))}
              
              {/* Digital Circuit Lines */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 right-1/3 w-32 h-2 bg-[#f59d40] opacity-40 transform rotate-45"></div>
                <div className="absolute top-1/3 right-1/2 w-40 h-2 bg-[#f59d40] opacity-35 transform rotate-30"></div>
                <div className="absolute top-2/3 right-1/4 w-28 h-2 bg-[#f59d40] opacity-45 transform -rotate-20"></div>
                <div className="absolute top-1/4 right-1/3 w-24 h-2 bg-[#f59d40] opacity-40 transform rotate-75"></div>
              </div>
              
              {/* Digital Connection Points */}
              <div className="absolute top-1/2 right-1/3 w-5 h-5 rounded-full bg-[#f59d40] opacity-70 shadow-[0_0_15px_rgba(245,157,64,0.8)]"></div>
              <div className="absolute top-1/3 right-1/2 w-6 h-6 rounded-full bg-[#f59d40] opacity-60 shadow-[0_0_15px_rgba(245,157,64,0.8)]"></div>
              <div className="absolute top-2/3 right-1/4 w-5 h-5 rounded-full bg-[#f59d40] opacity-65 shadow-[0_0_15px_rgba(245,157,64,0.8)]"></div>
              <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-[#f59d40] opacity-70 shadow-[0_0_15px_rgba(245,157,64,0.8)]"></div>
            </div>
          </div>
          
          {/* Small digital dots scattered */}
          <div className="absolute left-1/6 top-1/2 w-40 h-40">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 bg-[#f59d40] rounded-full shadow-[0_0_10px_rgba(245,157,64,0.6)]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.3 + (Math.random() * 0.4)
                }}
              ></div>
            ))}
          </div>
          
          {/* Binary code pattern overlay */}
          <div className="absolute right-10 top-1/3 opacity-20 text-[#f59d40] font-mono text-xs">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="mb-1">
                {[...Array(20)].map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                ))}
              </div>
            ))}
          </div>
          
          {/* Subtle binary/digital pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,157,64,0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24 pb-24">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
              <span className="text-5xl md:text-7xl text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Plant the Seed.</span><span className="text-[#f59d40]"> Watch Success Grow.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#ddd9d9] mb-8 md:mb-12">
              Marigold ONE11 Provides Expert Consulting, AI Marketing<br />
              and Digital Tools To Help You Achieve More With Less Effort
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 md:mt-12">
              <a href="#ai-solutions" className="bg-[#bb141a] hover:bg-[#ea5830] text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                <span>View Our AI Solutions</span>
              </a>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 md:mt-24">
            {[
              { number: '200+', label: 'Businesses Transformed' },
              { number: '45%', label: 'Average Growth Rate' },
              { number: '3.5x', label: 'ROI Improvement' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-[#2a2b2a] bg-opacity-50 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#f59d40] mb-2">{stat.number}</div>
                <div className="text-[#ddd9d9] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
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
            <div className="absolute top-3/4 right-1/3 w-28 h-2 bg-[#f59d40] opacity-15 transform -rotate-15"></div>
            <div className="absolute top-1/3 left-1/3 w-36 h-2 bg-[#f59d40] opacity-15 transform rotate-75"></div>
            
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
            <p className="text-[#2a2b2a] max-w-3xl mx-auto">
              We specialize in integrating AI technology into your business operations, just as marigolds support and enhance the growth of surrounding plants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-transparent hover:border-[#f59d40] group">
                <div className="mb-4 bg-[#bb141a] bg-opacity-20 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#bb141a] group-hover:text-white transition-all duration-300 relative overflow-hidden">
                  {/* Light source effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute -inset-1 bg-[#bb141a] opacity-0 group-hover:opacity-20 blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <div className={`${typeof service.icon !== 'object' ? 'text-[#bb141a] group-hover:text-white' : ''} transition-colors relative z-10`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2a2b2a]">{service.title}</h3>
                <p className="text-[#2a2b2a] mb-4 opacity-80">{service.description}</p>
                <a href="#" className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors">
                  View Pricing <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Solutions Section */}
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
          
          {/* Subtle tech flower on the left */}
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
            <div className="inline-block px-3 py-1 bg-[#bb141a] bg-opacity-10 rounded-full text-sm font-semibold text-[#2a2b2a] mb-3">SOLUTIONS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
              Our <span className="text-[#bb141a]">AI Solutions</span>
            </h2>
            <p className="text-[#2a2b2a] max-w-3xl mx-auto opacity-80">
              Powerful AI tools designed to transform your business operations and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* dAIsy Ad Management */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ddd9d9]">
              <div className="h-48 bg-gradient-to-br from-[#bb141a] to-[#ea5830] relative p-6 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '15px 15px'
                }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <img src={daisyLogo} alt="Daisy Digital" className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">dAisy Ad Management</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2a2b2a] mb-5 opacity-80">
                  Let dAisy do the heavy lifting! Our AI-powered ad management runs your campaigns 24/7, fine-tuning targeting, budgets, and performance—so you can sit back and watch the results roll in. Results faster, unplug sooner.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Smart budget allocation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">A/B testing automation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Audience targeting optimization</span>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors">
                  View Pricing <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* One11 Suite */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ddd9d9]">
              <div className="h-48 bg-gradient-to-br from-[#2a2b2a] to-[#464747] relative p-6 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '15px 15px'
                }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <img src={one11Logo} alt="One11 Suite" className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">One11 Suite</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2a2b2a] mb-5 opacity-80">
                  Juggling customers, marketing, and invoices? Daisy CRM keeps it all in one place, automating the busywork so you can focus on growing your business (or finally taking that coffee break).
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Customer relationship management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Learning management system</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Email & SMS automation</span>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors">
                  Schedule Demo <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Custom AI Applications */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#ddd9d9]">
              <div className="h-48 bg-gradient-to-br from-[#f59d40] to-[#ea5830] relative p-6 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '15px 15px'
                }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Custom AI Applications</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2a2b2a] mb-5 opacity-80">
                  AI isn't just for big tech—your business deserves smart solutions too. From chatbots that never sleep to automation that streamlines your workflow, our custom AI tools take efficiency to the next level.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Bespoke AI development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#bb141a] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2b2a]">Ongoing support and optimization</span>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full text-[#bb141a] font-medium hover:text-[#ea5830] transition-colors">
                  Get a Quote <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 bg-white relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f59d40] opacity-5 clip-path-diagonal"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <div className="inline-block px-3 py-1 bg-[#f59d40] bg-opacity-20 rounded-full text-sm font-semibold text-[#2a2b2a] mb-3">PRODUCTS</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2a2b2a]">
                Our <span className="text-[#f59d40]">AI-Powered</span> Products
              </h2>
              <p className="text-[#2a2b2a] mb-6 opacity-80">
                Our proprietary AI tools are designed to give your business a competitive edge in the digital landscape.
              </p>
              
              <div className="space-y-5">
                <div className="bg-[#ddd9d9] p-5 rounded-lg hover:shadow-md transition-all duration-300 border-l-4 border-[#f59d40]">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Sparkles className="h-5 w-5 text-[#f59d40] mr-2" />
                    dAisy Ad Management
                  </h3>
                  <p className="text-[#2a2b2a] mb-3 opacity-80">
                    AI-driven advertising platform that optimizes campaign performance in real-time.
                  </p>
                  <ul className="space-y-2">
                    {['Automated bid management', 'Creative performance analysis', 'Audience targeting optimization'].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#ddd9d9] p-5 rounded-lg hover:shadow-md transition-all duration-300 border-l-4 border-[#f59d40]">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Zap className="h-5 w-5 text-[#f59d40] mr-2" />
                    dAisy Digital Suite
                  </h3>
                  <p className="text-[#2a2b2a] mb-3 opacity-80">
                    Comprehensive digital marketing toolset with AI-powered insights and automation.
                  </p>
                  <ul className="space-y-2">
                    {['Predictive analytics dashboard', 'Content optimization engine', 'Multi-channel campaign management'].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="mt-7 bg-[#bb141a] hover:bg-[#ea5830] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59d40] to-[#ea5830] rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <div className="relative bg-[#ddd9d9] p-8 rounded-3xl shadow-xl transform hover:rotate-1 transition-transform duration-700">
                  <div className="p-6 bg-white rounded-xl shadow-sm mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#f59d40] opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
                    <div className="flex justify-between items-center mb-4 relative z-10">
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 rounded-full bg-[#bb141a]"></div>
                        <div className="h-3 w-3 rounded-full bg-[#f59d40]"></div>
                        <div className="h-3 w-3 rounded-full bg-[#627c42]"></div>
                      </div>
                      <div className="text-xs text-[#2a2b2a]">dAisy Dashboard</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-8 bg-[#ddd9d9] rounded-md w-full"></div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-20 bg-[#ddd9d9] rounded-md"></div>
                        <div className="h-20 bg-[#ddd9d9] rounded-md"></div>
                        <div className="h-20 bg-[#ddd9d9] rounded-md"></div>
                      </div>
                      <div className="h-32 bg-[#ddd9d9] rounded-md w-full"></div>
                      <div className="flex space-x-3">
                        <div className="h-10 bg-[#f59d40] rounded-md w-1/3"></div>
                        <div className="h-10 bg-[#ddd9d9] rounded-md w-2/3"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#f59d40] opacity-10 rounded-full transform translate-x-4 translate-y-4"></div>
                      <div className="h-4 w-2/3 bg-[#ddd9d9] rounded mb-2"></div>
                      <div className="h-12 bg-[#f59d40] bg-opacity-20 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#627c42] opacity-10 rounded-full transform translate-x-4 translate-y-4"></div>
                      <div className="h-4 w-2/3 bg-[#ddd9d9] rounded mb-2"></div>
                      <div className="h-12 bg-[#627c42] bg-opacity-20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-[#ddd9d9] relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(#f59d40 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#f59d40] bg-opacity-20 rounded-full text-sm font-semibold text-[#2a2b2a] mb-3">CASE STUDIES</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
              Success <span className="text-[#f59d40]">Stories</span>
            </h2>
            <p className="text-[#2a2b2a] max-w-3xl mx-auto">
              See how our AI solutions have helped businesses like yours transform and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'E-commerce Revenue Growth',
                company: 'RetailPlus',
                description: 'Implementation of dAisy Ad Management led to a 127% increase in ROAS and 45% growth in overall revenue.',
                metrics: ['127% ROAS increase', '45% revenue growth', '68% reduction in ad spend waste']
              },
              {
                title: 'Manufacturing Process Automation',
                company: 'IndusTech',
                description: 'AI-powered automation solution reduced production costs by 32% while improving quality control metrics.',
                metrics: ['32% cost reduction', '28% productivity increase', '62% fewer quality issues']
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-r from-[#2a2b2a] to-[#2a2b2a] relative">
                  <div className="absolute inset-0 bg-[#f59d40] opacity-5" style={{
                    backgroundImage: 'linear-gradient(45deg, #f59d40 25%, transparent 25%), linear-gradient(-45deg, #f59d40 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f59d40 75%), linear-gradient(-45deg, transparent 75%, #f59d40 75%)',
                    backgroundSize: '10px 10px'
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-bold text-[#ddd9d9]">{study.company}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a2b2a]">{study.title}</h3>
                  <p className="text-[#2a2b2a] mb-4 opacity-80">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-[#2a2b2a]">Key Results</h4>
                    <ul className="space-y-1">
                      {study.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="#" className="text-[#f59d40] font-medium flex items-center hover:text-[#ea5830] transition-colors">
                    Read Full Case Study
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-[#bb141a] hover:bg-[#ea5830] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center hover:shadow-lg">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Product Showcase Section */}
      <section id="product-showcase" className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, rgba(187, 20, 26, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 20, 26, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#bb141a] bg-opacity-10 rounded-full text-sm font-semibold text-[#2a2b2a] mb-3">SHOWCASE</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
              Featured <span className="text-[#bb141a]">Products</span>
            </h2>
            <p className="text-[#2a2b2a] max-w-3xl mx-auto opacity-80">
              Discover our innovative solutions designed to elevate your business performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="flex flex-col bg-gradient-to-b from-white to-[#ddd9d9] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div className="relative h-64 bg-gradient-to-r from-[#bb141a] to-[#ea5830] p-6">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MarigoldAI Assistant</h3>
                <p className="text-white text-opacity-90">Intelligent virtual assistant for customer support and engagement</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>24/7 customer support automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Natural language understanding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Multi-channel integration</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-2xl font-bold text-[#2a2b2a]">$299</span>
                  <span className="text-[#2a2b2a] opacity-70">/month</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-[#bb141a] hover:bg-[#ea5830] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="flex flex-col bg-gradient-to-b from-white to-[#ddd9d9] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div className="relative h-64 bg-gradient-to-r from-[#2a2b2a] to-[#464747] p-6">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">SecureAI Vault</h3>
                <p className="text-white text-opacity-90">Advanced data protection with AI threat detection</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Predictive threat analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Compliance management</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-2xl font-bold text-[#2a2b2a]">$499</span>
                  <span className="text-[#2a2b2a] opacity-70">/month</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-[#bb141a] hover:bg-[#ea5830] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="flex flex-col bg-gradient-to-b from-white to-[#ddd9d9] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div className="relative h-64 bg-gradient-to-r from-[#f59d40] to-[#ea5830] p-6">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">LearnBoost LMS</h3>
                <p className="text-white text-opacity-90">AI-powered learning management system</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Automated progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-[#627c42] mr-3 flex-shrink-0" />
                    <span>Interactive content creation</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-2xl font-bold text-[#2a2b2a]">$399</span>
                  <span className="text-[#2a2b2a] opacity-70">/month</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-[#bb141a] hover:bg-[#ea5830] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-[#2a2b2a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(30deg, #f59d40 12%, transparent 12.5%, transparent 87%, #f59d40 87.5%, #f59d40), linear-gradient(150deg, #f59d40 12%, transparent 12.5%, transparent 87%, #f59d40 87.5%, #f59d40), linear-gradient(30deg, #f59d40 12%, transparent 12.5%, transparent 87%, #f59d40 87.5%, #f59d40), linear-gradient(150deg, #f59d40 12%, transparent 12.5%, transparent 87%, #f59d40 87.5%, #f59d40), linear-gradient(60deg, #f59d40 25%, transparent 25.5%, transparent 75%, #f59d40 75%, #f59d40), linear-gradient(60deg, #f59d40 25%, transparent 25.5%, transparent 75%, #f59d40 75%, #f59d40)',
          backgroundSize: '40px 70px',
          backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px'
        }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#f59d40] bg-opacity-20 rounded-full text-sm font-semibold text-[#ddd9d9] mb-3">TESTIMONIALS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our <span className="text-[#f59d40]">Clients</span> Say
            </h2>
            <p className="text-[#ddd9d9] max-w-3xl mx-auto">
              Don't just take our word for it. See how MarigoldONE11 has helped businesses transform with AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "MarigoldONE11's AI solutions increased our marketing ROI by 250%. Their team made the integration seamless and provided outstanding support.",
                author: "Sarah Johnson",
                role: "CMO, TechVision Inc."
              },
              {
                quote: "The dAisy Ad Management platform revolutionized our approach to digital advertising. We've seen a 40% increase in conversion rates since implementation.",
                author: "Michael Chen",
                role: "Digital Director, NexGen Retail"
              },
              {
                quote: "Their strategic consulting helped us navigate AI adoption across our enterprise. MarigoldONE11 truly understands how to align technology with business objectives.",
                author: "Elena Rodriguez",
                role: "CEO, Innovate Group"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#2a2b2a] p-6 rounded-xl relative group hover:bg-opacity-60 transition-all duration-300 border border-[#ddd9d9] border-opacity-10 hover:border-opacity-20">
                <div className="absolute top-6 left-6 text-5xl text-[#f59d40] opacity-20 group-hover:opacity-30 transition-opacity">"</div>
                <div className="absolute bottom-6 right-6 text-5xl text-[#f59d40] opacity-20 group-hover:opacity-30 transition-opacity rotate-180">"</div>
                <p className="relative mb-5 text-[#ddd9d9] z-10 pt-4">"{testimonial.quote}"</p>
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#f59d40] bg-opacity-20 flex items-center justify-center text-xl font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-[#ddd9d9] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#bb141a] to-[#ea5830] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-white">
              Schedule a free 30-minute AI strategy session with our experts today.
            </p>
            <button className="bg-white text-[#bb141a] hover:bg-[#ddd9d9] px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#2a2b2a] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f59d40] to-[#ea5830] mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  MarigoldONE11
                </span>
              </div>
              <p className="text-[#ddd9d9] mb-4">
                AI-driven business solutions firm specializing in marketing technology, automation, and strategic consulting.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 rounded-full bg-[#2a2b2a] flex items-center justify-center">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {['AI Integration', 'Digital Marketing', 'Business Automation', 'Strategic Consulting', 'AI Governance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                {['dAisy Ad Management', 'dAisy Digital Suite', 'ONE11 Analytics', 'AI Policy Framework', 'Training Programs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-[#ddd9d9] space-y-2 mb-4">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94103</p>
                <p>info@marigoldone11.com</p>
                <p>(555) 123-4567</p>
              </address>
              <button className="bg-[#bb141a] hover:bg-[#ea5830] text-white px-4 py-2 rounded font-medium transition-colors text-sm">
                Schedule a Call
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#2a2b2a] text-center text-[#ddd9d9] text-sm">
            <p>© {new Date().getFullYear()} MarigoldONE11. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarigoldWebsite;