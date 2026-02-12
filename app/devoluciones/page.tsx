import { RefreshCcw, ChevronRight, AlertCircle, CheckCircle2, XCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function DevolucionesPage() {
    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">Políticas de Devoluciones</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Nuestras Políticas de Devoluciones
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        En Gestor de Partes buscamos la transparencia. Conoce las condiciones y procesos para realizar devoluciones de refacciones.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Key Policies Card */}
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 p-1 bg-primary/10 rounded-full text-primary">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-1">Periodo de Gracia</h3>
                                        <p className="text-muted-foreground text-sm">Cuentas con <strong>7 días calendario</strong> desde la fecha de facturación para solicitar tu devolución.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 p-1 bg-primary/10 rounded-full text-primary">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-1">Estado del Producto</h3>
                                        <p className="text-muted-foreground text-sm">Es indispensable que los repuestos estén en <strong>perfecto estado</strong> y en su empaque original.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 p-1 bg-primary/10 rounded-full text-primary">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-1">Personalizaciones e Importaciones</h3>
                                        <p className="text-muted-foreground text-sm">No se aceptan devoluciones de productos modificados o importados bajo pedido especial.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 rounded-2xl p-6 space-y-6">
                                <h3 className="text-foreground font-bold uppercase text-xs tracking-widest opacity-60">Créditos y Reembolsos</h3>

                                <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border">
                                    <span className="text-sm font-medium">Error de Gestor de Partes</span>
                                    <span className="text-primary font-bold">100% de crédito</span>
                                </div>

                                <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border">
                                    <span className="text-sm font-medium">Error del Cliente</span>
                                    <span className="text-foreground font-bold">80% de crédito</span>
                                </div>

                                <p className="text-[11px] text-muted-foreground italic">
                                    * En devoluciones de dinero se descontará el costo de transacción y comisión bancaria sobre el valor total.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4 text-red-500">
                                <AlertCircle size={24} />
                                <h3 className="text-lg font-bold uppercase tracking-tight">Productos NO aceptados</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Partes eléctricas</div>
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Módulos de Control (ECM)</div>
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Kits No Sellados</div>
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Repuestos solicitados a fábrica</div>
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Productos bajo pedido/armado</div>
                                <div className="flex items-center gap-2"><XCircle size={14} className="text-red-500" /> Componentes de tren de potencia</div>
                            </div>
                        </div>
                    </div>

                    {/* How to initiate section */}
                    <div className="text-center space-y-6 bg-primary/5 rounded-3xl p-10 border border-primary/10">
                        <div className="flex justify-center">
                            <RefreshCcw size={48} className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">¿Cómo iniciar una devolución?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Contacta a tu asesor comercial o comunícate directamente con nuestra central de atención.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:importadoraseverino@gmail.com" className="flex items-center gap-2 py-3 px-8 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all">
                                <Mail size={18} /> importadoraseverino@gmail.com
                            </a>
                            <a href="tel:4481642" className="flex items-center gap-2 py-3 px-8 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all">
                                <Phone size={18} /> PBX: 4481642
                            </a>
                        </div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">Atención: Lunes a Viernes 8:30 a.m. – 5:00 p.m.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

