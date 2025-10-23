// Utilidades para integración de WhatsApp

import { companyInfo } from '@data/company';

/**
 * Genera un link de WhatsApp con mensaje personalizado
 * @param message - Mensaje opcional personalizado
 * @returns URL de WhatsApp
 */
export const getWhatsAppLink = (message?: string): string => {
  const phone = companyInfo.contact.whatsapp;
  const defaultMsg = message || '¡Hola! Vengo de la web y estoy interesado en sus servicios.';
  const encodedMessage = encodeURIComponent(defaultMsg);
  
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

/**
 * Genera un mensaje de WhatsApp específico para un servicio
 * @param serviceName - Nombre del servicio
 * @returns URL de WhatsApp con mensaje del servicio
 */
export const getWhatsAppLinkForService = (serviceName: string): string => {
  const message = `¡Hola! Estoy interesado en el servicio de ${serviceName}. ¿Podrían brindarme más información?`;
  return getWhatsAppLink(message);
};

/**
 * Obtiene el link del grupo de WhatsApp
 * @returns URL del grupo de WhatsApp
 */
export const getWhatsAppGroupLink = (): string => {
  return companyInfo.whatsappGroup.link;
};

/**
 * Abre WhatsApp en una nueva ventana
 * @param message - Mensaje opcional
 */
export const openWhatsApp = (message?: string): void => {
  const link = getWhatsAppLink(message);
  window.open(link, '_blank', 'noopener,noreferrer');
};

/**
 * Abre el grupo de WhatsApp en una nueva ventana
 */
export const openWhatsAppGroup = (): void => {
  const link = getWhatsAppGroupLink();
  window.open(link, '_blank', 'noopener,noreferrer');
};
