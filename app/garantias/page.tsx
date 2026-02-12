export default function GarantiasPage() {
    return (
        <main className="min-h-screen py-20 bg-background text-foreground">
            <div className="max-w-[800px] mx-auto px-5">
                <h1 className="text-4xl font-bold mb-8 text-primary uppercase">Políticas de Garantía</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Cobertura de Garantía</h2>
                        <p>
                            Todas nuestras refacciones nuevas cuentan con una garantía contra defectos de fabricación.
                            El periodo estándar es de 3 meses, aunque puede extenderse dependiendo del fabricante
                            y el tipo de componente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Exclusiones</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Daños causados por una instalación incorrecta.</li>
                            <li>Mal uso o negligencia en el mantenimiento de la maquinaria.</li>
                            <li>Alteraciones técnicas realizadas por personal no autorizado.</li>
                            <li>Componentes eléctricos dañados por picos de voltaje externos.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Cómo Reclamar tu Garantía</h2>
                        <p>
                            Para iniciar un proceso de garantía, por favor contacta a nuestro equipo de soporte
                            técnico con tu número de orden y una descripción del fallo. Te orientaremos sobre
                            los pasos a seguir para la inspección técnica de la pieza.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
