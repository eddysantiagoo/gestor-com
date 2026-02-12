import { ShieldCheck, Scale, Ban, User, Download, ChevronRight, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

const engranajesData = [
    { component: "REDUCTORES", brand: "OEM", days: 180 },
    { component: "PIÑONES DE ATAQUE", brand: "OEM", days: 180 },
    { component: "TORNAMESAS", brand: "BERC / H / ITR", days: 180 },
    { component: "CARDANES", brand: "OEM", days: 180 },
    { component: "CARRIERS Y PIÑONES INTERNOS", brand: "DGM / ITR", days: 90 },
];

const motorData = [
    { component: "BOMBAS PRINCIPALES", brand: "TODAS", days: 90 },
    { component: "INYECTORES", brand: "TODAS", days: 90 },
    { component: "RELES Y TUBERÍAS", brand: "TODAS", days: 90 },
    { component: "LINER KIT SUS COMPONENTES", brand: "TODAS", days: 180 },
    { component: "BLOQUES", brand: "TODAS", days: 90 },
    { component: "CULATAS", brand: "TODAS", days: 180 },
    { component: "VALVULAS Y GUIAS", brand: "TODAS", days: 180 },
    { component: "CASQUETES", brand: "TODAS", days: 180 },
    { component: "TURBO CARGADORES", brand: "TODAS", days: 120 },
    { component: "COMPRESORES A/A", brand: "TODAS", days: 90 },
    { component: "ENFRIADORES", brand: "TODAS", days: 180 },
    { component: "TOBERAS DE INYECCIÓN", brand: "TODAS", days: 90 },
];

const electricoData = [
    { component: "MOTORES", brand: "TODAS", days: 0 },
    { component: "COMPUTADORES", brand: "TODAS", days: 0 },
    { component: "CABLEADOS", brand: "TODAS", days: 0 },
    { component: "INTERRUPTORES", brand: "TODAS", days: 0 },
    { component: "SENSORES", brand: "TODAS", days: 0 },
    { component: "MONITORES", brand: "TODAS", days: 0 },
    { component: "ALTERNADORES", brand: "TODAS", days: 0 },
    { component: "ARRANQUES", brand: "TODAS", days: 0 },
    { component: "ELECTROVALVULAS", brand: "TODAS", days: 0 },
];

const rodajeData = [
    { component: "CARRILES", brand: "TODAS", days: 120 },
    { component: "SPROKET", brand: "TODAS", days: 120 },
    { component: "RUEDAS TENSORAS", brand: "TODAS", days: 120 },
    { component: "CADENAS", brand: "TODAS", days: 120 },
    { component: "COMPONENTES DE CADENA", brand: "TODAS", days: 120 },
    { component: "ZAPATAS", brand: "TODAS", days: 120 },
];

const desgasteData = [
    { component: "CUCHILLAS", brand: "TODAS", days: 15 },
    { component: "ESQUINEROS", brand: "TODAS", days: 15 },
    { component: "DIENTES", brand: "TODAS", days: 15 },
    { component: "BASES DE DIENTES", brand: "TODAS", days: 15 },
    { component: "ELEMENTOS DE FIJACIÓN", brand: "TODAS", days: 15 },
    { component: "BALDES", brand: "TODAS", days: 15 },
    { component: "BUJES", brand: "TODAS", days: 15 },
    { component: "PASADORES", brand: "TODAS", days: 15 },
    { component: "H DE BALDE", brand: "TODAS", days: 15 },
    { component: "BIELAS", brand: "TODAS", days: 15 },
];

const otrosData = [
    { component: "SILLAS", brand: "TODAS", days: 0 },
    { component: "EMPAQUETADURAS, SELLOS Y ORINGS", brand: "TODAS", days: 0 },
    { component: "VIDRIOS", brand: "TODAS", days: 0 },
    { component: "CHAPAS Y MANIJAS", brand: "TODAS", days: 0 },
    { component: "LUJOS", brand: "TODAS", days: 0 },
];

export default function GarantiasPage() {
    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">Políticas de Garantía</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Política de Garantía de Repuestos
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        En GESTOR DE PARTES S.A.S es muy importante dar a conocer a nuestros clientes las políticas y términos de garantías de los repuestos e insumos adquiridos. Aquí encontrarás las condiciones de cobertura y periodos según el componente.
                    </p>
                </div>

                {/* General Policy Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                    {/* Vigencia Card */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="text-primary" size={24} />
                            <h2 className="text-xl font-bold uppercase tracking-wide">Vigencia de la Garantía</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            La vigencia de la garantía comienza desde el momento en el que el repuesto es entregado al cliente.
                            El tiempo varía de acuerdo al tipo de repuesto adquirido (ver tablas de periodos específicos abajo).
                        </p>
                    </div>

                    {/* Covered Card */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="text-primary" size={24} />
                            <h2 className="text-xl font-bold uppercase tracking-wide">Conceptos Cubiertos</h2>
                        </div>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={18} /> Daños originados por defectos de fabricación del fabricante y/o defectos de material.</li>
                            <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={18} /> Mano de obra requerida para la evaluación de piezas afectadas (si aplica garantía).</li>
                        </ul>
                    </div>

                    {/* Excluded Card */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-red-500 transition-all duration-300 shadow-sm lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Ban className="text-red-500" size={24} />
                            <h2 className="text-xl font-bold uppercase tracking-wide">Conceptos Excluidos</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-muted-foreground">
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Lucros cesantes o pérdidas de producción.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Costos de envío/regreso a instalaciones.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Desplazamientos y mano de obra para inspección en campo.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Costos de laboratorios para evaluación.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Daños por instalación incorrecta o mal uso.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Manipulación incorrecta o almacenamiento inadecuado.</div>
                            <div className="flex gap-2"><AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" /> Uso de fluidos no especificados por el fabricante.</div>
                        </div>
                    </div>
                </div>

                {/* Responsibilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                            <Scale size={24} /> Responsabilidades de Gestor de Partes
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Reparar o reemplazar las partes que hayan fallado por defectos de material y/o mano de obra dentro del periodo establecido, siempre que el cliente haya cumplido sus requisitos. Informaremos claramente los motivos si una garantía no es aprobada.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                            <User size={24} /> Responsabilidades del Cliente
                        </h2>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Suministrar información clara y ordenada del equipo de instalación.</li>
                            <li>• No manipular el componente afectado.</li>
                            <li>• Enviar piezas a nuestras instalaciones para análisis técnico.</li>
                            <li>• Reportar la falla inmediatamente al asesor comercial.</li>
                            <li>• Repuestos eléctricos: deben ser instalados por técnicos certificados.</li>
                        </ul>
                    </section>
                </div>

                {/* Warranty Period Tables */}
                <div className="space-y-20 mb-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-foreground">Periodos de Garantía</h2>
                        <p className="text-muted-foreground mt-2">Detalles por categoría y tipo de repuesto</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {/* Table 1: Engranajes */}
                        <WarrantyTable
                            title="Engranajes y Elementos de Transmisión"
                            data={engranajesData}
                        />

                        {/* Table 2: Motores */}
                        <WarrantyTable
                            title="Componentes de Motor y Sistema de Inyección"
                            data={motorData}
                        />

                        {/* Table 3: Tren de Rodaje & Desgaste */}
                        <div>
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-primary">Tren de Rodaje</h3>
                            </div>
                            <WarrantyTable
                                title=""
                                data={rodajeData}
                            />
                            <div className="mt-8 mb-4">
                                <h3 className="text-xl font-bold text-primary">Material de Desgaste</h3>
                            </div>
                            <WarrantyTable
                                title=""
                                data={desgasteData}
                            />
                        </div>

                        {/* Table 4: Eléctricos */}
                        <WarrantyTable
                            title="Componentes Eléctricos"
                            data={electricoData}
                        />

                        {/* Table 5: Otros */}
                        <WarrantyTable
                            title="Otros"
                            data={otrosData}
                        />
                    </div>
                </div>

                {/* Footer / Download */}
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Consulte Nuestras Políticas Completas</h3>
                    <p className="text-muted-foreground mb-8">Contamos con manuales detallados para su descarga y consulta offline.</p>
                    <a
                        href="/assets/images/politicas_de_garantia_2022.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 py-4 px-10 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
                    >
                        <Download size={20} /> DESCARGAR PDF DE POLÍTICAS
                    </a>
                </div>
            </div>
        </main>
    );
}

function WarrantyTable({ title, data }: { title: string, data: any[] }) {
    return (
        <div className="space-y-4">
            {title && <h3 className="text-xl font-bold text-primary">{title}</h3>}
            <div className="overflow-hidden border border-border rounded-xl shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 text-foreground uppercase text-[11px] tracking-widest font-bold">
                        <tr>
                            <th className="px-6 py-4">Componente</th>
                            <th className="px-6 py-4">Marca</th>
                            <th className="px-6 py-4 text-center">Tiempo (Días)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {data.map((item, idx) => (
                            <tr key={idx} className="hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4 font-medium text-foreground">{item.component}</td>
                                <td className="px-6 py-4 text-muted-foreground">{item.brand}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${item.days > 0 ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"
                                        }`}>
                                        {item.days}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

