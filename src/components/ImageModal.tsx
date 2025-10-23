import React from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Image {
  src: string;
  alt: string;
  title?: string;
}

interface ImageModalProps {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalImages,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="image-modal-backdrop" onClick={handleBackdropClick}>
        <div className="image-modal-content">
          <button className="image-modal-close" onClick={onClose} aria-label="Cerrar">
            <FaTimes />
          </button>

          {onPrevious && (
            <button
              className="image-modal-nav image-modal-prev"
              onClick={onPrevious}
              aria-label="Imagen anterior"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="image-modal-image-container">
            <img src={image.src} alt={image.alt} className="image-modal-image" />
            {image.title && <p className="image-modal-title">{image.title}</p>}
            {currentIndex !== undefined && totalImages && (
              <p className="image-modal-counter">
                {currentIndex + 1} / {totalImages}
              </p>
            )}
          </div>

          {onNext && (
            <button
              className="image-modal-nav image-modal-next"
              onClick={onNext}
              aria-label="Imagen siguiente"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      <style>{`
        .image-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-in-out;
        }

        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background-color: transparent;
          color: white;
          border: none;
          font-size: var(--font-size-3xl);
          cursor: pointer;
          z-index: 10001;
          transition: transform var(--transition-fast);
        }

        .image-modal-close:hover {
          transform: scale(1.2);
        }

        .image-modal-nav {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          font-size: var(--font-size-3xl);
          cursor: pointer;
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          z-index: 10001;
        }

        .image-modal-nav:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .image-modal-prev {
          left: var(--spacing-xl);
        }

        .image-modal-next {
          right: var(--spacing-xl);
        }

        .image-modal-image-container {
          text-align: center;
        }

        .image-modal-image {
          max-width: 90vw;
          max-height: 80vh;
          object-fit: contain;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .image-modal-title {
          color: white;
          margin-top: var(--spacing-md);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
        }

        .image-modal-counter {
          color: rgba(255, 255, 255, 0.7);
          margin-top: var(--spacing-sm);
          font-size: var(--font-size-base);
        }

        @media (max-width: 768px) {
          .image-modal-nav {
            font-size: var(--font-size-xl);
            padding: var(--spacing-md);
          }

          .image-modal-prev {
            left: var(--spacing-sm);
          }

          .image-modal-next {
            right: var(--spacing-sm);
          }

          .image-modal-close {
            top: -40px;
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </>
  );
};

export default ImageModal;
