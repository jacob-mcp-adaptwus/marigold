import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  lazy?: boolean;
  onLoad?: () => void;
  onClick?: () => void;
  placeholder?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  lazy = true,
  onLoad,
  onClick,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset states if src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
  };

  // Determine image source
  const imageSrc = error && placeholder ? placeholder : src;

  // Determine aspect ratio styles
  const aspectRatioStyle = width && height 
    ? { aspectRatio: `${width} / ${height}` } 
    : {};

  return (
    <div 
      className={`overflow-hidden ${className}`} 
      style={aspectRatioStyle}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={lazy ? 'lazy' : undefined}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${onClick ? 'cursor-pointer' : ''}`}
        style={{ 
          transitionProperty: 'opacity',
          objectFit: 'cover'
        }}
        data-testid="responsive-image"
      />
      
      {/* Low-quality placeholder while image loads */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default ResponsiveImage; 