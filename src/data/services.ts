// Datos de los servicios ofrecidos por MENDIETA

import { Service } from '@types/service';
import {
  carpinteriaMetalicaImages,
  melaminaImages,
  drywallImages,
  aluminioVidrioImages,
} from './images';

export const services: Service[] = [
  {
    id: 'carpinteria-metalica',
    name: 'Carpintería Metálica',
    description:
      'Diseño y fabricación de estructuras metálicas, puertas, ventanas, rejas y todo tipo de trabajos en metal con acabados de alta calidad.',
    icon: '',
    images: carpinteriaMetalicaImages,
    features: [
      'Puertas y ventanas metálicas',
      'Estructuras y techos',
      'Rejas de seguridad',
      'Escaleras metálicas',
      'Barandas y pasamanos',
    ],
  },
  {
    id: 'melamina',
    name: 'Melamina',
    description:
      'Fabricación e instalación de muebles modulares en melamina. Closets, cocinas, oficinas y espacios personalizados con diseños modernos.',
    icon: '',
    images: melaminaImages,
    features: [
      'Closets y vestidores',
      'Cocinas integrales',
      'Muebles de oficina',
      'Reposteros y alacenas',
      'Diseños personalizados',
    ],
  },
  {
    id: 'drywall',
    name: 'Drywall',
    description:
      'Instalación profesional de sistemas de drywall para divisiones, cielos rasos, y acabados interiores con acabado impecable.',
    icon: '',
    images: drywallImages,
    features: [
      'Tabiques y divisiones',
      'Cielos rasos',
      'Molduras decorativas',
      'Aislamiento térmico y acústico',
      'Acabados perfectos',
    ],
  },
  {
    id: 'aluminio-vidrio',
    name: 'Aluminio y Vidrio',
    description:
      'Instalación de ventanas, mamparas, puertas y estructuras en aluminio y vidrio templado con diseños modernos y seguros.',
    icon: '',
    images: aluminioVidrioImages,
    features: [
      'Ventanas de aluminio',
      'Mamparas para baño',
      'Puertas de vidrio templado',
      'Cerramientos',
      'Espejos y vidrios decorativos',
    ],
  },
];

// Exportar servicios individuales si se necesitan
export const getCarpinteriaMetalica = () => services[0];
export const getMelamina = () => services[1];
export const getDrywall = () => services[2];
export const getAluminioVidrio = () => services[3];

// Obtener servicio por ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
