import { Box, Truck, ShieldCheck, Headset } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function WhyChooseUs() {
    const t = useTranslations('WhyChooseUs');

    const features = [
        {
            title: t('inv_title'),
            description: t('inv_desc'),
            icon: <Box size={48} className="text-primary" />
        },
        {
            title: t('shipping_title'),
            description: t('shipping_desc'),
            icon: <Truck size={48} className="text-primary" />
        },
        {
            title: t('quality_title'),
            description: t('quality_desc'),
            icon: <ShieldCheck size={48} className="text-primary" />
        },
        {
            title: t('support_title'),
            description: t('support_desc'),
            icon: <Headset size={48} className="text-primary" />
        }
    ];

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">{t('title')}</h2>
                    <div className="w-[60px] h-[3px] bg-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">{t('desc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:border-primary transition-colors duration-300">
                            <div className="mb-4 p-3 bg-muted rounded-full border border-border">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
