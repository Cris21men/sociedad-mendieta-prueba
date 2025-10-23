// Componente WhatsAppQR - Sección con código QR del grupo de WhatsApp

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '@data/company';
import { openWhatsAppGroup } from '@utils/whatsapp';

const WhatsAppQR: React.FC = () => {
  return (
    <div className="whatsapp-qr-section">
      <h3 className="whatsapp-qr-title">
        <FaWhatsapp /> Únete a nuestro grupo de WhatsApp
      </h3>
      
      <img
        src={companyInfo.whatsappGroup.qrPath}
        alt="Código QR - Grupo de WhatsApp MENDIETA"
        className="whatsapp-qr-image"
      />
      
      <p className="whatsapp-qr-text">
        Escanea el código QR o haz clic en el botón para unirte
      </p>
      
      <button
        onClick={openWhatsAppGroup}
        className="whatsapp-group-btn"
        aria-label="Unirse al grupo de WhatsApp"
      >
        <FaWhatsapp />
        Unirse al Grupo
      </button>
    </div>
  );
};

export default WhatsAppQR;
