'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface PropostaNavbarProps {
    sistema?: boolean;
    contatoId?: string;
    cores?: { primaria: string; secundaria: string };
}

export default function PropostaNavbar({
    sistema,
    contatoId = 'proposta-contato',
    cores,
}: PropostaNavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const primaria = cores?.primaria ?? 'var(--blue)';
    const secundaria = cores?.secundaria ?? 'var(--sky)';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const linkColor = scrolled ? 'var(--navy)' : 'rgba(255,255,255,.9)';

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'bg-white/92 backdrop-blur-md shadow-sm' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
                            style={{ background: scrolled ? primaria : primaria }}
                        >
                            <span className="text-white font-extrabold text-xs" style={{ fontFamily: 'Syne' }}>TK</span>
                        </div>
                        <div className="hidden xs:block">
                            <div
                                className="font-extrabold text-sm leading-none transition-colors duration-300"
                                style={{ fontFamily: 'Syne', color: scrolled ? 'var(--navy)' : 'white' }}
                            >
                                TKode Labs
                            </div>
                            <div className="text-xs leading-none mt-0.5" style={{ color: scrolled ? secundaria : secundaria }}>
                                Technology Solutions
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-5 text-sm font-medium">
                        {sistema && (
                            <a href="#sistema" className="transition-opacity hover:opacity-70" style={{ color: linkColor }}>
                                O Sistema
                            </a>
                        )}
                        <a href="#planos" className="transition-opacity hover:opacity-70" style={{ color: linkColor }}>
                            Planos
                        </a>
                        <a href="#comparativo" className="transition-opacity hover:opacity-70" style={{ color: linkColor }}>
                            Comparativo
                        </a>
                        <a
                            href={`#${contatoId}`}
                            className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-80"
                            style={{ background: primaria, fontFamily: 'Syne' }}
                        >
                            Falar Conosco
                        </a>
                    </div>

                    {/* Mobile hamburger */}
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
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[60px] left-0 right-0 z-40 bg-white/96 backdrop-blur-md shadow-xl border-t"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col gap-3">
                            {sistema && (
                                <a
                                    href="#sistema"
                                    className="text-sm font-semibold py-2.5 border-b"
                                    style={{ color: primaria, borderColor: 'var(--line)' }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    O Sistema
                                </a>
                            )}
                            <a
                                href="#planos"
                                className="text-sm font-semibold py-2.5 border-b"
                                style={{ color: primaria, borderColor: 'var(--line)' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Planos
                            </a>
                            <a
                                href="#comparativo"
                                className="text-sm font-semibold py-2.5 border-b"
                                style={{ color: primaria, borderColor: 'var(--line)' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Comparativo
                            </a>
                            <a
                                href={`#${contatoId}`}
                                className="px-4 py-3 rounded-xl text-white text-sm font-bold text-center"
                                style={{ background: primaria, fontFamily: 'Syne' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Falar Conosco
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
