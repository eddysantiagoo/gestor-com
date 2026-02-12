"use client";

import Image from 'next/image';
import { ModeToggle } from "@/components/mode-toggle";
import { Search, ShoppingCart, User, Globe, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../../../i18n/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'es', name: 'Español', flag: '/flags/colombia.png' },
        { code: 'en', name: 'English', flag: '/flags/united-states.png' },
        { code: 'zh', name: '中文', flag: '/flags/china.png' },
    ];

    const currentLanguage = languages.find(l => l.code === locale)?.name || 'Español';

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <>
            {/* Header */}
            <header className="bg-background text-foreground border-b-[3px] border-primary py-[15px]">
                <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5">
                    {/* Logo */}
                    <div className="flex items-center gap-[5px]">
                        <Link href="/">
                            <div className="flex items-center">
                                {/* Light Mode Logo */}
                                <Image
                                    src="/logo-black.png"
                                    alt="Gestor de Partes Logo"
                                    width={120}
                                    height={40}
                                    className="h-auto w-auto dark:hidden block"
                                    priority
                                />
                                {/* Dark Mode Logo */}
                                <Image
                                    src="/logo.png"
                                    alt="Gestor de Partes Logo"
                                    width={120}
                                    height={40}
                                    className="h-auto w-auto hidden dark:block"
                                    priority
                                />
                            </div>

                        </Link>
                    </div>

                    {/* Search Container */}
                    <div className="flex-grow max-w-[500px] mx-10 relative">
                        <input
                            type="text"
                            className="w-full py-[10px] pr-[120px] pl-5 border border-input rounded-[25px] text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder={t('search_placeholder')}
                        />
                        <button className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-primary text-primary-foreground border-none py-2 px-[25px] rounded-[20px] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                            <Search size={16} /> {t('search_button')}
                        </button>
                    </div>

                    {/* Header Actions */}
                    <div className="flex items-center gap-[25px]">
                        <Link href="#" className="text-foreground no-underline text-sm flex items-center gap-[5px] hover:text-primary transition-colors">
                            <User size={18} /> {t('login')}
                        </Link>
                        <Link href="#" className="text-foreground no-underline text-sm flex items-center gap-[5px] hover:text-primary transition-colors">
                            <ShoppingCart size={18} />
                        </Link>
                        <ModeToggle />
                    </div>

                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-background py-3 shadow-[0_2px_5px_rgba(0,0,0,0.1)] dark:shadow-none border-b border-border text-foreground">
                <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5">
                    <ul className="flex gap-[30px] list-none p-0 m-0 items-center">
                        <li>
                            <Link href="https://tienda.gestordepartes.com/" target='_blank' className="text-foreground no-underline text-sm font-medium hover:text-primary transition-colors flex items-center">
                                {t('store')}
                            </Link>
                        </li>
                        <li>
                            <Link href="https://catalogo.gestordepartes.com/" target='_blank' className="text-foreground no-underline text-sm font-medium hover:text-primary transition-colors flex items-center">
                                {t('catalogs')}
                            </Link>
                        </li>
                        {/* Dropdown Menu */}
                        <li className="relative group flex items-center">
                            <span className="text-foreground no-underline text-sm font-medium cursor-pointer flex items-center gap-1 group-hover:text-primary transition-colors">
                                {t('about')} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                            </span>

                            {/* Dropdown Content */}
                            <div className="absolute left-0 top-[100%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <ul className="bg-background border border-border shadow-lg rounded-lg py-2 min-w-[220px]">
                                    <li>
                                        <Link href="/nosotros" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 mb-1 font-bold">
                                            {t('about_link')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/entregas" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                                            {t('delivery')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacidad" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                                            {t('privacy')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terminos" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                                            {t('terms')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/devoluciones" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                                            {t('returns')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/garantias" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                                            {t('warranty')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/contacto" className="text-foreground no-underline text-sm font-medium hover:text-primary transition-colors flex items-center">
                                {t('contact')}
                            </Link>
                        </li>
                    </ul>

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-[5px] text-sm cursor-pointer text-foreground hover:text-primary transition-colors outline-none">
                                <Image
                                    src={languages.find(l => l.code === locale)?.flag || '/flags/colombia.png'}
                                    alt={currentLanguage}
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                {currentLanguage} <ChevronDown size={12} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background border-border shadow-xl">
                            {languages.map((lang) => (
                                <DropdownMenuItem
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`cursor-pointer ${locale === lang.code ? 'text-primary font-bold' : ''}`}
                                >
                                    <Image
                                        src={lang.flag}
                                        alt={lang.name}
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    {lang.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
    );
}
