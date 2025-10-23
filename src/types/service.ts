// Tipos para los servicios ofrecidos

import { ServiceImage } from './image';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  images: ServiceImage[];
  features?: string[];
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  imageCount: number;
}

export interface ServicesProps {
  services: Service[];
}

export interface ServiceCarouselProps {
  service: Service;
  onImageClick: (image: ServiceImage, allImages: ServiceImage[]) => void;
}
