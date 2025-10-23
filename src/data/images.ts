// Rutas de todas las imágenes del portafolio

import { ServiceImage } from '@types/image';

// Función auxiliar para generar arrays de imágenes
const generateImages = (
  category: string,
  count: number,
  prefix: string
): ServiceImage[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    url: `/images/${category}/${prefix}-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `${category.replace('-', ' ')} - Proyecto ${i + 1}`,
  }));
};

// Imágenes de Carpintería Metálica
export const carpinteriaMetalicaImages = generateImages(
  'carpinteria-metalica',
  10,
  'metal'
);

// Imágenes de Melamina
export const melaminaImages = generateImages('melamina', 10, 'melamina');

// Imágenes de Drywall
export const drywallImages = generateImages('drywall', 10, 'drywall');

// Imágenes de Aluminio y Vidrio
export const aluminioVidrioImages = generateImages(
  'aluminio-vidrio',
  10,
  'vidrio'
);

// Exportar todas las imágenes agrupadas
export const allImages = {
  carpinteriaMetalica: carpinteriaMetalicaImages,
  melamina: melaminaImages,
  drywall: drywallImages,
  aluminioVidrio: aluminioVidrioImages,
};
