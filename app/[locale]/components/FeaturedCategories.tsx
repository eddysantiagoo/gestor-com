import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/navigation';

const categories = [
    {
        id: 1,
        titleKey: 'motor_parts',
        image: '/categories/1.webp',
        link: 'https://tienda.gestordepartes.com/es/categories/turbos/products',
        gridClass: 'md:col-span-2 md:row-span-2'
    },
    {
        id: 2,
        titleKey: 'undercarriage',
        image: '/categories/2.webp',
        link: 'https://tienda.gestordepartes.com/es/categories/tren-de-rodaje/products',
        gridClass: 'md:col-span-2 md:row-span-1'
    },
    {
        id: 3,
        titleKey: 'crankshaft',
        image: '/categories/3.webp',
        link: 'https://tienda.gestordepartes.com/es/categories/filtros/products',
        gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 4,
        titleKey: 'lubricants',
        image: '/categories/4.webp',
        link: 'https://tienda.gestordepartes.com/es/categories/lubricantes/products',
        gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 5,
        titleKey: 'oils_filters',
        image: '/categories/5.webp',
        link: 'https://tienda.gestordepartes.com/es/categories/filtros/products',
        gridClass: 'md:col-span-2 md:row-span-1'
    },
    {
        id: 6,
        titleKey: 'parts_manual',
        image: '/categories/6.webp',
        link: 'https://catalogo.gestordepartes.com/catalog',
        gridClass: 'md:col-span-2 md:row-span-1'
    }
];

export default function FeaturedCategories() {
    const t = useTranslations('Categories');

    return (
        <section className="py-20 bg-muted/20">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
                        {t('title')}
                    </h2>
                    <div className="w-[60px] h-[3px] bg-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {t('desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-6">
                    {categories.map((category) => (
                        <Link
                            href={category.link}
                            key={category.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card ${category.gridClass}`}
                        >
                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${category.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {t(category.titleKey)}
                                    </h3>
                                    <span className="inline-flex items-center text-white text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {t('view_products')} <span className="ml-2">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="https://tienda.gestordepartes.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-4 px-10 bg-foreground text-background font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wide shadow-lg"
                    >
                        {t('view_all')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

