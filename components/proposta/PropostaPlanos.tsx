'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

function SimulatorWidget({ precoUnitario, min, max, label, nota, primaria, secundaria }: {
    precoUnitario: number;
    min: number;
    max: number;
    label: string;
    nota?: string;
    primaria: string;
    secundaria: string;
}) {
    const [value, setValue] = useState(min + 5);
    const pct = ((value - min) / (max - min) * 100).toFixed(2);

    return (
        <div
            className="px-6 pt-5 pb-2"
            style={{ background: `${primaria}0d`, borderBottom: '1px solid var(--line)' }}
        >
            <div className="text-xs font-bold mb-3" style={{ color: primaria, fontFamily: 'Syne', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                {label}
            </div>
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm" style={{ color: primaria }}>
                    Clientes: <strong>{value}</strong>
                </span>
                <span className="text-lg font-extrabold" style={{ color: primaria, fontFamily: 'Syne' }}>
                    R$ {(value * precoUnitario).toLocaleString('pt-BR')}
                    <span className="text-xs font-normal">/mês</span>
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(+e.target.value)}
                className="w-full"
                style={{ ['--pct' as string]: `${pct}%`, ['--range-color' as string]: primaria }}
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: primaria, opacity: 0.6 }}>
                <span>{min} clientes</span>
                <span>{max} clientes</span>
            </div>
            {nota && (
                <div className="mt-3 mb-2 p-3 rounded-xl text-xs" style={{ background: `${secundaria}15`, color: primaria, border: `1px solid ${secundaria}30` }}>
                    <strong>Mínimo mensal:</strong> {nota.replace('5 clientes = ', `${min} clientes = `)}
                </div>
            )}
        </div>
    );
}

export default function PropostaPlanos({ proposta }: Props) {
    const primaria = proposta.cores?.primaria ?? 'var(--navy)';
    const secundaria = proposta.cores?.secundaria ?? 'var(--sky)';

    // Plan colors derived from client palette
    const planoHeaders = [
        primaria,
        secundaria,
        adjustDark(primaria, -15),
    ];

    return (
        <section id="planos" className="py-24 relative z-10" style={{ background: 'var(--off)' }}>
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label" style={{ color: secundaria }}>Planos de Contratação</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: primaria }}>
                        Escolha o seu plano
                    </h2>
                    {proposta.planos.length > 1 && (
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
                            Os Planos 2 e 3 entregam o mesmo sistema completo e robusto. A diferença está apenas na forma de pagamento mensal.
                        </p>
                    )}
                </motion.div>

                <div
                    className={`grid ${proposta.planos.length === 1 ? 'max-w-md mx-auto' : proposta.planos.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'lg:grid-cols-3'} gap-8 items-start`}
                >
                    {proposta.planos.map((plano, i) => {
                        // Override plan styling with client palette
                        const headerColor = i === 1 ? secundaria : i === 0 ? primaria : adjustDark(primaria, -15);
                        const destaque = i === 1 ? secundaria : primaria;
                        const isFeatured = plano.featured;

                        return (
                            <motion.div
                                key={plano.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.12 }}
                                className={`plan-card ${isFeatured ? 'featured' : ''}`}
                                style={{
                                    transform: isFeatured ? 'translateY(-8px)' : undefined,
                                    borderColor: isFeatured ? secundaria : undefined,
                                    boxShadow: isFeatured ? `0 0 0 3px ${secundaria}20` : undefined,
                                }}
                            >
                                {/* Header */}
                                <div
                                    className="p-6 pb-4 relative overflow-hidden"
                                    style={{ background: headerColor }}
                                >
                                    {isFeatured && (
                                        <div className="absolute top-4 right-4">
                                            <div className="badge" style={{ background: 'rgba(255,255,255,.2)', color: '#fff' }}>
                                                ⭐ Mais escolhido
                                            </div>
                                        </div>
                                    )}
                                    {plano.badge && (
                                        <div className="badge mb-3" style={{ background: 'rgba(255,255,255,.15)', color: 'rgba(255,255,255,.9)' }}>
                                            {plano.badge}
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: 'Syne' }}>
                                        {plano.nome}
                                    </h3>
                                    <p className="text-sm text-white/70">{plano.subtitulo}</p>
                                </div>

                                {/* Pricing */}
                                <div className="grid grid-cols-2" style={{ borderBottom: '1px solid var(--line)' }}>
                                    <div className="p-4 text-center" style={{ borderRight: '1px solid var(--line)' }}>
                                        <div className="text-xs font-semibold mb-1" style={{ color: '#94a3b8', fontFamily: 'Syne', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                                            Desenvolvimento
                                        </div>
                                        <div className="text-2xl font-extrabold" style={{ color: primaria, fontFamily: 'Syne' }}>
                                            {plano.desenvolvimento}
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="text-xs font-semibold mb-1" style={{ color: '#94a3b8', fontFamily: 'Syne', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                                            {plano.mensalidadeLabel}
                                        </div>
                                        <div className="text-2xl font-extrabold" style={{ color: destaque, fontFamily: 'Syne' }}>
                                            {plano.mensalidade}
                                        </div>
                                    </div>
                                </div>

                                {/* Simulator */}
                                {plano.simulator && (
                                    <SimulatorWidget
                                        precoUnitario={plano.simulator.precoUnitario}
                                        min={plano.simulator.min}
                                        max={plano.simulator.max}
                                        label={plano.simulator.label}
                                        nota={plano.nota}
                                        primaria={primaria}
                                        secundaria={secundaria}
                                    />
                                )}

                                {/* Features */}
                                <div className="p-6">
                                    <div className="text-xs font-bold mb-3" style={{ color: primaria, fontFamily: 'Syne', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                                        {isFeatured ? 'Tudo incluído' : 'Inclui'}
                                    </div>
                                    <ul className="space-y-2">
                                        {plano.features.map((feat, fi) => (
                                            <li key={fi} className="feat">
                                                <div className="feat-icon" style={{ background: `${destaque}18` }}>
                                                    <span style={{ color: destaque, fontSize: '10px' }}>✓</span>
                                                </div>
                                                <span className="feat-text" style={{ color: '#374151' }}>
                                                    {feat.bold ? <strong>{feat.text}</strong> : feat.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

function adjustDark(hex: string, amount: number): string {
    const clamp = (v: number) => Math.max(0, Math.min(255, v));
    const h = hex.replace('#', '');
    const num = parseInt(h, 16);
    const r = clamp(((num >> 16) & 0xff) + amount);
    const g = clamp(((num >> 8) & 0xff) + amount);
    const b = clamp((num & 0xff) + amount);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
