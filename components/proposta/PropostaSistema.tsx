'use client';

import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaSistema({ proposta }: Props) {
    if (!proposta.sistema) return null;

    const primaria = proposta.cores?.primaria ?? 'var(--deep)';
    const secundaria = proposta.cores?.secundaria ?? 'var(--sky)';

    return (
        <section id="sistema" className="py-24 relative z-10" style={{ background: '#fff' }}>
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label" style={{ color: secundaria }}>O Sistema</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: primaria }}>
                        {proposta.sistema.titulo}
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
                        {proposta.sistema.subtitulo}
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    {proposta.sistema.areas.map((area, i) => (
                        <motion.div
                            key={area.titulo}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.15 }}
                            className="rounded-2xl p-8"
                            style={
                                area.dark
                                    ? { background: primaria, border: `1px solid ${secundaria}30` }
                                    : { background: 'var(--off)', border: '1px solid var(--line)' }
                            }
                        >
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                                style={area.dark ? { background: `${secundaria}25` } : { background: `${primaria}12` }}
                            >
                                {area.icone}
                            </div>
                            <h3
                                className="text-2xl font-bold mb-2"
                                style={{ fontFamily: 'Syne', color: area.dark ? 'white' : primaria }}
                            >
                                {area.titulo}
                            </h3>
                            <p
                                className="text-sm mb-6"
                                style={{ color: area.dark ? 'rgba(255,255,255,.65)' : '#64748b' }}
                            >
                                {area.descricao}
                            </p>
                            <ul className="space-y-3">
                                {area.features.map((feat) => (
                                    <li key={feat} className="feat">
                                        <div
                                            className="feat-icon"
                                            style={area.dark ? { background: `${secundaria}30` } : { background: `${primaria}15` }}
                                        >
                                            <span style={{ color: area.dark ? secundaria : primaria, fontSize: '10px' }}>✓</span>
                                        </div>
                                        <span
                                            className="feat-text"
                                            style={{ color: area.dark ? 'rgba(255,255,255,.85)' : '#374151' }}
                                        >
                                            {feat}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
