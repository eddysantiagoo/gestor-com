import Link from 'next/link';

const categories = [
    {
        id: 1,
        title: 'Motores Diésel',
        image: 'https://images.unsplash.com/photo-1595183321522-834c9c7f1a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Engine placeholder
        link: '#'
    },
    {
        id: 2,
        title: 'Transmisiones',
        image: 'https://images.unsplash.com/photo-1616401666679-b1d5c2e9d2f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Gear/Transmission placeholder
        link: '#'
    },
    {
        id: 3,
        title: 'Sistemas Hidráulicos',
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Hydraulics placeholder
        link: '#'
    },
    {
        id: 4,
        title: 'Tren de Rodaje',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Caterpillary tracks placeholder
        link: '#'
    },
    {
        id: 5,
        title: 'Cabinas y Lunas',
        image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cabin placeholder
        link: '#'
    },
    {
        id: 6,
        title: 'Mandos Finales',
        image: 'https://images.unsplash.com/photo-1531297461136-82lw8e2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Generic heavy metal part
        link: '#'
    }
];

export default function FeaturedCategories() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
                        Categorías Destacadas
                    </h2>
                    <div className="w-[60px] h-[3px] bg-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Encuentra refacciones para todo tipo de maquinaria pesada. Calidad y garantía en cada pieza.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            href={category.link}
                            key={category.id}
                            className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-card"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${category.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>
                                    <span className="inline-flex items-center text-white text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Ver productos <span className="ml-2">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-block py-3 px-8 bg-foreground text-background font-bold rounded hover:bg-primary hover:text-primary-foreground transition-colors duration-300 uppercase tracking-wide"
                    >
                        Ver Todas las Categorías
                    </Link>
                </div>
            </div>
        </section>
    );
}
