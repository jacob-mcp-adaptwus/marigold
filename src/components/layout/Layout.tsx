import React, { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';
import CTASection from '../sections/CTASection';
import NewsletterSection from '../sections/NewsletterSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Add CSS for diagonal clip path - moved from MarigoldWebsite
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
      <Header />
      <main>
        {children}
      </main>
      <CTASection />
      <NewsletterSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout; 