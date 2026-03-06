'use client';

import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaComparativo({ proposta }: Props) {
    const featuredIdx = proposta.planos.findIndex(p => p.featured);
    const primaria = proposta.cores?.primaria ?? 'var(--navy)';
    const secundaria = proposta.cores?.secundaria ?? 'var(--sky)';

    return (
        <section id="comparativo" className="py-16 sm:py-24 relative z-10" style={{ background: '#fff' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <div className="section-label" style={{ color: secundaria }}>Comparativo</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: primaria }}>
                        Tudo lado a lado
                    </h2>
                </motion.div>

                {/* Scroll wrapper for mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="overflow-x-auto rounded-2xl"
                    style={{ border: `1.5px solid ${primaria}25`, boxShadow: '0 8px 40px rgba(0,0,0,.06)' }}
                >
                    <table className="compare-table w-full border-collapse min-w-[480px]">
                        <thead>
                            <tr style={{ background: primaria }}>
                                <th
                                    className="text-left p-3 sm:p-4"
                                    style={{ color: 'rgba(255,255,255,.7)', width: '40%', fontFamily: 'Syne', fontSize: '.7rem', letterSpacing: '.06em', textTransform: 'uppercase' }}
                                >
                                    Recurso
                                </th>
                                {proposta.planos.map((plano, i) => (
                                    <th
                                        key={plano.id}
                                        className="p-3 sm:p-4 text-center"
                                        style={{
                                            fontFamily: 'Syne',
                                            fontSize: '.7rem',
                                            letterSpacing: '.06em',
                                            textTransform: 'uppercase',
                                            color: i === featuredIdx ? secundaria : 'rgba(255,255,255,.8)',
                                            background: i === featuredIdx ? `rgba(0,0,0,.15)` : undefined,
                                        }}
                                    >
                                        {plano.badge ?? plano.nome}
                                        <br />
                                        <span style={{ color: i === featuredIdx ? secundaria : 'rgba(255,255,255,.5)', fontSize: '.6rem' }}>
                                            {plano.nome}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {proposta.comparativo.map((row, ri) => (
                                <tr key={row.recurso} style={{ background: ri % 2 === 0 ? '#fff' : '#f8fafc' }}>
                                    <td
                                        className="p-3 sm:p-3.5 text-xs sm:text-sm border-b"
                                        style={{ borderColor: '#eef0f5', fontWeight: 600, color: primaria, paddingLeft: '1rem' }}
                                    >
                                        {row.recurso}
                                    </td>
                                    {row.planos.map((cell, ci) => (
                                        <td
                                            key={ci}
                                            className="p-3 sm:p-3.5 text-xs sm:text-sm border-b text-center"
                                            style={{
                                                borderColor: '#eef0f5',
                                                background: ci === featuredIdx ? `${secundaria}08` : undefined,
                                            }}
                                        >
                                            {cell === '✓' ? (
                                                <span style={{ color: primaria, fontWeight: 700, fontSize: '1rem' }}>✓</span>
                                            ) : cell === '—' ? (
                                                <span style={{ color: '#cbd5e1' }}>—</span>
                                            ) : cell === 'Parcial' ? (
                                                <span style={{ color: secundaria, fontSize: '.75rem', fontWeight: 600 }}>Parcial</span>
                                            ) : (
                                                <span style={{ fontWeight: 600, color: '#374151', fontSize: '.78rem' }}>{cell}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile scroll hint */}
                <p className="text-center text-xs mt-3 sm:hidden" style={{ color: '#94a3b8' }}>
                    ← Deslize para ver todos os planos →
                </p>
            </div>
        </section>
    );
}
