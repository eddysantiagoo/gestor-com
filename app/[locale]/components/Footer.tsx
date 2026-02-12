import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/navigation';
import Image from 'next/image';
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const t = useTranslations('Footer');
    const h = useTranslations('Header');

    return (
        <>
            <footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[20px] px-5 relative mt-auto">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
                        {/* Logo Section */}
                        <div className="pr-5">
                            <div className="flex items-center gap-[5px] mb-5">
                                <div>
                                    <Image
                                        src="/logo.png"
                                        alt="Gestor de Partes Logo"
                                        width={120}
                                        height={40}
                                        className="h-auto w-auto"
                                    />
                                </div>
                            </div>
                            <p className="text-[#999] text-[13px] leading-[1.6] mt-[15px]">
                                {t('slogan')}
                            </p>
                        </div>

                        {/* Productos Column */}
                        <div>
                            <h3 className="text-[14px] font-bold mb-5 uppercase tracking-[1px]">{t('products')}</h3>
                            <ul className="list-none p-0 m-0 space-y-3">
                                <li><Link href="https://tienda.gestordepartes.com/es/categories/turbos/products" target="_blank" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{t('turbos')}</Link></li>
                                <li><Link href="https://tienda.gestordepartes.com/es/categories/inyectores/products" target="_blank" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{t('injectors')}</Link></li>
                                <li><Link href="https://tienda.gestordepartes.com/es/categories/motor/products" target="_blank" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{t('motor_parts')}</Link></li>
                            </ul>
                        </div>

                        {/* Compañía Column */}
                        <div>
                            <h3 className="text-[14px] font-bold mb-5 uppercase tracking-[1px]">{t('company')}</h3>
                            <ul className="list-none p-0 m-0 space-y-3">
                                <li><Link href="/nosotros" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{h('about_link')}</Link></li>
                                <li><Link href="/contacto" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{h('contact')}</Link></li>
                                <li><Link href="/privacidad" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{h('privacy')}</Link></li>
                                <li><Link href="/terminos" className="text-[#999] no-underline text-[13px] hover:text-primary transition-colors">{h('terms')}</Link></li>
                            </ul>
                        </div>

                        {/* Contacto Column */}
                        <div>
                            <h3 className="text-[14px] font-bold mb-5 uppercase tracking-[1px]">{t('contact')}</h3>
                            <div className="flex items-center gap-[10px] mb-3 text-[#999] text-[13px]">
                                <Mail size={16} />
                                <span>contacto@gestordepartes.com</span>
                            </div>
                            <div className="flex items-center gap-[10px] mb-3 text-[#999] text-[13px]">
                                <Phone size={16} />
                                <span>+57 301 4922306</span>
                            </div>
                            <div className="flex flex-col gap-2 text-[#999] text-[13px]">
                                <div className="flex items-start gap-[10px]">
                                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                                    <span>{t('address')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-[#333] pt-[20px] text-center">
                        <p className="text-[#666] text-[12px]">
                            &copy; 2026 Gestor de Partes. {t('rights')}
                        </p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/573014922306"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-transform hover:scale-110 z-[1000]"
                title={t('whatsapp_title')}
            >
                <svg viewBox="0 0 32 32" className="w-[35px] h-[35px] fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.607 2.139 8.064L.07 31.93l8.066-2.113A15.934 15.934 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.223 22.707c-.348.978-2.018 1.79-2.91 1.902-.773.095-1.772.139-2.86-.178-.657-.191-1.5-.445-2.578-.872-4.518-1.791-7.465-6.357-7.69-6.651-.217-.294-1.831-2.437-1.831-4.648 0-2.212 1.16-3.298 1.571-3.748.412-.45.899-.562 1.199-.562.3 0 .6.005.863.016.276.012.648-.105.983.751.348.887 1.187 2.897 1.29 3.106.104.209.173.452.035.746-.138.294-.208.477-.415.734-.208.257-.436.575-.624.772-.207.218-.423.453-.182.887.242.435 1.073 1.77 2.303 2.866 1.583 1.41 2.918 1.849 3.331 2.058.412.209.651.174.89-.104.242-.278.99-1.157 1.254-1.556.264-.399.528-.333.89-.2.363.134 2.305 1.087 2.7 1.287.398.2.663.3.762.469.099.169.099.978-.249 1.956z" />
                </svg>
            </a>
        </>
    );
}
