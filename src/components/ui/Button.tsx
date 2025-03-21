import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  withArrow = false,
  onClick,
  external = false,
}) => {
  // Add wiggle animation styles to the document head
  useEffect(() => {
    // Check if the animation styles are already added
    if (!document.getElementById('wiggle-animation-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'wiggle-animation-styles';
      styleElement.textContent = `
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Cleanup function to remove the styles when all Button components are unmounted
    return () => {
      const existingStyleElement = document.getElementById('wiggle-animation-styles');
      if (existingStyleElement && document.querySelectorAll('[data-button-component]').length === 1) {
        existingStyleElement.remove();
      }
    };
  }, []);

  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700',
    secondary: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    white: 'bg-white text-gray-700 hover:bg-gray-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 h-4 w-4 animate-wiggle" />
      )}
    </>
  );
  
  if (href) {
    // Use regular anchor tag for external links
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={classes} data-button-component target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {content}
        </a>
      );
    }
    
    // Use React Router's Link for internal navigation
    return (
      <Link to={href} className={classes} data-button-component>
        {content}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} data-button-component>
      {content}
    </button>
  );
};

export default Button; 