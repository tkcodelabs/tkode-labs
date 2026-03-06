'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogOut, Key, Trash2, Copy, CheckCircle2, ExternalLink, ClipboardCheck, ClipboardList } from 'lucide-react';
import { getAllPropostas } from '@/lib/propostas';
import type { Proposta } from '@/lib/types';

import { getAllPinsAction, setPinAction, deletePinAction } from '@/lib/actions';

export default function AdminPanel() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isInitializing, setIsInitializing] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pins, setPins] = useState<Record<string, string>>({});
    const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
    const [copiedPinSlug, setCopiedPinSlug] = useState<string | null>(null);
    const [loadingTokens, setLoadingTokens] = useState(false);

    const [settingPinFor, setSettingPinFor] = useState<string | null>(null);
    const [newPinValue, setNewPinValue] = useState('');

    const propostas = getAllPropostas();

    useEffect(() => {
        const init = async () => {
            try {
                if (sessionStorage.getItem('tkode_admin_auth') === 'true') {
                    setIsLoggedIn(true);
                    await loadPins();
                }
            } catch (err) {
                console.error('Erro de inicialização:', err);
            } finally {
                setIsInitializing(false);
            }
        };
        init();
    }, []);

    const loadPins = async () => {
        try {
            setLoadingTokens(true);
            const serverPins = await getAllPinsAction();
            setPins(serverPins);
        } catch (err) {
            console.error('Erro ao buscar PINs:', err);
            // Evitar que quebre mantendo state vazio
            setPins({});
        } finally {
            setLoadingTokens(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'tkode@admin2026') {
            sessionStorage.setItem('tkode_admin_auth', 'true');
            setIsLoggedIn(true);
            setError('');
            loadPins();
        } else {
            setError('Senha incorreta.');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('tkode_admin_auth');
        setIsLoggedIn(false);
        setPassword('');
    };

    const openSetPinModal = (slug: string) => {
        setSettingPinFor(slug);
        setNewPinValue(pins[slug] || '');
    };

    const confirmSetPin = async () => {
        if (!settingPinFor) return;
        const slug = settingPinFor;
        const val = newPinValue.trim();

        if (val !== '') {
            const res = await setPinAction(slug, val);
            if (res.success) {
                await loadPins();
                setSettingPinFor(null);
            } else {
                alert(`Erro Vercel: ${res.error || 'Falha desconhecida.'}`);
            }
        } else {
            setSettingPinFor(null);
        }
    };

    const cancelSetPin = () => {
        setSettingPinFor(null);
        setNewPinValue('');
    };

    const deletePin = async (slug: string) => {
        if (window.confirm(`Tem certeza que deseja remover o PIN da proposta '${slug}'? Ela ficará INACESSÍVEL (Acesso Negado) até ter um novo PIN.`)) {
            const success = await deletePinAction(slug);
            if (success) {
                await loadPins();
            } else {
                alert('Erro ao deletar PIN no Supabase.');
            }
        }
    };

    const copyLink = (slug: string) => {
        const url = `${window.location.origin}/proposta/${slug}`;
        navigator.clipboard.writeText(url);
        setCopiedSlug(slug);
        setTimeout(() => setCopiedSlug(null), 2000);
    };

    const copyPin = (slug: string) => {
        const pin = pins[slug];
        if (pin) {
            navigator.clipboard.writeText(pin);
            setCopiedPinSlug(slug);
            setTimeout(() => setCopiedPinSlug(null), 2000);
        }
    };

    const openProposta = (slug: string) => {
        window.open(`/proposta/${slug}`, '_blank');
    };

    if (isInitializing) {
        return (
            <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="grid-lines" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full mb-6 relative z-10"
                />
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white font-bold tracking-widest text-sm uppercase relative z-10 shadow-black drop-shadow-md"
                    style={{ fontFamily: 'Syne' }}
                >
                    Autenticando Conexão Segura...
                </motion.h2>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#0f172a' }}>
                <div className="grid-lines" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-sm rounded-3xl p-8 relative z-10"
                    style={{ background: 'rgba(30,41,59,.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.1)' }}
                >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--blue)' }}>
                        <Lock className="text-white" size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Syne' }}>TKode Admin</h1>
                    <p className="text-sm text-slate-400 mb-6">Área restrita de gerenciamento.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Senha de acesso"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                autoFocus
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
                            style={{ fontFamily: 'Syne' }}
                        >
                            Acessar Painel
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold text-xs" style={{ fontFamily: 'Syne' }}>TK</div>
                        <span className="font-bold text-slate-900" style={{ fontFamily: 'Syne' }}>Admin Control</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
                    >
                        <LogOut size={16} />
                        Sair
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: 'Syne' }}>Gerenciamento de Propostas</h1>
                    <p className="text-slate-500">Controle os PINs de acesso e links das propostas comerciais.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold" style={{ fontFamily: 'Syne' }}>
                                    <th className="p-4 pl-6 whitespace-nowrap">Proposta</th>
                                    <th className="p-4 whitespace-nowrap">Status / PIN</th>
                                    <th className="p-4 text-right pr-6 whitespace-nowrap">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propostas.map((prop: Proposta) => {
                                    const hasPin = Boolean(pins[prop.slug]);
                                    const pin = pins[prop.slug];

                                    return (
                                        <tr key={prop.slug} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 pl-6 py-5">
                                                <div className="font-bold text-slate-900 mb-1 whitespace-nowrap">{prop.cliente}</div>
                                                <div className="text-sm text-slate-500 font-mono bg-slate-100 inline-block px-2 py-0.5 rounded">/{prop.slug}</div>
                                            </td>
                                            <td className="p-4">
                                                {hasPin ? (
                                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 flex items-center gap-1.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ativo
                                                        </span>
                                                        <code className="text-sm font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{pin}</code>
                                                    </div>
                                                ) : (
                                                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 flex items-center gap-1.5 whitespace-nowrap">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Sem PIN (Bloqueada)
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4 pr-6 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openProposta(prop.slug)}
                                                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                                                        title="Acessar Proposta"
                                                    >
                                                        <ExternalLink size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => copyLink(prop.slug)}
                                                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                                                        title="Copiar Link"
                                                    >
                                                        {copiedSlug === prop.slug ? <CheckCircle2 size={18} className="text-green-600" /> : <Copy size={18} />}
                                                    </button>
                                                    {hasPin && (
                                                        <button
                                                            onClick={() => copyPin(prop.slug)}
                                                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                                                            title="Copiar PIN"
                                                        >
                                                            {copiedPinSlug === prop.slug ? <ClipboardCheck size={18} className="text-green-600" /> : <ClipboardList size={18} />}
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => openSetPinModal(prop.slug)}
                                                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                                                        title={hasPin ? 'Alterar PIN' : 'Criar PIN'}
                                                    >
                                                        <Key size={18} />
                                                    </button>
                                                    {hasPin && (
                                                        <button
                                                            onClick={() => deletePin(prop.slug)}
                                                            className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                            title="Remover PIN (Bloquear Acesso)"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {propostas.length === 0 && (
                        <div className="p-8 text-center text-slate-500">Nenhuma proposta encontrada no arquivo propostas.ts</div>
                    )}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-800 leading-relaxed">
                    <strong>ℹ️ Segurança Avançada:</strong> Os PINs agora são criptografados, processados por backend (Server Actions) e guardados no Banco de Dados Supabase. O acesso público é bloqueado.
                </div>
            </main>

            {/* Modal para Definir PIN */}
            {settingPinFor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={cancelSetPin}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white border border-slate-200 p-6 rounded-2xl w-full max-w-sm shadow-2xl"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Syne' }}>
                            Configurar PIN
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">
                            Digite o novo PIN de acesso para a proposta <strong>{settingPinFor}</strong>.
                        </p>

                        <input
                            type="text"
                            value={newPinValue}
                            onChange={(e) => setNewPinValue(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all mb-6"
                            placeholder="Ex: 2026"
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') confirmSetPin();
                                if (e.key === 'Escape') cancelSetPin();
                            }}
                        />

                        <div className="flex gap-3">
                            <button
                                onClick={cancelSetPin}
                                className="flex-1 py-2.5 rounded-xl font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmSetPin}
                                className="flex-1 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Salvar PIN
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
