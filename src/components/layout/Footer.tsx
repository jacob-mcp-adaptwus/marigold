import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const socialLinks = ['twitter', 'facebook', 'linkedin', 'instagram'];
  const serviceLinks = ['AI Integration', 'Digital Marketing', 'Business Automation', 'Strategic Consulting', 'AI Governance'];
  const productLinks = ['dAisy Ad Management', 'dAisy Digital Suite', 'ONE11 Analytics', 'AI Policy Framework', 'Training Programs'];
  
  return (
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
              {socialLinks.map((social) => (
                <a key={social} href={`https://www.${social}.com/marigoldone11`} className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
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
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#ddd9d9] hover:text-[#f59d40] transition-colors">
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
            <Button variant="primary" size="sm">Schedule a Call</Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#2a2b2a] text-center text-[#ddd9d9] text-sm">
          <p>© {new Date().getFullYear()} MarigoldONE11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 