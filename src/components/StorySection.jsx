import React from 'react';
import { useTranslation } from 'react-i18next';

export default function StorySection() {
    const { t } = useTranslation();

    return (
        <section id="our-craft" className="story-section">
            <div className="container story-container">
                <div className="story-content">
                    <span className="story-eyebrow">{t('story.eyebrow')}</span>
                    <h2 className="story-title" dangerouslySetInnerHTML={{ __html: t('story.title').replace('Every', '<br/>Every').replace('Bir', '<br/>Bir') }}></h2>
                    <p className="story-text">
                        {t('story.text')}
                    </p>
                    <a href="/about" className="story-link">{t('story.link')} &rarr;</a>
                </div>
                <div className="story-image">
                    {/* Placeholder for artisan hands image */}
                    <div className="image-placeholder">
                        <img src="https://images.unsplash.com/photo-1506806745914-8c8f070c7333?auto=format&fit=crop&q=80&w=800" alt="Artisan Hands" />
                    </div>
                </div>
            </div>
        </section>
    );
}
