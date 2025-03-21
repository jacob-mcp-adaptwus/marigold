import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="relative mb-8">
          <div className="absolute text-[20rem] font-bold opacity-5 text-[#bb141a] -top-20 left-1/2 transform -translate-x-1/2 select-none">
            404
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2a2b2a] relative z-10">
            Page Not Found
          </h1>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          We couldn't find the page you're looking for. The page may have been moved, 
          deleted, or never existed in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <Button
              variant="primary"
              size="lg"
            >
              Back to Homepage
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
            >
              Contact Support
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8 w-full max-w-md">
          <h3 className="text-lg font-medium text-[#2a2b2a] mb-4">
            Looking for something else?
          </h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <Link to="/ai-services" className="text-[#f59d40] hover:underline">AI Services</Link>
            <Link to="/solutions" className="text-[#f59d40] hover:underline">Solutions</Link>
            <Link to="/training" className="text-[#f59d40] hover:underline">Training</Link>
            <Link to="/resources" className="text-[#f59d40] hover:underline">Resources</Link>
            <Link to="/blog" className="text-[#f59d40] hover:underline">Blog</Link>
            <Link to="/our-ai-story" className="text-[#f59d40] hover:underline">Our AI Story</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 