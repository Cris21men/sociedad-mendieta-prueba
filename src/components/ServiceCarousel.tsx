import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageModal from './ImageModal';

interface Image {
  src: string;
  alt: string;
  title?: string;
}

interface ServiceCarouselProps {
  title: string;
  description: string;
  icon: string;
  images: Image[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  title,
  description,
  icon,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevModalImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="service-carousel">
        <div className="service-carousel-header">
          <h3 className="service-carousel-title">
            <span className="service-carousel-icon">{icon}</span>
            {title}
          </h3>
          <p className="service-carousel-description">{description}</p>
        </div>

        <div className="carousel-container">
          <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel-images">
            {images.map((image: Image, index: number) => (
              <div
                key={index}
                className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                onClick={() => openModal(index)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="carousel-image-overlay">
                  <span className="carousel-zoom-icon">🔍</span>
                  <p className="carousel-image-title">Ver imagen</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button carousel-button-next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {images.map((_, index: number) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ImageModal
        image={images[selectedImageIndex]}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextModalImage}
        onPrevious={prevModalImage}
        currentIndex={selectedImageIndex}
        totalImages={images.length}
      />
    </>
  );
};

export default ServiceCarousel;
