export default function CallToAction() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¿No encuentras la parte que buscas?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium">
                    Nuestro equipo de expertos te ayuda a localizar cualquier refacción en minutos. Contamos con una red global de proveedores.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="py-4 px-8 bg-foreground text-background font-bold rounded-lg text-lg hover:bg-foreground/90 transition-colors shadow-lg">
                        Contactar a Ventas
                    </button>
                    <button className="py-4 px-8 bg-background text-foreground font-bold rounded-lg text-lg border-2 border-foreground hover:bg-muted transition-colors shadow-lg">
                        WhatsApp Directo
                    </button>
                </div>
            </div>
        </section>
    );
}
