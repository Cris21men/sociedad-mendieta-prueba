// Componente ImageModal - Vista ampliada de imágenes

import React, { useEffect } from 'react';
import { ServiceImage } from '@types';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { watermarkText } from '@utils/watermark';
import '@styles/carousel.css';

interface ImageModalProps {
  image: ServiceImage | null;
  isOpen: boolean;
  onClose: () => void;
  allImages: ServiceImage[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  allImages,
  currentIndex,
  onNavigate,
}) => {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Navegación con flechas del teclado
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyNav);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyNav);
    };
  }, [isOpen, onNavigate]);

  if (!isOpen || !image) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allImages.length - 1;

  return (
    <div className="image-modal">
      <div className="image-modal-backdrop" onClick={onClose} />
      
      <div className="image-modal-content">
        <button
          className="image-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <FaTimes />
        </button>

        {hasPrev && (
          <button
            className="image-modal-nav image-modal-nav-prev"
            onClick={() => onNavigate('prev')}
            aria-label="Imagen anterior"
          >
            <FaChevronLeft />
          </button>
        )}

        {hasNext && (
          <button
            className="image-modal-nav image-modal-nav-next"
            onClick={() => onNavigate('next')}
            aria-label="Imagen siguiente"
          >
            <FaChevronRight />
          </button>
        )}

        <div className="image-modal-image-container">
          <img
            src={image.url}
            alt={image.alt}
            className="image-modal-image"
          />
          <div className="image-watermark">{watermarkText}</div>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '10px',
          fontSize: '14px'
        }}>
          {currentIndex + 1} / {allImages.length}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
