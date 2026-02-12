"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ModeToggle } from "@/components/mode-toggle";
import { Search, ShoppingCart, User, Globe, ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../../../i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'es', name: 'Español', flag: '/flags/colombia.png' },
        { code: 'en', name: 'English', flag: '/flags/united-states.png' },
        { code: 'zh', name: '中文', flag: '/flags/china.png' },
    ];

    const currentLanguage = languages.find(l => l.code === locale)?.name || 'Español';

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const navLinks = [
        { href: "https://tienda.gestordepartes.com/", label: t('store'), external: true },
        { href: "https://catalogo.gestordepartes.com/", label: t('catalogs'), external: true },
        { href: "/contacto", label: t('contact'), external: false },
    ];

    const dropdownLinks = [
        { href: "/nosotros", label: t('about_link'), bold: true },
        { href: "/entregas", label: t('delivery') },
        { href: "/privacidad", label: t('privacy') },
        { href: "/terminos", label: t('terms') },
        { href: "/devoluciones", label: t('returns') },
        { href: "/garantias", label: t('warranty') },
    ];

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}
        >
            {/* Top Bar (Main Header) */}
            <header className={`bg-background/80 backdrop-blur-md text-foreground border-b-2 border-primary py-3 transition-all duration-500 ${scrolled ? 'py-2 border-opacity-50' : 'py-4'}`}>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5 gap-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center flex-shrink-0"
                    >
                        <Link href="/">
                            <Image
                                src="/logo-black.png"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto dark:hidden"
                                priority
                            />
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto hidden dark:block"
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-grow max-w-[500px] relative items-center group">
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            className="w-full py-2.5 pr-32 pl-5 border border-input rounded-full text-sm bg-background/50 focus:bg-background transition-all outline-none ring-primary/20 focus:ring-4"
                            placeholder={t('search_placeholder')}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute right-1 top-1 bottom-1 bg-primary text-primary-foreground px-6 rounded-full font-bold text-xs flex items-center gap-2"
                        >
                            <Search size={14} /> <span className="hidden lg:inline">{t('search_button')}</span>
                        </motion.button>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="relative">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <ShoppingCart size={20} />
                            </Link>
                        </motion.div>
                        <Link href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group">
                            <div className="p-2 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                                <User size={18} />
                            </div>
                            <span className="hidden lg:inline">{t('login')}</span>
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-4">
                        <ModeToggle />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 bg-primary/10 rounded-lg text-primary"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Desktop Navigation */}
            <nav className={`bg-background/90 backdrop-blur-md hidden md:block py-2 border-b border-border transition-all duration-300 ${scrolled ? 'translate-y-[-2px] opacity-95' : ''}`}>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5">
                    <ul className="flex gap-8 items-center list-none p-0 m-0">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    target={link.external ? "_blank" : "_self"}
                                    className="relative text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1 group"
                                >
                                    {link.label}
                                    {link.external && <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0"
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                </Link>
                            </li>
                        ))}

                        {/* Dropdown with Framer Motion */}
                        <li className="relative group p-0">
                            <motion.button
                                className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors group h-full py-2"
                            >
                                {t('about')} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </motion.button>

                            <div className="absolute left-0 top-full pt-2 perspective-1000 hidden group-hover:block w-[240px]">
                                <motion.ul
                                    initial={{ opacity: 0, y: 10, rotateX: -10 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    className="bg-background border border-border shadow-2xl rounded-xl p-2 overflow-hidden"
                                >
                                    {dropdownLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={`block px-4 py-2.5 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-all ${link.bold ? 'font-bold border-b border-border/50 mb-1' : 'text-muted-foreground'}`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        </li>
                    </ul>

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-2 py-1.5 px-3 bg-muted/50 rounded-lg text-xs font-bold cursor-pointer hover:bg-muted transition-colors border border-transparent hover:border-border outline-none"
                            >
                                <Image
                                    src={languages.find(l => l.code === locale)?.flag || '/flags/colombia.png'}
                                    alt={currentLanguage}
                                    width={18}
                                    height={18}
                                    className="rounded-sm shadow-sm"
                                />
                                {currentLanguage}
                                <ChevronDown size={12} className="opacity-50" />
                            </motion.div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-border shadow-2xl p-1 rounded-xl w-40">
                            {languages.map((lang) => (
                                <DropdownMenuItem
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${locale === lang.code ? 'bg-primary/10 text-primary font-bold' : ''}`}
                                >
                                    <Image
                                        src={lang.flag}
                                        alt={lang.name}
                                        width={18}
                                        height={18}
                                        className="rounded-sm shadow-sm"
                                    />
                                    <span className="text-xs">{lang.name}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1] md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-full right-0 w-[85%] max-w-sm h-[calc(100vh-64px)] bg-background border-l border-border shadow-2xl p-6 md:hidden overflow-y-auto"
                        >
                            {/* Mobile Search */}
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    className="w-full py-3 px-5 border border-input rounded-xl text-sm bg-muted focus:bg-background outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t('search_placeholder')}
                                />
                                <Search className="absolute right-4 top-3.5 text-muted-foreground" size={18} />
                            </div>

                            {/* Mobile Links */}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2">{t('store')}</p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl hover:bg-primary/5 transition-colors group"
                                            >
                                                <span className="font-bold">{link.label}</span>
                                                <ChevronDown size={18} className="rotate-[-90deg] opacity-30 group-hover:opacity-100" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2">{t('about')}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {dropdownLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="p-3 bg-muted/30 rounded-xl text-xs font-semibold hover:border-primary border border-transparent transition-all"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Actions */}
                                <div className="pt-6 border-t border-border flex flex-col gap-3">
                                    <Link href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg">
                                        <User size={18} /> {t('login')}
                                    </Link>
                                    <div className="flex gap-2">
                                        <div className="flex-grow p-4 bg-muted text-center rounded-2xl text-xs font-bold flex items-center justify-center gap-2">
                                            <ShoppingCart size={18} className="text-primary" /> Cart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>
    );
}
