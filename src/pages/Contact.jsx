import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="page-section container">
            <header className="page-header">
                <span className="section-eyebrow">{t('contact.subtitle')}</span>
                <h1 className="page-title">{t('contact.title')}</h1>
            </header>

            <div className="contact-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label>{t('contact.form.name')}</label>
                        <input type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>{t('contact.form.email')}</label>
                        <input type="email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>{t('contact.form.message')}</label>
                        <textarea className="form-input" rows="5"></textarea>
                    </div>
                    <button type="submit" className="cta-button primary">{t('contact.form.submit')}</button>
                </form>

                <div className="contact-info">
                    <div className="info-item">
                        <MapPin size={24} className="info-icon" />
                        <p>{t('contact.info.address')}</p>
                    </div>
                    <div className="info-item">
                        <Phone size={24} className="info-icon" />
                        <p>{t('contact.info.phone')}</p>
                    </div>
                    <div className="info-item">
                        <Mail size={24} className="info-icon" />
                        <p>{t('contact.info.email')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
