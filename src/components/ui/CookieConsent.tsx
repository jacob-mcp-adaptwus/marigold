import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    setShowConsent(false);
  };
  
  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    setShowConsent(false);
    
    // Disable analytics
    if (typeof window !== 'undefined') {
      // Create or update a disableGA cookie
      document.cookie = 'disableGA=true; path=/; max-age=31536000'; // 1 year
      
      // Reload the page to ensure analytics are disabled
      window.location.reload();
    }
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg p-4 md:p-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="md:flex items-start justify-between">
          <div className="md:mr-8 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              We Value Your Privacy
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our Cookie Policy. You can manage your preferences by clicking "Accept Necessary".
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:min-w-[280px] md:justify-end">
            <Button 
              onClick={acceptNecessary}
              variant="outline"
              size="sm"
              ariaLabel="Accept only necessary cookies"
            >
              Accept Necessary
            </Button>
            <Button 
              onClick={acceptAll}
              variant="primary"
              size="sm"
              ariaLabel="Accept all cookies"
            >
              Accept All
            </Button>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          <a href="/privacy-policy" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          {' | '}
          <a href="/cookie-policy" className="underline hover:text-gray-700">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 