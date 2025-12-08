import React from 'react';
import { X, Trash2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ComparisonModal({ isOpen, onClose, items, onRemove }) {
    const { t, i18n } = useTranslation();

    if (!isOpen) return null;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat(i18n.language === 'tr' ? 'tr-TR' : 'en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    if (items.length === 0) {
        return (
            <div className="comparison-modal-overlay">
                <div className="comparison-modal empty">
                    <button className="close-modal" onClick={onClose}><X size={24} /></button>
                    <h2>{t('comparison.empty.title')}</h2>
                    <p>{t('comparison.empty.text')}</p>
                    <button className="cta-button primary" onClick={onClose}>{t('comparison.empty.button')}</button>
                </div>
            </div>
        );
    }

    return (
        <div className="comparison-modal-overlay">
            <div className="comparison-modal">
                <header className="modal-header">
                    <h2 className="modal-title">{t('comparison.title')}</h2>
                    <button className="close-modal" onClick={onClose}>
                        <span className="sr-only">Close</span>
                        <X size={24} />
                    </button>
                </header>

                <div className="comparison-table-wrapper">
                    <div className="comparison-table">
                        {/* Header Row: Product Info */}
                        <div className="compare-row header-row">
                            <div className="compare-label">{t('comparison.labels.product')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell product-cell">
                                    <div className="cell-image">
                                        <img src={item.imageURL} alt={item.name} />
                                    </div>
                                    <h3 className="cell-name">{item.name}</h3>
                                    <p className="cell-price">{formatCurrency(item.priceUSD)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Data Rows */}
                        <div className="compare-row">
                            <div className="compare-label">{t('comparison.labels.material')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell">{item.materialComposition}</div>
                            ))}
                        </div>

                        <div className="compare-row">
                            <div className="compare-label">{t('comparison.labels.technique')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell">{item.embroideryTechnique}</div>
                            ))}
                        </div>

                        <div className="compare-row">
                            <div className="compare-label">{t('comparison.labels.dimensions')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell">{item.dimensions}</div>
                            ))}
                        </div>

                        <div className="compare-row">
                            <div className="compare-label">{t('comparison.labels.care')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell small-text">{item.careInstructions}</div>
                            ))}
                        </div>

                        <div className="compare-row">
                            <div className="compare-label">{t('comparison.labels.availability')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell small-text">{item.stockStatus}</div>
                            ))}
                        </div>

                        {/* Action Row */}
                        <div className="compare-row action-row">
                            <div className="compare-label">{t('comparison.labels.actions')}</div>
                            {items.map(item => (
                                <div key={item.productId} className="compare-cell actions">
                                    <button className="cta-button primary small">
                                        {item.isBespoke ? t('comparison.actions.inquire') : t('comparison.actions.order')}
                                    </button>
                                    <button
                                        className="remove-btn"
                                        onClick={() => onRemove(item.productId)}
                                        title={t('comparison.actions.remove')}
                                    >
                                        <Trash2 size={18} /> <span className="text">{t('comparison.actions.remove')}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
