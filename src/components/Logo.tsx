// Componente Logo - Logo de MENDIETA

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'medium',
  className = '' 
}) => {
  const logoSrc = variant === 'light' 
    ? '/images/logos/solomendieta.png' 
    : '/images/logos/solomendieta.png';

  const sizeClasses = {
    small: 'max-w-[150px]',
    medium: 'max-w-[250px]',
    large: 'max-w-[400px]'
  };

  return (
    <div className={`logo-container ${className}`}>
      <img
        src={logoSrc}
        alt="MENDIETA Construcción & Diseño"
        className={`logo-image ${sizeClasses[size]}`}
        loading="lazy"
      />
      <style>{`
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-image {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Logo;
