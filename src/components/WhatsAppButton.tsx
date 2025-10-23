// Componente WhatsAppButton - Botón flotante de WhatsApp

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '@utils/whatsapp';
import '@styles/contact.css';

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message }) => {
  const handleClick = () => {
    openWhatsApp(message);
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float-button"
      aria-label="Contactar por WhatsApp"
      title="¡Contáctanos por WhatsApp!"
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;
