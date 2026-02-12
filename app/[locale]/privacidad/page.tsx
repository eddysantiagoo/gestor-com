import { Shield, UserCheck, Mail, Cookie, Link as LinkIcon, Lock, Eye, ChevronRight } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from 'next-intl';

export default function PrivacidadPage() {
    const t = useTranslations('Legal');

    return (
        <main className="min-h-screen py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">{t('privacy_title')}</span>
                </nav>

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        {t('privacy_title')}
                    </h1>
                    <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                        {t('privacy_subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Declaración de Privacidad */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Shield size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">{t('privacy_statement_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('privacy_statement_desc')}
                        </p>
                    </div>

                    {/* Información recogida */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <UserCheck size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">{t('info_collected_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {t('info_collected_desc')}
                        </p>
                    </div>

                    {/* Uso de la información */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Mail size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">{t('data_use_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {t('data_use_desc')}
                        </p>
                    </div>

                    {/* Cookies */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Cookie size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">{t('cookies_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('cookies_desc')}
                        </p>
                    </div>

                    {/* Enlaces a Terceros */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <LinkIcon size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">{t('external_links_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {t('external_links_desc')}
                        </p>
                    </div>

                    {/* Control de información */}
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Lock size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">{t('control_info_title')}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('control_info_desc')}
                        </p>
                    </div>

                    {/* Contacto Transparencia */}
                    <div className="group bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg lg:col-span-3 mt-4">
                        <Eye size={40} className="mb-4" />
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">{t('transparency_title')}</h3>
                        <p className="max-w-3xl mb-0 opacity-90">
                            {t('transparency_desc')}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}


