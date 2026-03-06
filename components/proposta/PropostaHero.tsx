'use client';

import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaHero({ proposta }: Props) {
    const primaria = proposta.cores?.primaria ?? '#1B3A6B';
    const secundaria = proposta.cores?.secundaria ?? '#4A90D9';

    // Hero gradient com cores do cliente
    const heroBg = `linear-gradient(135deg, ${primaria} 0%, ${adjustColor(primaria, -20)} 50%, ${adjustColor(primaria, 10)} 100%)`;

    return (
        <section
            className="min-h-screen flex items-center pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden"
            style={{ background: heroBg }}
        >
            {/* Top accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-1 z-20 pointer-events-none"
                style={{ background: `linear-gradient(90deg, ${secundaria}, ${primaria}, ${secundaria})` }}
            />

            {/* Grid */}
            <div className="grid-lines" />

            {/* Blobs com cor secundária */}
            <div
                className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-15 float-anim pointer-events-none"
                style={{ background: `radial-gradient(circle,${secundaria},transparent)`, filter: 'blur(50px)' }}
            />
            <div
                className="absolute bottom-10 left-5 w-48 h-48 rounded-full opacity-10 float-anim pointer-events-none"
                style={{ background: `radial-gradient(circle,${secundaria},transparent)`, filter: 'blur(35px)', animationDelay: '.8s' }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div
                                className="badge mb-6"
                                style={{ background: `${secundaria}22`, color: `${secundaria}`, border: `1px solid ${secundaria}50` }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full relative" style={{ background: secundaria }}>
                                    <span className="ping absolute inset-0 rounded-full" style={{ background: secundaria }} />
                                </span>
                                {proposta.badgeLabel}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 sm:mb-6"
                        >
                            {proposta.heroTitulo}
                            <br />
                            <span style={{ color: secundaria }}>
                                {proposta.heroSubtitulo.split('\n').map((line, i) => (
                                    <span key={i}>{line}{i < proposta.heroSubtitulo.split('\n').length - 1 && <br />}</span>
                                ))}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg mb-6 sm:mb-8"
                            style={{ color: 'rgba(255,255,255,.75)', lineHeight: 1.7 }}
                        >
                            {proposta.descricao}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            {proposta.sistema && (
                                <a
                                    href="#sistema"
                                    className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95"
                                    style={{ background: secundaria, fontFamily: 'Syne' }}
                                >
                                    Ver Planos →
                                </a>
                            )}
                            <a
                                href="#planos"
                                className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/10"
                                style={{ borderColor: `${secundaria}60`, color: secundaria }}
                            >
                                Como funciona
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-2"
                        >
                            {proposta.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="badge"
                                    style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.9)' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Mock Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                background: 'rgba(255,255,255,.07)',
                                border: `1px solid ${secundaria}40`,
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Fake browser bar */}
                            <div
                                className="flex items-center gap-2 px-4 py-3"
                                style={{ background: 'rgba(0,0,0,.25)', borderBottom: `1px solid ${secundaria}20` }}
                            >
                                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                <div className="w-3 h-3 rounded-full" style={{ background: `${secundaria}90` }} />
                                <div
                                    className="flex-1 mx-4 h-5 rounded-md text-xs flex items-center px-3"
                                    style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)' }}
                                >
                                    sistema.tkode.com.br
                                </div>
                            </div>
                            {/* Mock dashboard content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <div className="text-xs font-semibold mb-0.5" style={{ color: secundaria }}>Dashboard</div>
                                        <div className="text-xl font-bold text-white" style={{ fontFamily: 'Syne' }}>Bem-vindo, Contador</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: `${secundaria}25` }}>👨‍💼</div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Clientes', value: 48, bg: `${primaria}40` },
                                        { label: 'Documentos', value: 127, bg: `${secundaria}30` },
                                        { label: 'Pendências', value: 6, bg: 'rgba(180,83,9,.25)' },
                                    ].map((s) => (
                                        <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: s.bg }}>
                                            <div className="text-xl font-bold text-white">{s.value}</div>
                                            <div className="text-xs mt-0.5 text-white/70">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs font-semibold mb-1" style={{ color: `${secundaria}cc`, fontFamily: 'Syne', letterSpacing: '.06em', textTransform: 'uppercase' }}>Atividade Recente</div>
                                    {[
                                        { icon: '📄', title: 'Balancete Março enviado', sub: 'Empresa XYZ Ltda · há 2h', bg: `${secundaria}25` },
                                        { icon: '🏢', title: 'Novo cliente cadastrado', sub: 'Tech Solutions ME · há 5h', bg: `${primaria}40` },
                                    ].map((item) => (
                                        <div key={item.title} className="flex items-center gap-3 rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,.06)' }}>
                                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: item.bg }}>{item.icon}</div>
                                            <div>
                                                <div className="text-xs font-medium text-white">{item.title}</div>
                                                <div className="text-xs text-white/45">{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// Small utility to darken/lighten a hex color
function adjustColor(hex: string, amount: number): string {
    const clamp = (v: number) => Math.max(0, Math.min(255, v));
    const h = hex.replace('#', '');
    const num = parseInt(h, 16);
    const r = clamp(((num >> 16) & 0xff) + amount);
    const g = clamp(((num >> 8) & 0xff) + amount);
    const b = clamp((num & 0xff) + amount);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
