import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Acesso não autorizado — TKode Labs',
    robots: { index: false, follow: false },
};

export default function PropostaIndexPage() {
    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ background: 'var(--deep)' }}
        >
            <div className="grid-lines" />
            <div className="relative z-10 text-center px-6 max-w-md">
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl"
                    style={{ background: 'rgba(248,113,113,.12)', border: '1px solid rgba(248,113,113,.2)' }}
                >
                    🔒
                </div>
                <h1
                    className="text-3xl font-extrabold text-white mb-3"
                    style={{ fontFamily: 'Syne' }}
                >
                    Acesso não autorizado
                </h1>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-80"
                    style={{ background: 'var(--blue)', fontFamily: 'Syne' }}
                >
                    ← Voltar ao site
                </Link>
            </div>
        </div>
    );
}
