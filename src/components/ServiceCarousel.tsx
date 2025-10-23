// Componente ServiceCarousel - Carrusel de imágenes por servicio

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Service, ServiceImage } from '@types';
import { FaSearchPlus } from 'react-icons/fa';
import { watermarkText } from '@utils/watermark';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@styles/carousel.css';

interface ServiceCarouselProps {
  service: Service;
  onImageClick: (image: ServiceImage, allImages: ServiceImage[], index: number) => void;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ service, onImageClick }) => {
  return (
    <div className="service-carousel">
      <div className="service-carousel-header">
        <div>
          <h3 className="service-carousel-title">
            <span className="service-carousel-icon">{service.icon}</span>
            {service.name}
          </h3>
          <p className="service-carousel-description">{service.description}</p>
        </div>
      </div>

      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={false}
          className="service-swiper"
        >
          {service.images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className="carousel-slide"
                onClick={() => onImageClick(image, service.images, index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') onImageClick(image, service.images, index);
                }}
                aria-label={`Ver ${image.alt} en tamaño completo`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="carousel-slide-image"
                  loading="lazy"
                />
                <div className="image-watermark">{watermarkText}</div>
                <div className="carousel-slide-overlay">
                  <span className="carousel-slide-cta">
                    <FaSearchPlus /> Ver imagen
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCarousel;
