import React from 'react';
import { Link } from 'react-router-dom';
import MarigoldLogo from './MarigoldLogo';

interface LogoProps {
  isSticky?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isSticky = false }) => {
  return (
    <Link to="/" className="flex items-center">
      <MarigoldLogo isSticky={isSticky} />
    </Link>
  );
};

export default Logo; 