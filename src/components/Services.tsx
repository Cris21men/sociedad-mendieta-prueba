// Componente Services - Sección de servicios con carruseles

import React, { useState } from 'react';
import ServiceCarousel from './ServiceCarousel';
import ImageModal from './ImageModal';
import { services } from '@data/services';
import { ServiceImage } from '@types';
import '@styles/carousel.css';

const Services: React.FC = () => {
  const [modalImage, setModalImage] = useState<ServiceImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<ServiceImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (
    image: ServiceImage,
    allImages: ServiceImage[],
    index: number
  ) => {
    setModalImage(image);
    setCurrentImages(allImages);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    let newIndex = currentIndex;

    if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < currentImages.length - 1) {
      newIndex = currentIndex + 1;
    }

    setCurrentIndex(newIndex);
    setModalImage(currentImages[newIndex]);
  };

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-description">
            Ofrecemos servicios profesionales de construcción y diseño con la más alta calidad
          </p>
        </div>

        <div className="services-container">
          {services.map((service) => (
            <ServiceCarousel
              key={service.id}
              service={service}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      <ImageModal
        image={modalImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        allImages={currentImages}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
    </section>
  );
};

export default Services;
