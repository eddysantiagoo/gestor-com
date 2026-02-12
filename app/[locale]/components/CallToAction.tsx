import { useTranslations } from 'next-intl';

export default function CallToAction() {
    const t = useTranslations('CallToAction');

    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t('title')}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium">
                    {t('desc')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="py-4 px-8 bg-foreground text-background font-bold rounded-lg text-lg hover:bg-foreground/90 transition-colors shadow-lg">
                        {t('contact_sales')}
                    </button>
                    <button className="py-4 px-8 bg-background text-foreground font-bold rounded-lg text-lg border-2 border-foreground hover:bg-muted transition-colors shadow-lg">
                        {t('whatsapp_direct')}
                    </button>
                </div>
            </div>
        </section>
    );
}
