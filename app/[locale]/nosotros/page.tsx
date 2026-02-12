import { ChevronRight, Truck, Cpu, UserCheck, Wrench, Settings, RotateCcw, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">¿Quiénes Somos?</span>
                </nav>

                {/* Hero Section with Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight leading-none">
                            ¿Quiénes <br /> <span className="text-primary tracking-widest">Somos?</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Somos una empresa dedicada a la importación, distribución y comercialización de repuestos de vehículos y maquinaria pesada.
                        </p>
                        <div className="w-24 h-1 bg-primary rounded-full"></div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border group">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Xhx5Qh3Ps14"
                            title="Presentación Gestor de Partes"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>

                {/* Core Values / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <FeatureCard
                        icon={<Truck size={36} />}
                        title="Logística"
                        description="Contamos con rigurosos procesos internos administrativos y comerciales que nos permiten dar pronta respuesta a las necesidades de nuestros clientes."
                    />
                    <FeatureCard
                        icon={<Cpu size={36} />}
                        title="Tecnología"
                        description="Prestamos servicio con las mejores herramientas tecnológicas y una amplia base de datos que nos permiten estar a la vanguardia en el mercado."
                    />
                    <FeatureCard
                        icon={<UserCheck size={36} />}
                        title="Expertos"
                        description="Contamos con personal altamente capacitado y expertos en el área que le brindaran la mejor atención, resolviendo sus dudas y gestionando sus productos."
                    />
                </div>

                {/* Services Grid Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wider">
                        Servicios Especializados
                    </h2>
                    <p className="text-muted-foreground text-lg">Mantenimiento y reparación con técnicos de alta gama</p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <ServiceCard
                        icon={<Activity size={24} />}
                        title="Bombas Hidráulicas"
                        description="Técnicos especializados con gran experiencia en el mantenimiento y reparación de sistemas hidráulicos."
                    />
                    <ServiceCard
                        icon={<Settings size={24} />}
                        title="Motores Diésel"
                        description="Expertos con más de 30 años de trayectoria garantizando la vida útil de su motor."
                    />
                    <ServiceCard
                        icon={<RotateCcw size={24} />}
                        title="Motores de Giro"
                        description="Diagnósticos precisos con equipos móviles de última generación."
                    />
                    <ServiceCard
                        icon={<Wrench size={24} />}
                        title="Motores de Traslación"
                        description="Servicio técnico integral con cobertura nacional y equipos de vanguardia."
                    />
                </div>

                {/* Bottom Banner Placeholder/CTA */}
                <div className="relative rounded-[2rem] overflow-hidden bg-primary/5 border border-primary/10 p-12 text-center group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <Settings size={200} className="animate-spin-slow" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-tighter">Compromiso con la Calidad</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                        En Gestor de Partes, nuestra misión es mantener su maquinaria operando al máximo rendimiento con los mejores repuestos del mercado.
                    </p>
                    <Link
                        href="https://wa.me/your-number"
                        className="inline-flex items-center gap-2 py-4 px-12 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl hover:-translate-y-1"
                    >
                        CONTACTAR AHORA
                    </Link>
                </div>
            </div>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-muted/30 border border-border rounded-[2rem] p-6 hover:bg-card hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
            <div className="p-3 bg-background rounded-xl border border-border text-primary mb-4 shadow-sm">
                {icon}
            </div>
            <h4 className="text-foreground font-bold text-sm mb-3 uppercase tracking-tighter px-2">
                {title}
            </h4>
            <div className="w-8 h-[2px] bg-primary/30 mb-4 rounded-full"></div>
            <p className="text-[13px] text-muted-foreground leading-snug">
                {description}
            </p>
        </div>
    );
}
