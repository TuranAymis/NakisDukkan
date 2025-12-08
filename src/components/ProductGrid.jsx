import React from 'react';
import { Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getProducts } from '../data/products';

export default function ProductGrid({ onAddToCompare }) {
    const { t, i18n } = useTranslation();
    const products = getProducts(i18n.language);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <section id="category-collection" className="product-section container">
            <div className="section-header">
                <span className="section-eyebrow">{t('grid.eyebrow')}</span>
                <h2 className="section-title">{t('grid.title')}</h2>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.productId} className="product-card">
                        <div className="product-image-wrapper">
                            <img src={product.imageURL} alt={product.name} className="product-image" />
                            {product.isBespoke && (
                                <span className="badge bespoke-badge">{t('grid.bespoke')}</span>
                            )}
                            <div className="add-to-cart-overlay">
                                <button
                                    className="compare-btn"
                                    onClick={() => onAddToCompare(product)}
                                >
                                    <Scale size={18} style={{ marginRight: '8px' }} />
                                    {t('grid.addToCompare')}
                                </button>
                            </div>
                        </div>
                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{formatCurrency(product.priceUSD)}</p>
                            {product.stockStatus.includes("Stock") || product.stockStatus.includes("Stok") || product.stockStatus.includes("Lager") ? null : (
                                <span className="stock-info">{product.stockStatus}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
