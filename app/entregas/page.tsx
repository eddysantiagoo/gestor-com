export default function EntregasPage() {
    return (
        <main className="min-h-screen py-20 bg-background text-foreground">
            <div className="max-w-[800px] mx-auto px-5">
                <h1 className="text-4xl font-bold mb-8 text-primary uppercase">Información de Entregas</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Tiempos de Envío</h2>
                        <p>
                            En Gestor de Partes, nos esforzamos por procesar tus pedidos de la manera más rápida posible.
                            Los envíos estándar suelen tardar entre 2 y 5 días hábiles dependiendo de tu ubicación en la República Mexicana.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Costos de Envío</h2>
                        <p>
                            El costo de envío se calcula en base al peso y volumen total de las refacciones seleccionadas,
                            así como el código postal de destino. Podrás ver el total antes de finalizar tu compra.
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>Envíos locales (CDMX y Área Metropolitana): Desde $150 MXN</li>
                            <li>Envíos nacionales: Desde $350 MXN</li>
                            <li>Envíos pesados (Motores, Transmisiones): Cotización especial</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Rastreo de Pedido</h2>
                        <p>
                            Una vez que tu paquete haya sido recolectado por la paquetería, recibirás un correo electrónico
                            con un número de guía para que puedas seguir el trayecto de tu refacción en tiempo real.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
