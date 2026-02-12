import { Truck, Store, ChevronRight, Package, MapPin } from "lucide-react";
import Link from "next/link";

export default function EntregasPage() {
    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">Información de Entregas</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Información de Entrega
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        Esta información puede someterse a cambios de acuerdo a los procesos y políticas de Gestor De Partes.
                    </p>
                    <div className="w-24 h-1 bg-primary mt-6 rounded-full"></div>
                </div>

                <div className="space-y-12">
                    {/* Home Delivery Section */}
                    <div className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col md:flex-row items-stretch">
                            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-border">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                        <Truck size={32} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                                        Te Enviamos tus productos a domicilio
                                    </h2>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    En Gestor De Partes nos encargamos de realizar entregas a domicilio a toda Colombia por medio de las principales empresas transportadoras según el destino lo requiera. De esta forma nos aseguramos de que tus productos sean entregados por profesionales en el servicio.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div> Envíos a toda Colombia
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div> Seguimiento en tiempo real
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div> Alianzas con transportistas top
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div> Seguro de mercancía incluido
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[40%] bg-muted/30 flex items-center justify-center p-12">
                                <div className="relative">
                                    <Package size={120} className="text-primary/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Truck size={60} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Store Pickup Section */}
                    <div className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col md:flex-row-reverse items-stretch">
                            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-l border-border">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                        <Store size={32} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide text-right md:text-right">
                                        Recoge tus productos en nuestras tiendas
                                    </h2>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-right md:text-right">
                                    Si prefieres recoger tus productos personalmente, puedes hacerlo en cualquiera de nuestras tiendas físicas que se encuentren habilitadas para el servicio. Para hacerlo solo confirma la forma en que quieres recibir tus productos cuando estés finalizando tu compra.
                                </p>
                                <div className="flex justify-end gap-6 text-sm font-medium text-foreground">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" /> Ubicaciones estratégicas
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" /> Sin costo de envío
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[40%] bg-muted/30 flex items-center justify-center p-12">
                                <div className="relative">
                                    <Store size={120} className="text-primary/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <MapPin size={60} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-6">¿Tienes dudas sobre tu entrega?</p>
                    <Link
                        href="https://wa.me/your-number"
                        className="inline-flex items-center gap-2 py-4 px-10 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
                    >
                        CONSULTAR CON UN ASESOR
                    </Link>
                </div>
            </div>
        </main>
    );
}

