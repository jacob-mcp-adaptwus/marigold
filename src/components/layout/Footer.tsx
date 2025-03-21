import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import MarigoldLogo from '../ui/MarigoldLogo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = ['twitter', 'facebook', 'linkedin', 'instagram'];
  const serviceLinks = ['AI Integration', 'Digital Marketing', 'Business Automation', 'Strategic Consulting', 'AI Governance'];
  const productLinks = ['dAisy Ad Management', 'ONE11 Suite', 'ONE11 Analytics', 'AI Policy Framework', 'Training Programs', 'Case Studies'];
  
  // Function to format dAisy text with proper colors
  const formatDaisyText = (text: string) => {
    if (text.includes('dAisy')) {
      return (
        <>
          <span className="text-[#2a8735]">D</span>
          <span className="text-[#f59d40]">AI</span>
          <span className="text-[#2a8735]">sy</span>
          {text.replace('dAisy', '')}
        </>
      );
    }
    return text;
  };
  
  return (
    <footer className="bg-white text-[#2a2b2a] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <MarigoldLogo size="md" />
            </div>
            <p className="text-gray-600 mb-4">
              AI-driven business solutions that save you time at every step. We use AI for everything so like you, we can deliver results faster and unplug sooner.
              <div className="text-sm mt-1">
                <span className="text-gray-400">Discover how AI transformed our agency.</span>
                <Link to="/our-ai-story" className="text-[#f59d40] hover:underline ml-1">Read the whole story →</Link>
              </div>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social} href={`https://www.${social}.com/marigoldone11`} className="text-gray-500 hover:text-[#f59d40] transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-[#f59d40] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-[#f59d40] transition-colors"
                  >
                    {formatDaisyText(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2 mb-4">
              <p>17117 Oak Dr Suite G</p>
              <p>Omaha, NE 68130</p>
              <p>hello@marigold111.com</p>
            </address>
            <Button variant="primary" size="sm" href="/contact">Schedule a Call</Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MarigoldONE11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 