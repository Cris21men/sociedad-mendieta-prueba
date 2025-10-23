// Componente Hero - Sección principal de la página

import React from 'react';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { companyInfo } from '@data/company';
import { openWhatsApp } from '@utils/whatsapp';
import '@styles/hero.css';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    openWhatsApp();
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">

        <h1 className="hero-title">MENDIETA</h1>
        
        <h2 className="hero-subtitle">{companyInfo.tagline}</h2>
        
        <p className="hero-ruc">RUC: {companyInfo.ruc}</p>

        <p className="hero-description">{companyInfo.description}</p>

        <div className="hero-buttons">
          <button
            className="hero-btn hero-btn-primary"
            onClick={handleContactClick}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp /> Contactar Ahora
          </button>

          <button
            className="hero-btn hero-btn-secondary"
            onClick={scrollToServices}
            aria-label="Ver servicios"
          >
            Ver Servicios
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <FaArrowDown size={24} color="white" />
      </div>
    </section>
  );
};

export default Hero;
