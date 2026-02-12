export default function TerminosPage() {
    return (
        <main className="min-h-screen py-20 bg-background text-foreground">
            <div className="max-w-[800px] mx-auto px-5">
                <h1 className="text-4xl font-bold mb-8 text-primary uppercase">Términos & Condiciones</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Aceptación de Términos</h2>
                        <p>
                            Al acceder y realizar una compra en este sitio web, aceptas quedar vinculado por estos
                            términos y condiciones. Si no estás de acuerdo con alguna parte de los términos,
                            no deberás utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Disponibilidad de Productos</h2>
                        <p>
                            Hacemos nuestro mejor esfuerzo por mantener el inventario actualizado. Sin embargo,
                            la disponibilidad de las refacciones puede variar sin previo aviso. En caso de que un
                            producto no esté disponible tras tu compra, te contactaremos inmediatamente para
                            ofrecerte una alternativa o el reembolso total.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Precios y Pagos</h2>
                        <p>
                            Todos los precios están expresados en Moneda Nacional (MXN) y están sujetos a cambios.
                            Los pagos se procesan a través de plataformas seguras y no almacenamos información
                            de tus tarjetas bancarias.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
