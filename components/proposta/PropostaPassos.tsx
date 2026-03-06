'use client';

import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaPassos({ proposta }: Props) {
    const primaria = proposta.cores?.primaria ?? 'var(--navy)';
    const secundaria = proposta.cores?.secundaria ?? 'var(--sky)';

    // Generate step colors cycling between primary and secondary variants
    const stepColors = [
        primaria,
        secundaria,
        `${primaria}cc`,
        `${secundaria}cc`,
        primaria,
    ];

    return (
        <section className="py-24 relative z-10" style={{ background: '#fff' }}>
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="section-label" style={{ color: secundaria }}>Como Começar</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: primaria }}>
                        Próximos Passos
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {proposta.passos.map((passo, i) => (
                        <motion.div
                            key={passo.numero}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center gap-6 p-5 rounded-2xl"
                            style={{ background: 'var(--off)', border: '1.5px solid var(--line)' }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-white flex-shrink-0"
                                style={{ background: stepColors[i] ?? primaria, fontFamily: 'Syne' }}
                            >
                                {passo.numero}
                            </div>
                            <div>
                                <div className="font-semibold" style={{ color: primaria }}>
                                    {passo.titulo}
                                </div>
                                <div className="text-sm" style={{ color: '#64748b' }}>
                                    {passo.descricao}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
