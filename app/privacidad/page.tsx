export default function PrivacidadPage() {
    return (
        <main className="min-h-screen py-20 bg-background text-foreground">
            <div className="max-w-[800px] mx-auto px-5">
                <h1 className="text-4xl font-bold mb-8 text-primary uppercase">Políticas de Privacidad</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Uso de tus Datos</h2>
                        <p>
                            En Gestor de Partes, valoramos tu confianza. La información personal que proporcionas se utiliza
                            exclusivamente para el procesamiento de tus pedidos, la comunicación sobre el estado de los mismos
                            y la mejora de nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Seguridad de la Información</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas y administrativas avanzadas para proteger tus datos
                            contra acceso no autorizado, pérdida o alteración. No compartimos tu información con terceros
                            para fines comerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Derechos ARCO</h2>
                        <p>
                            Puedes solicitar el Acceso, Rectificación, Cancelación u Oposición del uso de tus datos personales
                            en cualquier momento enviando un correo a privacidad@gestordepartes.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
