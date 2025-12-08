import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content container">
                <span className="hero-subtitle">{t('hero.subtitle')}</span>
                <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero.title').replace('&', '<br/>&') }}></h1>
                <p className="hero-description">
                    {t('hero.desc')}
                </p>
                <div className="hero-actions">
                    <button className="cta-button primary">{t('hero.shop')}</button>
                    <button className="cta-button secondary">{t('hero.explore')}</button>
                </div>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
}
