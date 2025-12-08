import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <Globe size={18} className="globe-icon" />
            <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="lang-select"
            >
                <option value="tr">TR</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>
        </div>
    );
}
