
export const getProducts = (language) => {
    const products = [
        {
            productId: 1001,
            priceUSD: 249.99,
            imageURL: "https://picsum.photos/id/101/800/800",
            stockStatus: {
                tr: "Stokta Var",
                en: "In Stock",
                de: "Auf Lager"
            },
            isBespoke: false,
            name: {
                tr: "Sultan Kadife Runner",
                en: "Sultan's Velvet Runner",
                de: "Sultans Samtläufer"
            },
            category: {
                tr: "Ev Tekstili",
                en: "Home Textile",
                de: "Heimtextilien"
            },
            materialComposition: {
                tr: "%100 Türk Pamuk Kadife",
                en: "100% Turkish Cotton Velvet",
                de: "100% Türkischer Baumwollsamt"
            },
            embroideryTechnique: {
                tr: "Maraş İşi El Nakışı",
                en: "Goldwork Hand-embroidery (Maraş Işi)",
                de: "Goldstickerei (Maraş Işi)"
            },
            dimensions: {
                tr: "160cm x 40cm",
                en: "160cm x 40cm",
                de: "160cm x 40cm"
            },
            careInstructions: {
                tr: "Sadece Kuru Temizleme",
                en: "Dry Clean Only",
                de: "Nur chemische Reinigung"
            }
        },
        {
            productId: 1002,
            priceUSD: 850.00,
            imageURL: "https://picsum.photos/id/102/800/800",
            stockStatus: {
                tr: "Sipariş Üzerine (3 Hafta)",
                en: "Made to Order (3 Weeks)",
                de: "Auf Bestellung (3 Wochen)"
            },
            isBespoke: true,
            name: {
                tr: "Osmanlı Lale Çeyiz Seti",
                en: "Ottoman Tulip Dowry Set",
                de: "Osmanisches Tulpen-Mitgiftset"
            },
            category: {
                tr: "Çeyiz Seti",
                en: "Dowry Set",
                de: "Mitgiftset"
            },
            materialComposition: {
                tr: "%60 İpek, %40 Mısır Pamuğu",
                en: "60% Silk, 40% Egyptian Cotton",
                de: "60% Seide, 40% Ägyptische Baumwolle"
            },
            embroideryTechnique: {
                tr: "İğne Oyası",
                en: "Needle Lace (İğne Oyası)",
                de: "Nadelspitze (İğne Oyası)"
            },
            dimensions: {
                tr: "King Size (240cm x 260cm)",
                en: "King Size (240cm x 260cm)",
                de: "King Size (240cm x 260cm)"
            },
            careInstructions: {
                tr: "Elde Soğuk Yıkama",
                en: "Hand Wash Cold",
                de: "Handwäsche kalt"
            }
        },
        {
            productId: 1003,
            priceUSD: 1200.00,
            imageURL: "https://picsum.photos/id/103/800/800",
            stockStatus: {
                tr: "Sınırlı Üretim (1/5)",
                en: "Limited Edition (1/5)",
                de: "Limitierte Auflage (1/5)"
            },
            isBespoke: true,
            name: {
                tr: "Tören Kaftanı Sanat Eseri",
                en: "Ceremonial Kaftan Art Piece",
                de: "Zeremonielles Kaftan-Kunstwerk"
            },
            category: {
                tr: "Nakış Sanatı",
                en: "Embroidery Art",
                de: "Stickkunst"
            },
            materialComposition: {
                tr: "Ham İpek & Altın İplik",
                en: "Raw Silk & Gold Thread",
                de: "Rohseide & Goldfaden"
            },
            embroideryTechnique: {
                tr: "Geleneksel Tel Kırma",
                en: "Traditional Tel Kırma",
                de: "Traditionelles Tel Kırma"
            },
            dimensions: {
                tr: "80cm x 120cm (Çerçeveli)",
                en: "80cm x 120cm (Framed)",
                de: "80cm x 120cm (Gerahmt)"
            },
            careInstructions: {
                tr: "Nazikçe Tozunu Alın",
                en: "Dust Gently",
                de: "Vorsichtig abstauben"
            }
        },
        {
            productId: 1004,
            priceUSD: 125.50,
            imageURL: "https://picsum.photos/id/104/800/800",
            stockStatus: {
                tr: "Stokta Var",
                en: "In Stock",
                de: "Auf Lager"
            },
            isBespoke: false,
            name: {
                tr: "Anadolu Flora Yastık",
                en: "Anatolian Flora Cushion",
                de: "Anatolisches Flora-Kissen"
            },
            category: {
                tr: "Ev Tekstili",
                en: "Home Textile",
                de: "Heimtextilien"
            },
            materialComposition: {
                tr: "%100 Organik Keten",
                en: "100% Organic Linen",
                de: "100% Bio-Leinen"
            },
            embroideryTechnique: {
                tr: "Zincir İşi",
                en: "Chain Stitch (Zincir İşi)",
                de: "Kettenstich (Zincir İşi)"
            },
            dimensions: {
                tr: "45cm x 45cm",
                en: "45cm x 45cm",
                de: "45cm x 45cm"
            },
            careInstructions: {
                tr: "Makinede Hassas Yıkama",
                en: "Machine Wash Delicate",
                de: "Maschinenwäsche fein"
            }
        },
        {
            productId: 1005,
            priceUSD: 340.00,
            imageURL: "https://picsum.photos/id/106/800/800",
            stockStatus: {
                tr: "Stokta Var",
                en: "In Stock",
                de: "Auf Lager"
            },
            isBespoke: false,
            name: {
                tr: "Klasik Duvak",
                en: "Bridal Veil (Duvak) Classic",
                de: "Brautschleier (Duvak) Klassisch"
            },
            category: {
                tr: "Çeyiz Seti",
                en: "Dowry Set",
                de: "Mitgiftset"
            },
            materialComposition: {
                tr: "Fransız Tül & Saten",
                en: "French Tulle & Satin",
                de: "Französischer Tüll & Satin"
            },
            embroideryTechnique: {
                tr: "Kordonlu Dantel Aplike",
                en: "Corded Lace Appliqué",
                de: "Kordelspitzen-Applikation"
            },
            dimensions: {
                tr: "200cm Uzunluk",
                en: "200cm Length",
                de: "200cm Länge"
            },
            careInstructions: {
                tr: "Sadece Profesyonel Buhar",
                en: "Professional Steam Only",
                de: "Nur professioneller Dampf"
            }
        },
        {
            productId: 1006,
            priceUSD: 450.00,
            imageURL: "https://picsum.photos/id/108/800/800",
            stockStatus: {
                tr: "Sipariş Üzerine (2 Hafta)",
                en: "Made to Order (2 Weeks)",
                de: "Auf Bestellung (2 Wochen)"
            },
            isBespoke: true,
            name: {
                tr: "Miras Masa Örtüsü",
                en: "Heritage Tablecloth",
                de: "Erbe Tischdecke"
            },
            category: {
                tr: "Ev Tekstili",
                en: "Home Textile",
                de: "Heimtextilien"
            },
            materialComposition: {
                tr: "%100 Saf Keten",
                en: "100% Pure Linen",
                de: "100% Reines Leinen"
            },
            embroideryTechnique: {
                tr: "Beyaz İş",
                en: "Whitework (Beyaz İş)",
                de: "Weißstickerei (Beyaz İş)"
            },
            dimensions: {
                tr: "180cm Yuvarlak",
                en: "180cm Round",
                de: "180cm Rund"
            },
            careInstructions: {
                tr: "Makinede Soğuk Yıkama, Asarak Kurutma",
                en: "Machine Wash Cold, Line Dry",
                de: "Maschinenwäsche kalt, auf der Leine trocknen"
            }
        }
    ];

    // Normalize lang code to 'tr', 'en', 'de'
    const lang = ['tr', 'en', 'de'].includes(language) ? language : 'tr';

    return products.map(p => ({
        ...p,
        name: p.name[lang],
        category: p.category[lang],
        stockStatus: p.stockStatus[lang],
        materialComposition: p.materialComposition[lang],
        embroideryTechnique: p.embroideryTechnique[lang],
        dimensions: p.dimensions[lang],
        careInstructions: p.careInstructions[lang]
    }));
};
