import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Create refs for dropdown menus
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  
  // AI Services submenu items
  const aiServicesItems = [
    { 
      name: 'dAisy Ad Management', 
      displayName: (<><ColoredDaisy /> Ad Management</>),
      href: '#daisy-ad-management' 
    },
    { name: 'One11 Suite', href: '#one11-suite' },
    { name: 'Custom AI Applications', href: '#custom-ai' }
  ];

  // Resources submenu items
  const resourcesItems = [
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/resources#on-demand-webinars' },
    { name: 'GPTs', href: '/resources#gpts' }
  ];

  const navItems = [
    { name: 'AI Services', href: '/ai-services', isInternal: true, hasDropdown: false },
    { name: 'Solutions', href: '/solutions', isInternal: true, hasDropdown: false },
    { name: 'Training', href: '/training', isInternal: true, hasDropdown: false },
    { name: 'Resources', href: '/resources', isInternal: true, hasDropdown: true, dropdownItems: resourcesItems }
  ];
  
  // Add click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close dropdown menus when clicking outside
      if (activeDropdown) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
      
      // Close mobile menu when clicking outside (but don't close when clicking the toggle button)
      const toggleButton = document.querySelector('[data-mobile-toggle]');
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) && 
        toggleButton !== event.target && 
        !toggleButton?.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown, mobileMenuOpen]);
  
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

  // Helper function to determine if navigation should scroll to top
  const shouldScrollToTop = (href: string) => {
    return !href.includes('#');
  };

  const renderNavLink = (item: any) => {
    if (item.hasDropdown) {
      return (
        <div 
          className="relative" 
          ref={(el) => { dropdownRefs.current[item.name] = el; }}
        >
          <button
            onClick={() => toggleDropdown(item.name)}
            className={`flex items-center font-medium transition-colors px-3 py-1 rounded ${
              isSticky 
                ? 'text-[#2a2b2a] hover:text-[#f59d40] hover:bg-[#f8f8f8]' 
                : 'text-white hover:text-[#f59d40] bg-[#2a2b2a]/70 hover:bg-[#2a2b2a]/90'
            }`}
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === item.name && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                {item.dropdownItems.map((dropdownItem: any) => (
                  <Link
                    key={dropdownItem.name}
                    to={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f59d40]"
                    onClick={() => {
                      setActiveDropdown(null);
                      if (shouldScrollToTop(dropdownItem.href)) {
                        window.scrollTo(0, 0);
                      }
                    }}
                  >
                    {dropdownItem.displayName || dropdownItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else if (item.isInternal) {
      return (
        <Link 
          to={item.href}
          className={`font-medium transition-colors px-3 py-1 rounded ${
            isSticky 
              ? 'text-[#2a2b2a] hover:text-[#f59d40] hover:bg-[#f8f8f8]' 
              : 'text-white hover:text-[#f59d40] bg-[#2a2b2a]/70 hover:bg-[#2a2b2a]/90'
          }`}
          onClick={() => {
            if (shouldScrollToTop(item.href)) {
              window.scrollTo(0, 0);
            }
          }}
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
    if (item.hasDropdown) {
      return (
        <div ref={(el) => { dropdownRefs.current[`mobile-${item.name}`] = el; }}>
          <button
            onClick={() => toggleDropdown(`mobile-${item.name}`)}
            className="flex items-center justify-between w-full py-2 text-[#2a2b2a] hover:text-[#f59d40] font-medium"
          >
            {item.name}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === `mobile-${item.name}` ? 'transform rotate-180' : ''}`} />
          </button>
          {activeDropdown === `mobile-${item.name}` && (
            <div className="pl-4 space-y-1 mt-1">
              {item.dropdownItems.map((dropdownItem: any) => (
                <Link
                  key={dropdownItem.name}
                  to={dropdownItem.href}
                  className="block py-2 text-[#2a2b2a] hover:text-[#f59d40]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveDropdown(null);
                    if (shouldScrollToTop(dropdownItem.href)) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  {dropdownItem.displayName || dropdownItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    } else if (item.isInternal) {
      return (
        <Link
          to={item.href}
          className="block py-2 text-[#2a2b2a] hover:text-[#f59d40] font-medium"
          onClick={() => {
            setMobileMenuOpen(false);
            if (shouldScrollToTop(item.href)) {
              window.scrollTo(0, 0);
            }
          }}
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
            <Button variant="secondary" size="md" href="/contact">Contact Us</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            data-mobile-toggle
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
        <div className="md:hidden bg-white shadow-lg" ref={mobileMenuRef}>
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {renderMobileNavLink(item)}
              </div>
            ))}
            <Button 
              variant="secondary" 
              size="md" 
              className="w-full mt-2"
              href="/contact"
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