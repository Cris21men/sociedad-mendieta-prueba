// Tipos para las imágenes del portafolio

export interface ServiceImage {
  id: string;
  url: string;
  alt: string;
  thumbnail?: string;
}

export interface ImageModalProps {
  image: ServiceImage | null;
  isOpen: boolean;
  onClose: () => void;
  allImages: ServiceImage[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export interface CarouselImage {
  src: string;
  alt: string;
  id: string;
}
