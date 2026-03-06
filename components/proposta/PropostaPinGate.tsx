'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface Props {
    slug: string;
    cliente: string;
    cores?: { primaria: string; secundaria: string };
    children: React.ReactNode;
}

const STORAGE_KEY = 'tkode_pins';

function getPins(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

function checkPin(slug: string, input: string): boolean {
    const pins = getPins();
    return pins[slug] === input;
}

function hasPin(slug: string): boolean {
    const pins = getPins();
    return Boolean(pins[slug]);
}

export default function PropostaPinGate({ slug, cliente, cores, children }: Props) {
    const [granted, setGranted] = useState(false);
    const [noPin, setNoPin] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const primaria = cores?.primaria ?? 'var(--navy)';
    const secundaria = cores?.secundaria ?? 'var(--sky)';

    useEffect(() => {
        // Check session
        const session = sessionStorage.getItem(`tkode_access_${slug}`);
        if (session === 'granted') {
            setGranted(true);
            setLoading(false);
            return;
        }
        // Check if PIN exists
        if (!hasPin(slug)) {
            setNoPin(true);
        }
        setLoading(false);
    }, [slug]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (checkPin(slug, input)) {
            sessionStorage.setItem(`tkode_access_${slug}`, 'granted');
            setGranted(true);
        } else {
            setError('PIN incorreto. Tente novamente.');
            setInput('');
        }
    }

    if (loading) return null;

    if (granted) return <>{children}</>;

    // No PIN configured — show admin message
    if (noPin) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{ background: 'var(--deep)' }}
            >
                <div className="grid-lines" />
                <div className="relative z-10 text-center px-6 max-w-md">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'rgba(74,144,217,.15)', border: '1px solid rgba(74,144,217,.2)' }}
                    >
                        <Lock size={28} style={{ color: 'var(--sky)' }} />
                    </div>
                    <h1 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne' }}>
                        Proposta não disponível
                    </h1>
                    <p className="text-sm" style={{ color: 'rgba(200,222,255,.55)' }}>
                        Esta proposta ainda não foi configurada. Entre em contato com a TKode Labs.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ background: 'var(--deep)' }}
        >
            <div className="grid-lines" />
            <div
                className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10 float-anim pointer-events-none"
                style={{ background: `radial-gradient(circle,${secundaria},transparent)`, filter: 'blur(50px)' }}
            />
            <div
                className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10 float-anim pointer-events-none"
                style={{ background: `radial-gradient(circle,${primaria},transparent)`, filter: 'blur(40px)', animationDelay: '1s' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-sm mx-6"
            >
                <div
                    className="rounded-3xl p-8"
                    style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(12px)' }}
                >
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            style={{ background: primaria }}
                        >
                            <span className="text-white font-extrabold text-lg" style={{ fontFamily: 'Syne' }}>TK</span>
                        </div>
                        <div className="font-extrabold text-white text-lg" style={{ fontFamily: 'Syne' }}>TKode Labs</div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--sky)' }}>Proposta Comercial</div>
                    </div>

                    {/* Client */}
                    <div
                        className="text-center mb-6 py-3 rounded-xl"
                        style={{ background: `${primaria}25`, border: `1px solid ${primaria}40` }}
                    >
                        <div className="text-sm font-bold" style={{ color: secundaria }}>{cliente}</div>
                        <div className="text-xs mt-0.5" style={{ color: 'rgba(200,222,255,.5)' }}>Proposta exclusiva e confidencial</div>
                    </div>

                    {/* PIN Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold mb-2" style={{ color: 'rgba(200,222,255,.6)', fontFamily: 'Syne', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                                PIN de acesso
                            </label>
                            <div className="relative">
                                <input
                                    type={show ? 'text' : 'password'}
                                    value={input}
                                    onChange={e => { setInput(e.target.value); setError(''); }}
                                    placeholder="Digite o PIN"
                                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none pr-10"
                                    style={{
                                        background: 'rgba(255,255,255,.07)',
                                        border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,.12)'}`,
                                        fontFamily: 'DM Sans',
                                    }}
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                    style={{ color: 'rgba(200,222,255,.4)' }}
                                >
                                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {error && (
                                <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-85"
                            style={{ background: primaria, fontFamily: 'Syne' }}
                        >
                            Acessar Proposta →
                        </button>
                    </form>

                    <p className="text-center text-xs mt-6" style={{ color: 'rgba(200,222,255,.3)' }}>
                        Você recebeu o PIN junto ao link desta proposta.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
