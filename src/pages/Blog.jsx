import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Blog() {
    const { t } = useTranslation();

    return (
        <section className="page-section container">
            <header className="page-header">
                <span className="section-eyebrow">{t('blog.subtitle')}</span>
                <h1 className="page-title">{t('blog.title')}</h1>
            </header>

            <div className="blog-grid">
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1616606015525-42013f9829f2?auto=format&fit=crop&q=80&w=800" alt="Embroidery" />
                    <div className="blog-content">
                        <h3>{t('blog.articles.1.title')}</h3>
                        <p>{t('blog.articles.1.excerpt')}</p>
                        <a href="#" className="read-more">{t('blog.readMore')}</a>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1596489433149-a3d8276f7a7c?auto=format&fit=crop&q=80&w=800" alt="Dowry Details" />
                    <div className="blog-content">
                        <h3>{t('blog.articles.2.title')}</h3>
                        <p>{t('blog.articles.2.excerpt')}</p>
                        <a href="#" className="read-more">{t('blog.readMore')}</a>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1549488497-6571fa23ca61?auto=format&fit=crop&q=80&w=800" alt="Silk Thread" />
                    <div className="blog-content">
                        <h3>{t('blog.articles.3.title')}</h3>
                        <p>{t('blog.articles.3.excerpt')}</p>
                        <a href="#" className="read-more">{t('blog.readMore')}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
