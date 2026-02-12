export default function Hero() {
    return (
        <section
            className="relative text-white py-[100px] px-5 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` // Using a placeholder image related to heavy machinery/industry
            }}
        >
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-[56px] font-bold mb-5 leading-[1.1]">
                    TURBO<br />CARGADORES.
                </h1>
                <p className="text-base max-w-[500px] mb-[30px] leading-relaxed">
                    ¡Compra ahora y siente la diferencia! Potencia industrial garantizada para maquinaria pesada.
                </p>
                <div className="flex gap-[15px]">
                    <button className="py-3 px-[30px] border-none rounded-[5px] text-sm font-bold cursor-pointer uppercase tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                        VER CATÁLOGO
                    </button>
                    <button className="py-3 px-[30px] border-2 border-white rounded-[5px] text-sm font-bold cursor-pointer uppercase tracking-wider bg-transparent text-white hover:bg-white/10 transition-colors">
                        SOPORTE TECNICO
                    </button>
                </div>
            </div>
        </section>
    );
}
