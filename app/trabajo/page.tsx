"use client";

import { useState } from "react";
import { ChevronRight, Send, User, IdCard, Mail, Phone, MessageSquare, Building2, MapPin, Globe, CheckCircle2, Briefcase } from "lucide-react";
import Link from "next/link";

export default function TrabajoPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [area, setArea] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset after 5 seconds to allow trying again in simulation
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">Trabaja con Nosotros</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Trabaja con Nosotros
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                        Únete a nuestro equipo de expertos o regístrate como parte de nuestra red de proveedores estratégicos.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {isSubmitted ? (
                        <div className="bg-card border-2 border-primary/20 rounded-[2rem] p-12 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground mb-4 uppercase">¡Solicitud Enviada!</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Gracias por tu interés en Gestor de Partes. Hemos recibido tu información y nuestro equipo la revisará a la brevedad.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="py-3 px-8 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg text-sm"
                            >
                                ENVIAR OTRA SOLICITUD
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-xl">
                            <div className="bg-primary/10 p-8 border-b border-border">
                                <h2 className="text-xl font-bold text-foreground uppercase tracking-wider flex items-center gap-3">
                                    <Briefcase className="text-primary" size={24} /> Formulario de Registro
                                </h2>
                            </div>

                            <div className="p-8 md:p-12 space-y-8">
                                {/* Informacion Basica */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 col-span-full">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            Área de Interés <span className="text-primary">*</span>
                                        </label>
                                        <select
                                            required
                                            value={area}
                                            onChange={(e) => setArea(e.target.value)}
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="Área de Proveedores">Área de Proveedores</option>
                                            <option value="Áreas Administrativas">Áreas Administrativas</option>
                                            <option value="Ventas / Comercial">Ventas / Comercial</option>
                                            <option value="Operaciones / Logística">Operaciones / Logística</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            <User size={14} /> Nombre Completo <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ej. Juan Pérez"
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            <IdCard size={14} /> NIT / Cédula <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="N° de Identificación"
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            <Mail size={14} /> Correo Electrónico <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="correo@ejemplo.com"
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                            <Phone size={14} /> Celular <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+57 300 000 0000"
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Conditional Fields for Suppliers */}
                                {area === "Área de Proveedores" && (
                                    <div className="pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Información de la Empresa</h3>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Building2 size={14} /> Nombre de la Empresa
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Razón Social"
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Phone size={14} /> Teléfono Fijo
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="Teléfono de contacto"
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Globe size={14} /> Departamento
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Ej. Antioquia"
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <MapPin size={14} /> Ciudad
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Ej. Medellín"
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <MapPin size={14} /> Dirección
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Dirección física"
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                Régimen
                                            </label>
                                            <select
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                                            >
                                                <option value="">Seleccione Régimen</option>
                                                <option value="Común">Común</option>
                                                <option value="Simplificado">Simplificado</option>
                                                <option value="Gran Contribuyente">Gran Contribuyente</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                        <MessageSquare size={14} /> Observación
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Cuéntanos más sobre tu perfil o empresa..."
                                        className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest text-sm group"
                                    >
                                        ENVIAR SOLICITUD <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-muted/50 p-6 text-center border-t border-border">
                                <p className="text-xs text-muted-foreground">
                                    ¿Necesitas ayuda? Contáctanos a <span className="text-foreground font-bold underline">contacto@gestordepartes.com</span> o al <span className="text-foreground font-bold">(+57) 301 492 2306</span>
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
