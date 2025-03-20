import React, { useState } from 'react';

interface LogoProps {
  isSticky?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const MarigoldLogo: React.FC<LogoProps> = ({ isSticky = false, size = 'md' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  let height = 48;
  let fontSize = '1.5rem';
  let smallFontSize = '1rem';
  
  if (size === 'sm') {
    height = 36;
    fontSize = '1.25rem';
    smallFontSize = '0.875rem';
  } else if (size === 'lg') {
    height = 64;
    fontSize = '1.75rem';
    smallFontSize = '1.25rem';
  }
  
  // Add a timestamp to force browser to reload the image
  const timestamp = Date.now();
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  // Text-based fallback logo
  const TextLogo = () => (
    <div className="flex items-center">
      <span 
        style={{ 
          color: '#bb141a', 
          fontSize: fontSize,
          fontWeight: 500,
          letterSpacing: '0.01em'
        }}
      >
        marigold
      </span>
      
      {/* Arrow icon */}
      <svg 
        width={`${height * 0.35}px`}
        height={`${height * 0.35}px`}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          marginLeft: '6px',
          marginRight: '6px',
          color: '#bb141a'
        }}
      >
        <path 
          d="M13 6L19 12L13 18M5 12H19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      <span 
        style={{ 
          color: '#999999', 
          fontSize: smallFontSize,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
      >
        ONE11
      </span>
    </div>
  );
  
  return (
    <div className="flex items-center" style={{ height: `${height}px` }}>
      {imageError ? (
        <TextLogo />
      ) : (
        <>
          <img 
            src={`/assets/images/marigold-logo.png?t=${timestamp}`}
            alt="Marigold ONE11 Logo"
            onLoad={handleImageLoad}
            onError={handleImageError}
            height={height}
            style={{ 
              height: `${height}px`, 
              display: imageLoaded ? 'block' : 'none',
              maxWidth: 'none'
            }}
            className="transition-all duration-300"
          />
          {!imageLoaded && <TextLogo />}
        </>
      )}
    </div>
  );
};

export default MarigoldLogo; 