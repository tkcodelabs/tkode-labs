'use client';

import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaObservacoes({ proposta }: Props) {
    if (!proposta.observacoes) return null;
    const obs = proposta.observacoes;
    const secundaria = proposta.cores?.secundaria ?? '#B45309';
    // Observation box uses the secondary (gold/amber) color for warmth
    const bgObs = `${secundaria}0f`;
    const borderObs = `${secundaria}35`;
    const textObs = `${secundaria}dd`;

    return (
        <section className="py-16 relative z-10" style={{ background: 'var(--off)' }}>
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl p-8"
                    style={{ background: bgObs, border: `2px solid ${borderObs}` }}
                >
                    <div className="flex items-start gap-4">
                        <div className="text-3xl mt-1">📌</div>
                        <div>
                            <h3
                                className="text-xl font-bold mb-2"
                                style={{ fontFamily: 'Syne', color: secundaria }}
                            >
                                {obs.titulo}
                            </h3>
                            <p className="text-sm mb-4" style={{ color: textObs, lineHeight: 1.7 }}>
                                Todas as funcionalidades descritas em cada plano já estão{' '}
                                <strong>incluídas no escopo de desenvolvimento</strong> — nenhuma surpresa durante o projeto.
                            </p>
                            <p className="text-sm mb-4" style={{ color: textObs, lineHeight: 1.7 }}>
                                O orçamento separado se aplica apenas a{' '}
                                <strong>novas implementações solicitadas pelo cliente após a entrega</strong>. Exemplos:
                            </p>
                            <ul className="space-y-2 mb-4">
                                {obs.items.map((item) => (
                                    <li key={item} className="feat">
                                        <div className="feat-icon" style={{ background: `${secundaria}20` }}>
                                            <span style={{ color: secundaria, fontSize: '10px' }}>→</span>
                                        </div>
                                        <span className="feat-text" style={{ color: textObs }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-semibold italic" style={{ color: secundaria }}>
                                {obs.rodape}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
