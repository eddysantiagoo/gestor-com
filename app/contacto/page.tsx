import { ChevronRight, PhoneOutgoing, Mail, Clock, MapPin, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
    const sedes = [
        { phone: "+57 301 4922306", sede: "Sede Belén", link: "573014922306" },
        { phone: "+57 320 6177170", sede: "Sede Belén", link: "573206177170" },
        { phone: "+57 315 4897236", sede: "Sede Belén", link: "573154897236" },
        { phone: "+57 312 7102450", sede: "Sede Belén", link: "573127102450" },
        { phone: "+57 300 8856553", sede: "Sede Belén", link: "573008856553" },
        { phone: "+57 302 4306872", sede: "Sede Belén", link: "573024306872" },
        { phone: "+57 321 8185521", sede: "Sede Centro (B. Triste)", link: "573218185521" },
        { phone: "+57 320 7581482", sede: "Sede Centro (B. Triste)", link: "573207581482" },
    ];

    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">Contáctanos</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Contáctanos
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        Somos una empresa especialista en importación, distribución y comercialización de repuestos para maquinaria pesada ubicada en Medellín – Colombia. Importamos repuestos para toda clase de maquinaria pesada. Identificación, localización, y distribución.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info & Phone List */}
                    <div className="space-y-12">
                        <section className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:border-primary transition-all duration-300">
                            <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-tight flex items-center gap-3">
                                <PhoneOutgoing className="text-primary" size={24} />
                                Central de Atención
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Comunícate con nosotros a través de nuestras líneas telefónicas y solicita atención personalizada:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {sedes.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`https://api.whatsapp.com/send?phone=${item.link}`}
                                        target="_blank"
                                        className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                                    >
                                        <div className="p-2 bg-background rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <PhoneOutgoing size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-foreground">{item.phone}</span>
                                            <span className="text-[10px] text-muted-foreground uppercase font-medium">{item.sede}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tighter">¿No encuentras el repuesto que buscas?</h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                Si no encuentras el repuesto que buscas contactanos y solicita tu atención en minutos en alguna de nuestras sedes físicas.
                            </p>

                            <div className="space-y-4">
                                <Link
                                    href="https://maps.google.com/maps?ll=6.237097,-75.588637&z=16&t=m&hl=es-419&gl=CO&mapclient=embed&cid=9011027827913297345"
                                    target="_blank"
                                    className="flex items-start gap-3 text-sm text-foreground hover:text-primary transition-colors group"
                                >
                                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <span className="underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary">
                                        Calle 32C 66C 64 Belén, Malibu, Medellín - Antioquia (Colombia)
                                    </span>
                                </Link>
                                <Link
                                    href="https://www.google.com/maps/place/Gestor+De+Partes/@6.2494795,-75.57807,15z/data=!4m6!3m5!1s0x8e4429080d0ebecf:0xf0aae5e740801d85!8m2!3d6.2494795!4d-75.57807!16s%2Fg%2F11t178s_xb?entry=ttu"
                                    target="_blank"
                                    className="flex items-start gap-3 text-sm text-foreground hover:text-primary transition-colors group"
                                >
                                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <span className="underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary">
                                        Calle 45A #60-24 Barrio Triste, Medellín - Antioquia (Colombia)
                                    </span>
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Map, Email, Schedule */}
                    <div className="space-y-8">
                        {/* Map Card */}
                        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="p-8 border-b border-border">
                                <h2 className="text-xl font-bold text-foreground uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="text-primary" size={24} /> Nuestra Dirección Principal
                                </h2>
                            </div>
                            <div className="aspect-[16/9] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2020963857744!2d-75.59094108590669!3d6.237071928158807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429bdda22828f%3A0x7d0d9a1127ee8dc1!2sGestor%20De%20Partes!5e0!3m2!1ses-419!2sco!4v1591135126957!5m2!1ses-419!2sco"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-muted/30 border border-border rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <Mail size={20} />
                                    <h3 className="font-bold uppercase text-xs tracking-widest text-foreground">Correo Electrónico</h3>
                                </div>
                                <Link
                                    href="mailto:contacto@gestordepartes.com"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-words font-medium"
                                >
                                    contacto@gestordepartes.com
                                </Link>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <Clock size={20} />
                                    <h3 className="font-bold uppercase text-xs tracking-widest text-foreground">Horarios de Atención</h3>
                                </div>
                                <ul className="text-xs text-muted-foreground space-y-2 font-medium">
                                    <li className="flex justify-between"><span>Lunes - Viernes:</span> <span className="text-foreground">8 AM - 6 PM</span></li>
                                    <li className="flex justify-between"><span>Sábados:</span> <span className="text-foreground">8 AM - 4 PM</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-foreground text-background rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2 text-primary">
                                    <Briefcase size={20} />
                                    <h3 className="font-bold uppercase text-xs tracking-widest">Trabaja con nosotros</h3>
                                </div>
                                <p className="text-sm opacity-80 mb-4 max-w-[250px]">
                                    ¿Quieres ser parte de nuestra red de proveedores?
                                </p>
                                <Link
                                    href="/trabajo"
                                    className="inline-flex items-center gap-2 bg-primary text-white py-2 px-5 rounded-xl font-bold text-xs hover:opacity-90 transition-all shadow-lg"
                                >
                                    IR A LA RED <ExternalLink size={14} />
                                </Link>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-500">
                                <Briefcase size={140} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
