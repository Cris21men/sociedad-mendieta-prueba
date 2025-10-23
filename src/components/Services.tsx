import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import { services } from '@data/services';
import '@styles/carousel.css';

const Services: React.FC = () => {
  return (
    <section className="services-section" id="servicios">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCarousel
              key={service.id}
              title={service.name}
              description={service.description}
              icon={service.icon}
              images={service.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
