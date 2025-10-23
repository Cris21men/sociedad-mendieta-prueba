// Utilidades para aplicar marca de agua "MENDIETA" a las imágenes

/**
 * Aplica estilos CSS para la marca de agua
 * @returns Objeto con estilos CSS
 */
export const getWatermarkStyles = (): React.CSSProperties => {
  return {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: '3px',
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: 10,
  };
};

/**
 * Clase CSS para la marca de agua
 */
export const watermarkClassName = 'image-watermark';

/**
 * Texto de la marca de agua
 */
export const watermarkText = 'MENDIETA';

/**
 * Genera el estilo inline para el contenedor de imagen con marca de agua
 */
export const getImageContainerStyles = (): React.CSSProperties => {
  return {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: '100%',
  };
};
