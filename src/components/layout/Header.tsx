import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
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
  
  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // AI Services submenu items
  const aiServicesItems = [
    { name: 'dAisy Ad Management', href: '#daisy-ad-management' },
    { name: 'One11 Suite', href: '#one11-suite' },
    { name: 'Custom AI Applications', href: '#custom-ai' }
  ];

  const navItems = [
    { name: 'AI Services', href: '/ai-services', isInternal: true, hasDropdown: false },
    { name: 'Solutions', href: '/solutions', isInternal: true, hasDropdown: false },
    { name: 'Training', href: '/training', isInternal: true, hasDropdown: false },
    { name: 'Resources', href: '/resources', isInternal: true, hasDropdown: false }
  ];

  const renderNavLink = (item: any) => {
    if (item.isInternal) {
      return (
        <Link 
          to={item.href}
          className={`font-medium transition-colors px-3 py-1 rounded ${
            isSticky 
              ? 'text-[#2a2b2a] hover:text-[#f59d40] hover:bg-[#f8f8f8]' 
              : 'text-white hover:text-[#f59d40] bg-[#2a2b2a]/70 hover:bg-[#2a2b2a]/90'
          }`}
        >
          {item.name}
        </Link>
      );
    } else {
      return (
        <a 
          href={item.href}
          className={`font-medium transition-colors px-3 py-1 rounded ${
            isSticky 
              ? 'text-[#2a2b2a] hover:text-[#f59d40] hover:bg-[#f8f8f8]' 
              : 'text-white hover:text-[#f59d40] bg-[#2a2b2a]/70 hover:bg-[#2a2b2a]/90'
          }`}
        >
          {item.name}
        </a>
      );
    }
  };

  const renderMobileNavLink = (item: any) => {
    if (item.isInternal) {
      return (
        <Link 
          to={item.href}
          className="block py-2 text-[#2a2b2a] hover:text-[#f59d40] font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    } else {
      return (
        <a 
          href={item.href}
          className="block py-2 text-[#2a2b2a] hover:text-[#f59d40] font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </a>
      );
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo isSticky={isSticky} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {renderNavLink(item)}
              </div>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">Contact Us</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
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
            {navItems.map((item) => (
              <div key={item.name}>
                {renderMobileNavLink(item)}
              </div>
            ))}
            <Button 
              variant="primary" 
              size="md" 
              className="w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 