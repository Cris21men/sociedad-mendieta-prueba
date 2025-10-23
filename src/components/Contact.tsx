// Componente Contact - Sección de contacto con formulario

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import WhatsAppQR from './WhatsAppQR';
import { companyInfo } from '@data/company';
import { getWhatsAppLink } from '@utils/whatsapp';
import '@styles/contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = `*Nuevo mensaje desde la web*\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.phone}\n*Servicio:* ${formData.service || 'No especificado'}\n\n*Mensaje:*\n${formData.message}`;

    const whatsappLink = getWhatsAppLink(message);
    window.open(whatsappLink, '_blank');

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">Estamos listos para hacer realidad tu proyecto</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Información de Contacto</h3>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaPhone /></div>
              <div className="contact-info-content">
                <div className="contact-info-label">Teléfono</div>
                <div className="contact-info-value">
                  <a href={`tel:${companyInfo.contact.phone}`}>{companyInfo.contact.phone}</a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaEnvelope /></div>
              <div className="contact-info-content">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">
                  <a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaMapMarkerAlt /></div>
              <div className="contact-info-content">
                <div className="contact-info-label">Ubicación</div>
                <div className="contact-info-value">{companyInfo.contact.address}</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaClock /></div>
              <div className="contact-info-content">
                <div className="contact-info-label">Horario</div>
                <div className="contact-info-value">
                  {companyInfo.hours.weekdays}<br/>
                  {companyInfo.hours.saturday}<br/>
                  {companyInfo.hours.sunday}
                </div>
              </div>
            </div>

            <WhatsAppQR />
          </div>

          <div className="contact-form">
            <h3 className="contact-form-title">Envíanos un Mensaje</h3>

            {submitSuccess && (
              <div className="form-success">¡Mensaje enviado correctamente!</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  Nombre <span className="form-label-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email <span className="form-label-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Teléfono <span className="form-label-required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="999 888 777"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Carpintería Metálica">Carpintería Metálica</option>
                  <option value="Melamina">Melamina</option>
                  <option value="Drywall">Drywall</option>
                  <option value="Aluminio y Vidrio">Aluminio y Vidrio</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Mensaje <span className="form-label-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
