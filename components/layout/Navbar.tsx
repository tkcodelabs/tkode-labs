'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#stack', label: 'Stack' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#contato', label: 'Contato' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav
                id="topnav"
                className={`fixed top-0 left-0 right-0 z-50 py-3 px-6 transition-all duration-300 ${scrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-sm'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
                            style={{ background: 'linear-gradient(135deg, var(--navy), var(--blue))' }}
                        >
                            <span className="text-white font-extrabold text-xs" style={{ fontFamily: 'Syne' }}>TK</span>
                        </div>
                        <div>
                            <div
                                className={`font-extrabold text-sm leading-none transition-colors ${scrolled ? '' : 'text-white'}`}
                                style={{ fontFamily: 'Syne', color: scrolled ? 'var(--navy)' : 'white' }}
                            >
                                TKode Labs
                            </div>
                            <div className="text-xs leading-none mt-0.5" style={{ color: 'var(--sky)' }}>
                                Technology Solutions
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-opacity hover:opacity-70"
                                style={{ color: scrolled ? 'var(--navy)' : 'rgba(200,222,255,.9)' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contato"
                            className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-80"
                            style={{ background: 'var(--blue)', fontFamily: 'Syne' }}
                        >
                            Falar Conosco
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg transition-colors"
                        style={{ color: scrolled ? 'var(--navy)' : 'white' }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[60px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xl border-t"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-semibold py-2 border-b transition-opacity hover:opacity-70"
                                    style={{ color: 'var(--navy)', borderColor: 'var(--line)' }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/#contato"
                                className="px-4 py-3 rounded-xl text-white text-sm font-bold text-center mt-2"
                                style={{ background: 'var(--blue)', fontFamily: 'Syne' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Falar Conosco
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
