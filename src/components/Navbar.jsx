import React, { useState } from 'react';
import { Scale, Menu, X, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import SearchOverlay from './SearchOverlay';

export default function Navbar({ comparisonCount = 0, onOpenComparison }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="logo">
                    <Link to="/">Nakış Dünyası</Link>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/">{t('nav.home')}</Link>
                    <Link to="/about">{t('footer.links.about')}</Link>
                    <Link to="/blog">{t('blog.title')}</Link>
                    <Link to="/contact">{t('footer.links.contact')}</Link>
                </div>

                <div className="nav-actions">
                    <LanguageSwitcher />
                    <button
                        className="icon-btn"
                        aria-label={t('nav.search')}
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search size={22} />
                    </button>
                    <button
                        className="icon-btn"
                        aria-label={t('nav.compare')}
                        onClick={onOpenComparison}
                    >
                        <Scale size={22} />
                        {comparisonCount > 0 && (
                            <span className="cart-badge">{comparisonCount}</span>
                        )}
                    </button>
                </div>
            </div>

            <SearchOverlay
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </nav>
    );
}
