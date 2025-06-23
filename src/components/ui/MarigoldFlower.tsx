import React from 'react';

interface MarigoldFlowerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'custom';
  primaryColor?: string;
  secondaryColor?: string;
  centerColor?: string;
  className?: string;
}

const MarigoldFlower: React.FC<MarigoldFlowerProps> = ({
  size = 'md',
  variant = 'primary',
  primaryColor,
  secondaryColor,
  centerColor,
  className = ''
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { width: 80, height: 80, petalSize: 10, centerSize: 8, circuitSize: 6 },
    md: { width: 120, height: 120, petalSize: 14, centerSize: 12, circuitSize: 8 },
    lg: { width: 160, height: 160, petalSize: 18, centerSize: 16, circuitSize: 10 },
    xl: { width: 200, height: 200, petalSize: 22, centerSize: 20, circuitSize: 12 }
  };

  const config = sizeConfig[size];

  // Color configurations based on variant
  const getColors = () => {
    switch (variant) {
      case 'primary':
        return {
          primary: '#f59d40',
          secondary: '#ea5830',
          center: '#bb141a',
          circuit: '#2a2b2a'
        };
      case 'secondary':
        return {
          primary: '#bb141a',
          secondary: '#a01217',
          center: '#f59d40',
          circuit: '#2a2b2a'
        };
      case 'accent':
        return {
          primary: '#2a8735',
          secondary: '#1f6b2a',
          center: '#f59d40',
          circuit: '#2a2b2a'
        };
      case 'custom':
        return {
          primary: primaryColor || '#f59d40',
          secondary: secondaryColor || '#ea5830',
          center: centerColor || '#bb141a',
          circuit: '#2a2b2a'
        };
      default:
        return {
          primary: '#f59d40',
          secondary: '#ea5830',
          center: '#bb141a',
          circuit: '#2a2b2a'
        };
    }
  };

  const colors = getColors();

  // Generate tech-inspired petals with circuit elements
  const generateTechPetals = () => {
    const petals = [];
    const petalCount = 12;
    
    for (let i = 0; i < petalCount; i++) {
      const rotation = (i * 360) / petalCount;
      const isAlternate = i % 2 === 0;
      
      petals.push(
        <div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(${config.width / 2 - config.petalSize / 2}px)`,
          }}
        >
          {/* Main petal */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${config.petalSize}px`,
              height: `${config.petalSize}px`,
              backgroundColor: isAlternate ? colors.primary : colors.secondary,
              opacity: 0.8,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 8px ${isAlternate ? colors.primary : colors.secondary}40`
            }}
          />
          
          {/* Circuit line extending from petal */}
          <div
            className="absolute"
            style={{
              width: `${config.circuitSize}px`,
              height: '2px',
              backgroundColor: colors.circuit,
              left: `${config.petalSize / 2}px`,
              top: `${config.petalSize / 2 - 1}px`,
              opacity: 0.6
            }}
          />
          
          {/* Circuit node */}
          <div
            className="absolute rounded-full"
            style={{
              width: '3px',
              height: '3px',
              backgroundColor: colors.circuit,
              left: `${config.petalSize / 2 + config.circuitSize}px`,
              top: `${config.petalSize / 2 - 1.5}px`,
              opacity: 0.8
            }}
          />
        </div>
      );
    }
    
    return petals;
  };

  // Generate center circuit pattern
  const generateCenterCircuit = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Center circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: `${config.centerSize}px`,
            height: `${config.centerSize}px`,
            backgroundColor: colors.center,
            boxShadow: `0 0 15px ${colors.center}60`
          }}
        />
        
        {/* Circuit lines radiating from center */}
        {[...Array(8)].map((_, i) => {
          const rotation = (i * 45);
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${config.centerSize / 2}px`,
                height: '1px',
                backgroundColor: colors.circuit,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(${config.centerSize / 4}px)`,
                opacity: 0.4
              }}
            />
          );
        })}
        
        {/* Inner circuit circle */}
        <div
          className="absolute rounded-full border"
          style={{
            width: `${config.centerSize - 4}px`,
            height: `${config.centerSize - 4}px`,
            borderColor: colors.circuit,
            borderWidth: '1px',
            opacity: 0.3
          }}
        />
      </div>
    );
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`
      }}
    >
      {/* Background tech pattern */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary}10, transparent 70%)`,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${colors.circuit}20 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, ${colors.circuit}20 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Tech petals */}
      {generateTechPetals()}
      
      {/* Center circuit */}
      {generateCenterCircuit()}
      
      {/* Outer circuit ring */}
      <div
        className="absolute rounded-full border"
        style={{
          width: `${config.width - 10}px`,
          height: `${config.height - 10}px`,
          borderColor: colors.circuit,
          borderWidth: '1px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.2
        }}
      />
      
      {/* Circuit connection points */}
      {[...Array(6)].map((_, i) => {
        const rotation = (i * 60);
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: colors.circuit,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(${config.width / 2 - 5}px)`,
              opacity: 0.6
            }}
          />
        );
      })}
    </div>
  );
};

export default MarigoldFlower; 