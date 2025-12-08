import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getProducts } from '../data/products';
import Fuse from 'fuse.js';

export default function SearchOverlay({ isOpen, onClose }) {
    const { t, i18n } = useTranslation();
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);

    // Initial curated terms for "Popular Searches"
    const popularSearches = ["Runner", "Silk", "Dowry", "Maraş", "Velvet"];

    // Memoize Fuse instance to avoid recreation on every render
    const fuse = React.useMemo(() => {
        return new Fuse(products, {
            keys: [
                { name: 'name', weight: 0.6 },
                { name: 'category', weight: 0.3 },
                { name: 'materialComposition', weight: 0.1 }
            ],
            threshold: 0.4, // Match tolerance: lower is stricter, higher is fuzzier
            includeScore: true
        });
    }, [products]);

    // Load products on mount/change
    useEffect(() => {
        if (isOpen) {
            setProducts(getProducts(i18n.language));
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            // Cleanup on close
            setQuery('');
            setResults([]);
        }
    }, [isOpen, i18n.language]);

    // Live search logic with gentle debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!query.trim()) {
                setResults([]);
                setIsLoading(false);
                return;
            }

            // Fuse.js search
            const fuseResults = fuse.search(query);
            // Map back to original items
            const filtered = fuseResults.map(result => result.item);

            setResults(filtered);
            setIsLoading(false);
        }, 300);

        if (query.trim()) setIsLoading(true);

        return () => clearTimeout(timeoutId);
    }, [query, fuse]);

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modern-search-overlay">
            {/* Backdrop with High Blur */}
            <div className="search-backdrop" onClick={onClose} />

            <div className="search-content-container">
                {/* 1. INPUT SECTION */}
                <div className="search-header">
                    <div className="input-group">
                        <Search className="search-icon-static" size={28} />
                        <input
                            ref={inputRef}
                            type="text"
                            className="huge-search-input"
                            placeholder={t('search.placeholder') || "Search..."}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={28} />
                        ) : (
                            query && (
                                <button className="clear-icon-btn" onClick={() => setQuery('')}>
                                    <X size={28} />
                                </button>
                            )
                        )}
                    </div>
                    <button className="close-text-btn" onClick={onClose}>
                        {t('common.close') || "Close"}
                    </button>
                </div>

                {/* 2. RESULTS CARD (Guaranteed Readability) */}
                <div className={`search-results-card ${results.length > 0 || !query ? 'active' : ''}`}>

                    {/* Empty State: Popular Searches */}
                    {!query && (
                        <div className="popular-section">
                            <h4>{t('search.popular')}</h4>
                            <div className="chips-row">
                                {popularSearches.map(term => (
                                    <button
                                        key={term}
                                        className="modern-chip"
                                        onClick={() => setQuery(term)}
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results found */}
                    {query && !isLoading && results.length === 0 && (
                        <div className="no-results-state">
                            <p className="no-res-title">{t('search.noResultsTitle')}</p>
                            <p className="no-res-desc">{t('search.noResultsDesc')}</p>
                        </div>
                    )}

                    {/* Result List */}
                    {query && !isLoading && results.length > 0 && (
                        <div className="results-list">
                            {results.map(product => (
                                <div key={product.productId} className="result-row">
                                    <div className="thumb-wrapper">
                                        <img src={product.imageURL} alt={product.name} />
                                    </div>
                                    <div className="info-col">
                                        <h5>{product.name}</h5>
                                        <span className="cat-label">{product.category}</span>
                                    </div>
                                    <div className="price-col">
                                        {product.priceUSD}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
