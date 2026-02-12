"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        title: "TURBO\nCARGADORES.",
        description: "¡Compra ahora y siente la diferencia! Potencia industrial garantizada para maquinaria pesada.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        action: "VER CATÁLOGO",
        link: "#"
    },
    {
        title: "EXCAVADORAS\nPESADAS.",
        description: "Componentes críticos para excavadoras de alto rendimiento. Mantenemos tu obra en movimiento con refacciones premium.",
        image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        action: "EXPLORAR PARTES",
        link: "#"
    },
    {
        title: "MOTORES\nDIESEL.",
        description: "Motores completos y refacciones internas. Durabilidad extrema para las condiciones industriales más exigentes.",
        image: "https://images.unsplash.com/photo-1635339001026-61427848744b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        action: "VER MOTORES",
        link: "#"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative h-[600px] w-full overflow-hidden bg-black">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-100"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.image}')`,
                            transform: index === current ? "scale(1.1)" : "scale(1.0)"
                        }}
                    ></div>

                    {/* Content */}
                    <div className="relative h-full max-w-[1200px] mx-auto px-5 flex flex-col justify-center">
                        <div className={`transition-all duration-700 delay-300 ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                            <h1 className="text-white text-[56px] md:text-[72px] font-bold mb-5 leading-[1.1] whitespace-pre-line">
                                {slide.title}
                            </h1>
                            <p className="text-white/90 text-lg md:text-xl max-w-[600px] mb-[40px] leading-relaxed">
                                {slide.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="py-4 px-10 border-none rounded-[5px] text-sm font-bold cursor-pointer uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg active:scale-95">
                                    {slide.action}
                                </button>
                                <button className="py-4 px-10 border-2 border-white rounded-[5px] text-sm font-bold cursor-pointer uppercase tracking-wider bg-transparent text-white hover:bg-white/10 transition-colors active:scale-95">
                                    SOPORTE TECNICO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white border border-white/20 hover:bg-primary hover:border-primary transition-all backdrop-blur-sm group"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} className="group-active:scale-90" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white border border-white/20 hover:bg-primary hover:border-primary transition-all backdrop-blur-sm group"
                aria-label="Next slide"
            >
                <ChevronRight size={24} className="group-active:scale-90" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-300 ${index === current
                                ? "w-10 h-2 bg-primary rounded-full"
                                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}

