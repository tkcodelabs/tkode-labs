import Link from 'next/link';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            id="contato"
            className="py-20 relative"
            style={{ background: 'var(--deep)' }}
        >
            <div className="grid-lines" style={{ opacity: 0.5 }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ background: 'rgba(74,144,217,.15)', border: '1px solid rgba(74,144,217,.25)' }}
                            >
                                <span className="text-lg font-extrabold" style={{ color: 'var(--frost)', fontFamily: 'Syne' }}>TK</span>
                            </div>
                            <div>
                                <div className="font-extrabold text-white" style={{ fontFamily: 'Syne' }}>TKode Labs</div>
                                <div className="text-xs" style={{ color: 'var(--sky)' }}>Technology Solutions</div>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,222,255,.55)' }}>
                            Desenvolvemos sistemas web modernos, aplicações e soluções tecnológicas sob medida para transformar seu negócio.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                                style={{ background: 'rgba(255,255,255,.06)', color: 'rgba(200,222,255,.6)' }}
                                aria-label="GitHub"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                                style={{ background: 'rgba(255,255,255,.06)', color: 'rgba(200,222,255,.6)' }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="font-bold text-sm mb-5" style={{ fontFamily: 'Syne', color: 'var(--frost)' }}>
                            Navegação
                        </div>
                        <ul className="space-y-3">
                            {[
                                { href: '/#servicos', label: 'Serviços' },
                                { href: '/#stack', label: 'Stack Tecnológica' },
                                { href: '/#portfolio', label: 'Portfolio' },
                                { href: '/#stats', label: 'Resultados' },
                                { href: '/#contato', label: 'Contato' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-opacity hover:opacity-100"
                                        style={{ color: 'rgba(200,222,255,.5)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <div className="font-bold text-sm mb-5" style={{ fontFamily: 'Syne', color: 'var(--frost)' }}>
                            Fale Conosco
                        </div>
                        <div className="space-y-4">
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=tkodelabs@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                                style={{ color: 'rgba(200,222,255,.65)' }}
                            >
                                <Mail size={15} style={{ color: 'var(--sky)' }} />
                                tkodelabs@gmail.com
                            </a>
                            <a
                                href="https://wa.me/5586988695332"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                                style={{ color: 'rgba(200,222,255,.65)' }}
                            >
                                <MessageCircle size={15} style={{ color: '#22c55e' }} />
                                WhatsApp
                            </a>
                        </div>

                        <a
                            href="/#contato"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                            style={{ background: 'var(--sky)', color: '#fff', fontFamily: 'Syne' }}
                        >
                            ✉️ Iniciar Projeto
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left"
                    style={{ borderTop: '1px solid rgba(200,222,255,.1)', color: 'rgba(200,222,255,.3)' }}
                >
                    <span>© 2026 TKode Labs — Todos os direitos reservados</span>
                    <span>Desenvolvido com ❤️ usando Next.js + Vercel</span>
                </div>
            </div>
        </footer>
    );
}
