import React from 'react';

interface GeometricPatternProps {
  primaryColor: string;
  size?: 'sm' | 'md' | 'lg';
  pattern?: 'hexagons' | 'diamonds' | 'triangles';
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({
  primaryColor,
  size = 'md',
  pattern = 'hexagons',
  className = ''
}) => {
  const sizeConfig = {
    sm: { width: 60, height: 60, elementSize: 8 },
    md: { width: 80, height: 80, elementSize: 10 },
    lg: { width: 120, height: 120, elementSize: 12 }
  };

  const config = sizeConfig[size];

  // Marigold color palette (excluding black)
  const marigoldColors = [
    '#FDDD42', // Yellow
    '#D58F03', // Dark Yellow
    '#122B37', // Gray
    '#041922'  // mdGray
  ];

  // Get complementary colors for the pattern
  const getComplementaryColors = (mainColor: string) => {
    const otherColors = marigoldColors.filter(color => color !== mainColor);
    return otherColors;
  };

  const generateHexagonPattern = () => {
    const elements = [];
    const hexSize = config.elementSize;
    const cols = Math.ceil(config.width / (hexSize * 1.5));
    const rows = Math.ceil(config.height / (hexSize * Math.sqrt(3)));

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexSize * 1.5;
        const y = row * hexSize * Math.sqrt(3) + (col % 2) * (hexSize * Math.sqrt(3)) / 2;
        
        // Skip if outside bounds
        if (x > config.width || y > config.height) continue;

        // Determine color based on position and main color
        const complementaryColors = getComplementaryColors(primaryColor);
        const colorIndex = (row + col) % (complementaryColors.length + 1);
        const color = colorIndex === 0 ? primaryColor : complementaryColors[colorIndex - 1];
        
        // Add some opacity variation for depth
        const opacity = 0.6 + (Math.random() * 0.4);

        elements.push(
          <div
            key={`hex-${row}-${col}`}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: `${hexSize}px`,
              height: `${hexSize * Math.sqrt(3)}px`,
              backgroundColor: color,
              opacity: opacity,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              transform: 'rotate(30deg)'
            }}
          />
        );
      }
    }
    
    return elements;
  };

  const generateDiamondPattern = () => {
    const elements = [];
    const diamondSize = config.elementSize;
    const cols = Math.ceil(config.width / diamondSize);
    const rows = Math.ceil(config.height / diamondSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * diamondSize;
        const y = row * diamondSize;
        
        // Skip if outside bounds
        if (x > config.width || y > config.height) continue;

        // Determine color based on position
        const complementaryColors = getComplementaryColors(primaryColor);
        const colorIndex = (row + col) % (complementaryColors.length + 1);
        const color = colorIndex === 0 ? primaryColor : complementaryColors[colorIndex - 1];
        
        const opacity = 0.7 + (Math.random() * 0.3);

        elements.push(
          <div
            key={`diamond-${row}-${col}`}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: `${diamondSize}px`,
              height: `${diamondSize}px`,
              backgroundColor: color,
              opacity: opacity,
              transform: 'rotate(45deg)',
              borderRadius: '2px'
            }}
          />
        );
      }
    }
    
    return elements;
  };

  const generateTrianglePattern = () => {
    const elements = [];
    const triangleSize = config.elementSize;
    const cols = Math.ceil(config.width / triangleSize);
    const rows = Math.ceil(config.height / triangleSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * triangleSize;
        const y = row * triangleSize;
        
        // Skip if outside bounds
        if (x > config.width || y > config.height) continue;

        // Determine color and rotation
        const complementaryColors = getComplementaryColors(primaryColor);
        const colorIndex = (row + col) % (complementaryColors.length + 1);
        const color = colorIndex === 0 ? primaryColor : complementaryColors[colorIndex - 1];
        
        const rotation = (row + col) % 2 === 0 ? 0 : 180;
        const opacity = 0.6 + (Math.random() * 0.4);

        elements.push(
          <div
            key={`triangle-${row}-${col}`}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: '0',
              height: '0',
              borderLeft: `${triangleSize / 2}px solid transparent`,
              borderRight: `${triangleSize / 2}px solid transparent`,
              borderBottom: `${triangleSize}px solid ${color}`,
              opacity: opacity,
              transform: `rotate(${rotation}deg)`
            }}
          />
        );
      }
    }
    
    return elements;
  };

  const generatePattern = () => {
    switch (pattern) {
      case 'hexagons':
        return generateHexagonPattern();
      case 'diamonds':
        return generateDiamondPattern();
      case 'triangles':
        return generateTrianglePattern();
      default:
        return generateHexagonPattern();
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`
      }}
    >
      {generatePattern()}
    </div>
  );
};

export default GeometricPattern; 