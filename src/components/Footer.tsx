// Componente Footer - Pie de página

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { companyInfo } from '@data/company';
import { NAV_LINKS } from '@utils/constants';
import '@styles/footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Sección de la empresa */}
          <div className="footer-section">
            <Logo variant="light" size="small" className="footer-logo" />
            <p className="footer-description">{companyInfo.description}</p>
            <p className="footer-ruc">RUC: {companyInfo.ruc}</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4 className="footer-section-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="footer-link">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#servicios">Carpintería Metálica</a>
              </li>
              <li className="footer-link">
                <a href="#servicios">Melamina</a>
              </li>
              <li className="footer-link">
                <a href="#servicios">Drywall</a>
              </li>
              <li className="footer-link">
                <a href="#servicios">Aluminio y Vidrio</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhone /></div>
              <div className="footer-contact-info">
                <div className="footer-contact-label">Teléfono</div>
                <div className="footer-contact-value">
                  <a href={`tel:${companyInfo.contact.phone}`}>
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <div className="footer-contact-info">
                <div className="footer-contact-label">Email</div>
                <div className="footer-contact-value">
                  <a href={`mailto:${companyInfo.contact.email}`}>
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-info">
                <div className="footer-contact-label">Ubicación</div>
                <div className="footer-contact-value">
                  {companyInfo.contact.address}
                </div>
              </div>
            </div>

            <div className="footer-social">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {companyInfo.fullName}. Todos los derechos reservados.
          </p>
          <p className="footer-credits">
            RUC: {companyInfo.ruc} | Desarrollado con ❤️ para MENDIETA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
