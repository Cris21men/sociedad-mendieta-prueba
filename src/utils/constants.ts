// Constantes de la aplicación

// Configuración de animaciones
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

// Breakpoints responsive
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

// Configuración de carruseles
export const CAROUSEL_CONFIG = {
  autoplayDelay: 3000,
  slidesPerView: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  spaceBetween: 20,
};

// Mensajes de la aplicación
export const MESSAGES = {
  loading: 'Cargando...',
  error: 'Ocurrió un error. Por favor, intenta de nuevo.',
  success: 'Mensaje enviado correctamente',
  formValidation: {
    required: 'Este campo es requerido',
    invalidEmail: 'Email inválido',
    invalidPhone: 'Teléfono inválido',
  },
};

// Links de navegación
export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

// Duración del lazy loading
export const LAZY_LOAD_OFFSET = 100; // pixels antes de que la imagen sea visible
