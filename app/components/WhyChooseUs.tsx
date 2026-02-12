import { Box, Truck, ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Inventario Masivo",
            description: "Más de 50,000 números de parte listos para envío inmediato. Todo lo que necesitas en un solo lugar.",
            icon: <Box size={48} className="text-primary" />
        },
        {
            title: "Envíos Rápidos",
            description: "Logística optimizada para entregar tus refacciones donde las necesites, en tiempo récord.",
            icon: <Truck size={48} className="text-primary" />
        },
        {
            title: "Calidad Garantizada",
            description: "Solo trabajamos con marcas líderes y productos certificados para asegurar la durabilidad de tu maquinaria.",
            icon: <ShieldCheck size={48} className="text-primary" />
        },
        {
            title: "Soporte Técnico",
            description: "Nuestro equipo de expertos te asesora para encontrar la pieza exacta que necesitas.",
            icon: <Headset size={48} className="text-primary" />
        }
    ];

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:border-primary transition-colors duration-300">
                            <div className="mb-4 p-3 bg-muted rounded-full border border-border">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
