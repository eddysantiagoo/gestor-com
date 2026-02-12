import { ChevronRight, Truck, Cpu, UserCheck, Wrench, Settings, RotateCcw, Activity } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function NosotrosPage() {
    const t = useTranslations('Nosotros');

    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">{t('title')}</span>
                </nav>

                {/* Hero Section with Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight leading-none">
                            {t('title').split(' ')[0]} <br /> <span className="text-primary tracking-widest">{t('title').split(' ')[1]}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t('subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-primary rounded-full"></div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border group">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Xhx5Qh3Ps14"
                            title="Presentación Gestor de Partes"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>

                {/* Core Values / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <FeatureCard
                        icon={<Truck size={36} />}
                        title={t('logistics_title')}
                        description={t('logistics_desc')}
                    />
                    <FeatureCard
                        icon={<Cpu size={36} />}
                        title={t('tech_title')}
                        description={t('tech_desc')}
                    />
                    <FeatureCard
                        icon={<UserCheck size={36} />}
                        title={t('experts_title')}
                        description={t('experts_desc')}
                    />
                </div>

                {/* Services Grid Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase tracking-wider">
                        {t('services_title')}
                    </h2>
                    <p className="text-muted-foreground text-lg">{t('services_subtitle')}</p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <ServiceCard
                        icon={<Activity size={24} />}
                        title={t('hydraulics_title')}
                        description={t('hydraulics_desc')}
                    />
                    <ServiceCard
                        icon={<Settings size={24} />}
                        title={t('diesel_title')}
                        description={t('diesel_desc')}
                    />
                    <ServiceCard
                        icon={<RotateCcw size={24} />}
                        title={t('swing_title')}
                        description={t('swing_desc')}
                    />
                    <ServiceCard
                        icon={<Wrench size={24} />}
                        title={t('travel_title')}
                        description={t('travel_desc')}
                    />
                </div>

                {/* Bottom Banner Placeholder/CTA */}
                <div className="relative rounded-[2rem] overflow-hidden bg-primary/5 border border-primary/10 p-12 text-center group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <Settings size={200} className="animate-spin-slow" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-tighter">{t('commitment_title')}</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                        {t('commitment_desc')}
                    </p>
                    <Link
                        href="https://wa.me/573014922306"
                        className="inline-flex items-center gap-2 py-4 px-12 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl hover:-translate-y-1"
                    >
                        {t('contact_now')}
                    </Link>
                </div>
            </div>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-muted/30 border border-border rounded-[2rem] p-6 hover:bg-card hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
            <div className="p-3 bg-background rounded-xl border border-border text-primary mb-4 shadow-sm">
                {icon}
            </div>
            <h4 className="text-foreground font-bold text-sm mb-3 uppercase tracking-tighter px-2">
                {title}
            </h4>
            <div className="w-8 h-[2px] bg-primary/30 mb-4 rounded-full"></div>
            <p className="text-[13px] text-muted-foreground leading-snug">
                {description}
            </p>
        </div>
    );
}
