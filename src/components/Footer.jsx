import React from 'react';
import { Instagram, Facebook, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content container">
                {/* Column 1: Brand & Mission */}
                <div className="footer-column brand-column">
                    <div className="logo footer-logo">Nakış Dünyası</div>
                    <p className="footer-mission">{t('footer.mission')}</p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Column 2: Shop */}
                <div className="footer-column">
                    <h4>{t('footer.shop')}</h4>
                    <a href="#embroidery-art">{t('footer.products.art')}</a>
                    <a href="#dowry-collection">{t('footer.products.dowry')}</a>
                    <a href="#home-textiles">{t('footer.products.home')}</a>
                </div>

                {/* Column 3: Help & Legal */}
                <div className="footer-column">
                    <h4>{t('footer.company')}</h4>
                    <Link to="/about">{t('footer.links.about')}</Link>
                    <Link to="/contact">{t('footer.links.contact')}</Link>
                    <Link to="/faq">{t('faq.title')}</Link>
                    <a href="#">{t('footer.legal.privacy')}</a>
                    <a href="#">{t('footer.legal.terms')}</a>
                </div>

                {/* Column 4: Newsletter */}
                <div className="footer-column newsletter-column">
                    <h4>{t('footer.newsletter.title')}</h4>
                    <p>{t('footer.newsletter.desc')}</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder={t('footer.newsletter.placeholder')}
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-btn">
                            {t('footer.newsletter.button')}
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; 2024 Nakış Dünyası. {t('footer.rights')}</p>
            </div>
        </footer>
    );
}
