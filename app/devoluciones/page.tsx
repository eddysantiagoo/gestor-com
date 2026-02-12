export default function DevolucionesPage() {
    return (
        <main className="min-h-screen py-20 bg-background text-foreground">
            <div className="max-w-[800px] mx-auto px-5">
                <h1 className="text-4xl font-bold mb-8 text-primary uppercase">Políticas de Devoluciones</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Plazo de Devolución</h2>
                        <p>
                            Cuentas con un periodo de 7 días naturales a partir de la recepción de tu producto
                            para solicitar una devolución, siempre y cuando la pieza no haya sido instalada o
                            presente marcas de uso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Condiciones del Producto</h2>
                        <p>
                            Para que la devolución sea válida, el producto debe ser devuelto en su empaque original
                            y con todas sus etiquetas y accesorios. No se aceptan devoluciones en componentes
                            eléctricos una vez abiertos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Proceso de Reembolso</h2>
                        <p>
                            Una vez que recibamos el producto de vuelta y verifiquemos su estado, procesaremos tu
                            reembolso en un plazo de 3 a 5 días hábiles a través del mismo método de pago que
                            utilizaste.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
