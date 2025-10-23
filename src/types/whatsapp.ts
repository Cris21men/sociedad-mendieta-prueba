// Tipos para la integración de WhatsApp

export interface WhatsAppConfig {
  groupLink: string;
  phoneNumber: string;
  defaultMessage: string;
  qrCodePath: string;
}

export interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export interface WhatsAppQRProps {
  config: WhatsAppConfig;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
