import React from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
    const { t } = useTranslation();

    return (
        <section className="page-section container">
            <header className="page-header">
                <h1 className="page-title">{t('faq.title')} <HelpCircle size={24} style={{ display: 'inline', marginLeft: '10px' }} /></h1>
            </header>

            <div className="faq-list">
                <div className="faq-item">
                    <h3>{t('faq.q1')}</h3>
                    <p>{t('faq.a1')}</p>
                </div>
                <div className="faq-item">
                    <h3>{t('faq.q2')}</h3>
                    <p>{t('faq.a2')}</p>
                </div>
                <div className="faq-item">
                    <h3>{t('faq.q3')}</h3>
                    <p>{t('faq.a3')}</p>
                </div>
            </div>
        </section>
    );
}
