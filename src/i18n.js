import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                art: "Embroidery Art",
                dowry: "Dowry Collection",
                home: "Home Textiles",
                craft: "Our Craft",
                search: "Search",
                compare: "Compare Products",
                popular: "Popular Searches",
                loading: "Searching...",
                noResultsTitle: "We couldn't find a match.",
                noResultsDesc: "Try adjusting your search or explore our collections."
            },
            hero: {
                subtitle: "Handcrafted with Love",
                title: "Timeless Embroidery & Modern Heritage",
                desc: "Discover our collection of bespoke dowry sets, artisanal embroidery art, and luxury home textiles.",
                shop: "Shop Collection",
                explore: "Explore Our Craft"
            },
            grid: {
                eyebrow: "Curated Selection",
                title: "New Arrivals",
                addToCompare: "Add to Compare",
                bespoke: "Bespoke",
                searchPlaceholder: "Search for products, techniques...",
                noResults: "No products found."
            },
            story: {
                eyebrow: "The Artisan's Touch",
                title: "Weaving Stories into Every Stitch",
                text: "At Nakış Dünyası, we believe that true luxury lies in the details. Each piece is hand-embroidered by master artisans who have inherited their skills through generations. From the selection of the finest threads to the final knot, our process is a labor of love, patience, and dedication.",
                link: "Read Our Story"
            },
            footer: {
                slogan: "Artisanal elegance for your home and heritage.",
                mission: "Preserving the art of embroidery, one stitch at a time.",
                shop: "Shop",
                company: "Company",
                connect: "Connect",
                newsletter: {
                    title: "Join Our Community",
                    desc: "Receive updates on new collections and artisan stories.",
                    placeholder: "Enter your email",
                    button: "Subscribe"
                },
                legal: {
                    privacy: "Privacy Policy",
                    terms: "Terms of Service"
                },
                products: {
                    art: "Embroidery Art",
                    dowry: "Dowry Sets",
                    home: "Home Textiles"
                },
                links: {
                    about: "About Us",
                    contact: "Contact",
                    shipping: "Shipping & Returns"
                },
                rights: "All rights reserved."
            },
            comparison: {
                title: "Artisanal Comparison",
                empty: {
                    title: "No Items to Compare",
                    text: "Select items from the collection to see them side-by-side.",
                    button: "Browse Collection"
                },
                labels: {
                    product: "Product",
                    material: "Material",
                    technique: "Technique",
                    dimensions: "Dimensions",
                    care: "Care",
                    availability: "Availability",
                    actions: "Actions"
                },
                actions: {
                    inquire: "Inquire Custom",
                    order: "Order Now",
                    remove: "Remove"
                }
            },
            about: {
                title: "Our Heritage",
                subtitle: "The Art of Patience",
                text1: "Nakış Dünyası was born from a desire to preserve the vanishing art of traditional Anatolian embroidery. Our journey began in a small workshop in Istanbul, where the rhythmic sound of the needle and thread created a symphony of craftsmanship.",
                text2: "We collaborate with master artisans, primarily women from rural regions, empowering them to sustain their families while keeping centuries-old techniques alive. Every piece tells a story of culture, dedication, and grace.",
                values: "Heritage • Craftsmanship • Sustainability"
            },
            contact: {
                title: "Get in Touch",
                subtitle: "We'd Love to Hear From You",
                form: {
                    name: "Your Name",
                    email: "Email Address",
                    message: "Message",
                    submit: "Send Message"
                },
                info: {
                    address: "Galata Tower St. No: 42, Beyoğlu, Istanbul",
                    phone: "+90 (212) 555 0123",
                    email: "hello@nakisdunyasi.com"
                }
            },
            faq: {
                title: "Frequently Asked Questions",
                q1: "Do you ship internationally?",
                a1: "Yes, we ship our artisanal pieces worldwide via express courier.",
                q2: "Can I request a custom design?",
                a2: "Absolutely. Bespoke orders are the heart of our business. Contact us to start your custom journey.",
                q3: "How do I care for my embroidery?",
                a3: "Most of our pieces are delicate. We recommend professional dry cleaning or gentle hand washing for specific items."
            },
            blog: {
                title: "Needle & Thread",
                subtitle: "Inspiration & Stories",
                readMore: "Read Article",
                articles: {
                    1: { title: "The History of Maraş Work", excerpt: "Exploring the golden threads of southern Anatolia..." },
                    2: { title: "Modern Dowry Trends 2024", excerpt: "How traditional pieces are finding their place in modern homes..." },
                    3: { title: "Caring for Silk Inheritance", excerpt: "Preserving your grandmother's embroidery for the next generation..." }
                }
            }
        }
    },
    tr: {
        translation: {
            nav: {
                art: "Nakış Sanatı",
                dowry: "Çeyiz Koleksiyonu",
                home: "Ev Tekstili",
                craft: "Zanaatimiz",
                search: "Ara",
                compare: "Ürünleri Karşılaştır",
                popular: "Popüler Aramalar",
                loading: "Aranıyor...",
                noResultsTitle: "Eşleşen ürün bulamadık.",
                noResultsDesc: "Aramanızı değiştirmeyi deneyin veya koleksiyonlarımıza göz atın."
            },
            hero: {
                subtitle: "Sevgiyle İşlendi",
                title: "Zamansız Nakış & Modern Miras",
                desc: "Özel çeyiz setleri, sanatsal nakış eserleri ve lüks ev tekstili koleksiyonumuzu keşfedin.",
                shop: "Koleksiyonu İncele",
                explore: "Zanaatimizi Keşfet"
            },
            grid: {
                eyebrow: "Özel Seçki",
                title: "Yeni Gelenler",
                addToCompare: "Karşılaştır",
                bespoke: "Özel Yapım",
                searchPlaceholder: "Ürün, teknik veya malzeme ara...",
                noResults: "Ürün bulunamadı."
            },
            story: {
                eyebrow: "Zanaatkarın Dokunuşu",
                title: "Her İlmekte Bir Hikaye",
                text: "Nakış Dünyası'nda gerçek lüksün detaylarda saklı olduğuna inanıyoruz. Her parça, becerilerini nesiller boyu aktaran usta zanaatkarlar tarafından elle işlenmiştir. En kaliteli ipliklerin seçiminden son düğüme kadar sürecimiz bir emek, sabır ve tutku yolculuğudur.",
                link: "Hikayemizi Oku"
            },
            footer: {
                slogan: "Eviniz ve mirasınız için zanaatkar şıklığı.",
                mission: "Nakış sanatını her ilmekte yaşatıyoruz.",
                shop: "Mağaza",
                company: "Şirket",
                connect: "Bağlantı",
                newsletter: {
                    title: "Ailemize Katılın",
                    desc: "Yeni koleksiyonlardan ve zanaatkar hikayelerinden haberdar olun.",
                    placeholder: "E-posta adresiniz",
                    button: "Abone Ol"
                },
                legal: {
                    privacy: "Gizlilik Politikası",
                    terms: "Hizmet Şartları"
                },
                products: {
                    art: "Nakış Sanatı",
                    dowry: "Çeyiz Setleri",
                    home: "Ev Tekstili"
                },
                links: {
                    about: "Hakkımızda",
                    contact: "İletişim",
                    shipping: "Kargo & İade"
                },
                rights: "Tüm hakları saklıdır."
            },
            comparison: {
                title: "Zanaatkar Karşılaştırması",
                empty: {
                    title: "Karşılaştırılacak Ürün Yok",
                    text: "Yan yana görmek için koleksiyondan ürün seçin.",
                    button: "Koleksiyona Göz At"
                },
                labels: {
                    product: "Ürün",
                    material: "Malzeme",
                    technique: "Teknik",
                    dimensions: "Boyutlar",
                    care: "Bakım",
                    availability: "Bulunabilirlik",
                    actions: "İşlemler"
                },
                actions: {
                    inquire: "Özel Sipariş",
                    order: "Sipariş Ver",
                    remove: "Kaldır"
                }
            },
            about: {
                title: "Mirasımız",
                subtitle: "Sabır Sanatı",
                text1: "Nakış Dünyası, kaybolmaya yüz tutmuş geleneksel Anadolu nakış sanatını koruma arzusundan doğdu. Yolculuğumuz, iğne ve ipliğin ritmik sesinin bir zanaat senfonisi yarattığı İstanbul'daki küçük bir atölyede başladı.",
                text2: "Başta kırsal bölgelerdeki kadınlar olmak üzere usta zanaatkarlarla işbirliği yaparak, hem ailelerini geçindirmelerini sağlıyor hem de asırlık teknikleri yaşatıyoruz. Her parça kültür, özveri ve zarafetin hikayesini anlatıyor.",
                values: "Miras • Ustalık • Sürdürülebilirlik"
            },
            contact: {
                title: "İletişime Geçin",
                subtitle: "Sizden Haber Almak İsteriz",
                form: {
                    name: "Adınız",
                    email: "E-posta Adresi",
                    message: "Mesajınız",
                    submit: "Mesaj Gönder"
                },
                info: {
                    address: "Galata Kulesi Sok. No: 42, Beyoğlu, İstanbul",
                    phone: "+90 (212) 555 0123",
                    email: "merhaba@nakisdunyasi.com"
                }
            },
            faq: {
                title: "Sıkça Sorulan Sorular",
                q1: "Yurtdışına gönderim yapıyor musunuz?",
                a1: "Evet, zanaatkar ürünlerimizi ekspres kurye ile tüm dünyaya gönderiyoruz.",
                q2: "Özel tasarım talep edebilir miyim?",
                a2: "Kesinlikle. Kişiye özel siparişler işimizin kalbidir. Özel yolculuğunuzu başlatmak için bizimle iletişime geçin.",
                q3: "Nakışlarımın bakımını nasıl yapmalıyım?",
                a3: "Parçalarımızın çoğu hassastır. Belirli ürünler için profesyonel kuru temizleme veya hassas elde yıkama öneriyoruz."
            },
            blog: {
                title: "İğne & İplik",
                subtitle: "İlham & Hikayeler",
                readMore: "Makaleyi Oku",
                articles: {
                    1: { title: "Maraş İşinin Tarihçesi", excerpt: "Güney Anadolu'nun altın ipliklerini keşfederken..." },
                    2: { title: "Modern Çeyiz Trendleri 2024", excerpt: "Geleneksel parçalar modern evlerde nasıl yer buluyor..." },
                    3: { title: "İpek Mirasın Bakımı", excerpt: "Büyükannenizin nakışlarını gelecek nesillere saklamak..." }
                }
            }
        }
    },
    de: {
        translation: {
            nav: {
                art: "Stickkunst",
                dowry: "Mitgift-Kollektion",
                home: "Heimtextilien",
                craft: "Unser Handwerk",
                search: "Suche",
                compare: "Vergleichen",
                popular: "Beliebte Suchen",
                loading: "Suche...",
                noResultsTitle: "Wir konnten keinen Treffer finden.",
                noResultsDesc: "Versuchen Sie Ihre Suche anzupassen oder erkunden Sie unsere Kollektionen."
            },
            hero: {
                subtitle: "Mit Liebe Handgefertigt",
                title: "Zeitlose Stickerei & Modernes Erbe",
                desc: "Entdecken Sie unsere Kollektion aus maßgeschneiderten Mitgiftsets, kunstvoller Stickerei und luxuriösen Heimtextilien.",
                shop: "Kollektion Kaufen",
                explore: "Handwerk Entdecken"
            },
            grid: {
                eyebrow: "Kuratierte Auswahl",
                title: "Neuheiten",
                addToCompare: "Vergleichen",
                bespoke: "Maßanfertigung",
                searchPlaceholder: "Nach Produkten, Techniken suchen...",
                noResults: "Keine Produkte gefunden."
            },
            story: {
                eyebrow: "Der Hauch des Handwerkers",
                title: "Geschichten in jedem Stich",
                text: "Bei Nakış Dünyası glauben wir, dass wahrer Luxus im Detail liegt. Jedes Stück wird von Meisterhandwerkern handgestickt, die ihre Fähigkeiten über Generationen weitergegeben haben. Von der Auswahl der feinsten Fäden bis zum letzten Knoten ist unser Prozess eine Arbeit aus Liebe, Geduld und Hingabe.",
                link: "Unsere Geschichte Lesen"
            },
            footer: {
                slogan: "Handwerklicher Eleganz für Ihr Zuhause und Erbe.",
                mission: "Die Kunst der Stickerei, Stich um Stich bewahren.",
                shop: "Einkaufen",
                company: "Unternehmen",
                connect: "Verbinden",
                newsletter: {
                    title: "Werden Sie Teil der Gemeinschaft",
                    desc: "Erhalten Sie Updates zu neuen Kollektionen und Handwerksgeschichten.",
                    placeholder: "Geben Sie Ihre E-Mail ein",
                    button: "Abonnieren"
                },
                legal: {
                    privacy: "Datenschutz",
                    terms: "Nutzungsbedingungen"
                },
                products: {
                    art: "Stickkunst",
                    dowry: "Mitgiftsets",
                    home: "Heimtextilien"
                },
                links: {
                    about: "Über Uns",
                    contact: "Kontakt",
                    shipping: "Versand & Rückgabe"
                },
                rights: "Alle Rechte vorbehalten."
            },
            comparison: {
                title: "Handwerklicher Vergleich",
                empty: {
                    title: "Keine Artikel zum Vergleichen",
                    text: "Wählen Sie Artikel aus der Kollektion, um sie nebeneinander zu sehen.",
                    button: "Kollektion Durchstöbern"
                },
                labels: {
                    product: "Produkt",
                    material: "Material",
                    technique: "Technik",
                    dimensions: "Maße",
                    care: "Pflege",
                    availability: "Verfügbarkeit",
                    actions: "Aktionen"
                },
                actions: {
                    inquire: "Anfragen",
                    order: "Bestellen",
                    remove: "Entfernen"
                }
            },
            about: {
                title: "Unser Erbe",
                subtitle: "Die Kunst der Geduld",
                text1: "Nakış Dünyası entstand aus dem Wunsch, die verschwindende Kunst der traditionellen anatolischen Stickerei zu bewahren. Unsere Reise begann in einer kleinen Werkstatt in Istanbul.",
                text2: "Wir arbeiten mit Meisterhandwerkern zusammen, um jahrhundertealte Techniken am Leben zu erhalten. Jedes Stück erzählt eine Geschichte von Kultur und Hingabe.",
                values: "Erbe • Handwerkskunst • Nachhaltigkeit"
            },
            contact: {
                title: "Kontaktieren Sie uns",
                subtitle: "Wir hören gerne von Ihnen",
                form: {
                    name: "Ihr Name",
                    email: "E-Mail-Adresse",
                    message: "Nachricht",
                    submit: "Nachricht Senden"
                },
                info: {
                    address: "Galata Turm Str. Nr: 42, Beyoğlu, Istanbul",
                    phone: "+90 (212) 555 0123",
                    email: "hallo@nakisdunyasi.com"
                }
            },
            faq: {
                title: "Häufig gestellte Fragen",
                q1: "Versenden Sie international?",
                a1: "Ja, wir versenden weltweit per Expresskurier.",
                q2: "Kann ich ein individuelles Design anfordern?",
                a2: "Absolut. Maßanfertigungen sind das Herzstück unseres Geschäfts.",
                q3: "Wie pflege ich meine Stickerei?",
                a3: "Wir empfehlen professionelle Reinigung oder sanfte Handwäsche."
            },
            blog: {
                title: "Nadel & Faden",
                subtitle: "Inspiration & Geschichten",
                readMore: "Artikel Lesen",
                articles: {
                    1: { title: "Die Geschichte der Maraş-Arbeit", excerpt: "Erforschung der goldenen Fäden Südanatoliens..." },
                    2: { title: "Moderne Mitgift-Trends 2024", excerpt: "Wie traditionelle Stücke ihren Platz finden..." },
                    3: { title: "Pflege von Seidenerbe", excerpt: "Bewahrung der Stickerei Ihrer Großmutter..." }
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr', // Default language explicitly set to Turkish
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
