import { Shield, UserCheck, Mail, Cookie, Link as LinkIcon, Lock, Eye } from "lucide-react";

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Políticas de Privacidad
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        En Gestor de Partes estamos comprometidos con la seguridad y protección de los datos de nuestros usuarios.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Declaración de Privacidad */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Shield size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">Declaración de Privacidad</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            GESTOR DE PARTES establece los términos en que usa y protege la información proporcionada por sus usuarios.
                            Estamos comprometidos con la seguridad de sus datos. Cuando pedimos campos de información personal,
                            aseguramos que sólo se empleará de acuerdo con los términos de este documento. Esta página se actualiza
                            continuamente para su seguridad.
                        </p>
                    </div>

                    {/* Información recogida */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <UserCheck size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">Información Recogida</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Podremos recoger información personal como: Nombre, correo electrónico e información demográfica.
                            Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún
                            pedido o realizar una entrega o facturación.
                        </p>
                    </div>

                    {/* Uso de la información */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Mail size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">Uso de los Datos</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Empleamos la información para proporcionar el mejor servicio posible, particularmente para mantener
                            un registro de usuarios, de pedidos y mejorar nuestros productos. Podremos enviar correos periódicos
                            con ofertas especiales y nuevos productos.
                        </p>
                    </div>

                    {/* Cookies */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Cookie size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">Uso de Cookies</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Las cookies sirven para identificar las páginas que son visitadas y su frecuencia para análisis estadístico.
                            Usted puede eliminar las cookies en cualquier momento. Sin embargo, aceptarlas ayuda a proporcionar un
                            mejor servicio. No dan acceso a información personal de su ordenador a menos que usted la proporcione.
                        </p>
                    </div>

                    {/* Enlaces a Terceros */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <LinkIcon size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">Enlaces Externos</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Este sitio web pudiera contener enlaces a otros sitios de interés. Una vez que salga de nuestra página,
                            no tenemos control sobre el sitio al que es redirigido y no somos responsables de la protección
                            de sus datos en esos terceros.
                        </p>
                    </div>

                    {/* Control de información */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Lock size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">Control de su Información</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Usted puede restringir la recopilación o el uso de su información personal en cualquier momento.
                            No venderemos, cederemos ni distribuiremos su información sin su consentimiento, salvo requerimiento judicial.
                            Se reserva el derecho de cambiar los términos de la presente Política en cualquier momento.
                        </p>
                    </div>

                    {/* Contacto Transparencia */}
                    <div className="group bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg lg:col-span-3 mt-4">
                        <Eye size={40} className="mb-4" />
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Transparencia Total</h3>
                        <p className="max-w-3xl mb-0 opacity-90">
                            Si tiene alguna duda sobre cómo manejamos sus datos, puede contactar con nuestro equipo de privacidad
                            directamente a través de nuestros canales de atención al cliente.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}

