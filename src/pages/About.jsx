import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="page-section container">
            <header className="page-header">
                <span className="section-eyebrow">{t('about.subtitle')}</span>
                <h1 className="page-title">{t('about.title')}</h1>
            </header>

            <div className="about-content">
                <div className="about-text">
                    <p>{t('about.text1')}</p>
                    <p>{t('about.text2')}</p>
                    <div className="about-values">
                        <span>{t('about.values')}</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1544456578-83132e482270?auto=format&fit=crop&q=80&w=800" alt="Artisan at work" />
                </div>
            </div>
        </section>
    );
}
