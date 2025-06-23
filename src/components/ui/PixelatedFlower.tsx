import React from 'react';

interface PixelatedFlowerProps {
  color: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PixelatedFlower: React.FC<PixelatedFlowerProps> = ({
  color,
  size = 'md',
  className = ''
}) => {
  const sizeConfig = {
    sm: { width: 60, height: 60, pixelSize: 4 },
    md: { width: 80, height: 80, pixelSize: 5 },
    lg: { width: 120, height: 120, pixelSize: 6 }
  };

  const config = sizeConfig[size];

  // Marigold colors excluding black
  const marigoldColors = [
    '#FDDD42', // Yellow
    '#D58F03', // Dark Yellow
    '#122B37', // Gray
    '#041922'  // mdGray
  ];

  // Create random pixel pattern
  const generateRandomPixels = () => {
    const pixels = [];
    const cols = Math.floor(config.width / config.pixelSize);
    const rows = Math.floor(config.height / config.pixelSize);
    
    // Use the main color as the base and add random pixels of other colors
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // 70% chance to use the main color, 30% chance to use a random color
        const useRandomColor = Math.random() < 0.3;
        const pixelColor = useRandomColor 
          ? marigoldColors[Math.floor(Math.random() * marigoldColors.length)]
          : color;
        
        // Add some variation in opacity for visual interest
        const opacity = 0.7 + Math.random() * 0.3;
        
        pixels.push(
          <div
            key={`${x}-${y}`}
            className="absolute"
            style={{
              left: `${x * config.pixelSize}px`,
              top: `${y * config.pixelSize}px`,
              width: `${config.pixelSize}px`,
              height: `${config.pixelSize}px`,
              backgroundColor: pixelColor,
              opacity: opacity,
              borderRadius: '1px'
            }}
          />
        );
      }
    }
    
    return pixels;
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`
      }}
    >
      {generateRandomPixels()}
    </div>
  );
};

export default PixelatedFlower; 