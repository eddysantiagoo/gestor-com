import { ShieldCheck, RefreshCw, FileText, AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from 'next-intl';

export default function TerminosPage() {
    const t = useTranslations('Legal');

    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">{t('terms_title')}</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        {t('terms_title')}
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                        {t('terms_subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Returns Policy Card */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <RefreshCw size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">{t('returns_policy_title')}</h2>
                        </div>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                                <p className="font-semibold text-foreground">Important:</p>
                                <p>{t('returns_policy_important')}</p>
                            </div>

                            <ul className="space-y-3 list-disc pl-5 marker:text-primary">
                                {t.raw('returns_policy_rules').map((rule: string, idx: number) => (
                                    <li key={idx}>{rule}</li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <p className="text-foreground font-bold mb-2 uppercase text-sm">Productos no aceptados:</p>
                                <div className="grid grid-cols-1 gap-2 text-sm">
                                    <div className="flex gap-2 items-start"><AlertTriangle size={14} className="mt-1 flex-shrink-0" /> Partes eléctricas y ECM (Módulos de Control).</div>
                                    <div className="flex gap-2 items-start"><AlertTriangle size={14} className="mt-1 flex-shrink-0" /> Productos modificados o importados a pedido.</div>
                                    <div className="flex gap-2 items-start"><AlertTriangle size={14} className="mt-1 flex-shrink-0" /> Kits no sellados o componentes de tren de potencia.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Warranty Policy Card */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <ShieldCheck size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">{t('warranty_policy_title')}</h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <section>
                                <p>{t('warranty_validity')}</p>
                            </section>

                            <section>
                                <p>{t('warranty_coverage')}</p>
                            </section>

                            <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                                <h3 className="text-primary font-bold uppercase text-sm mb-2">Sistemas de Inyección Diesel</h3>
                                <p className="text-xs">Garantía de 3 meses. El derecho de retracto es de 5 días máximo. El sistema debe estar libre de suciedad y haber sido limpiado (tanque, tuberías, filtros).</p>
                            </section>
                        </div>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-16 bg-muted/20 border border-border rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4 text-primary">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t('initiate_process')}</h3>
                    <p className="text-muted-foreground mb-6">Contáctanos vía PBX o envía un correo detallando los motivos de tu solicitud.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:ventas@gestordepartes.com" className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all">
                            {t('send_email')}
                        </a>
                        <a href="tel:4481642" className="bg-foreground text-background font-bold py-2 px-6 rounded-lg hover:bg-foreground/90 transition-all">
                            {t('call_support')}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}


