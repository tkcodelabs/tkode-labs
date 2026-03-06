import Link from 'next/link';
import type { Proposta } from '@/lib/types';

interface Props {
    proposta: Proposta;
}

export default function PropostaFooter({ proposta }: Props) {
    const ano = new Date().getFullYear();
    const primaria = proposta.cores?.primaria ?? 'var(--sky)';
    const secundaria = proposta.cores?.secundaria ?? 'var(--sky)';

    return (
        <footer
            id="proposta-contato"
            className="py-20 relative"
            style={{ background: 'var(--deep)' }}
        >
            <div className="grid-lines" style={{ opacity: 0.5 }} />
            <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${primaria}, ${secundaria}, ${primaria})` }}
            />
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: `${primaria}25`, border: `1.5px solid ${primaria}50` }}
                >
                    <span className="text-2xl font-extrabold" style={{ color: primaria, fontFamily: 'Syne' }}>TK</span>
                </div>

                <h2 className="text-3xl font-extrabold text-white mb-2" style={{ fontFamily: 'Syne' }}>
                    TKode Labs
                </h2>
                <p className="mb-1" style={{ color: secundaria }}>Technology Solutions</p>
                <p className="text-sm mb-8" style={{ color: 'rgba(200,222,255,.5)' }}>
                    Proposta exclusiva para <strong style={{ color: secundaria }}>{proposta.cliente}</strong>
                </p>

                <p
                    className="text-lg mb-8"
                    style={{ color: 'rgba(200,222,255,.65)', whiteSpace: 'pre-line' }}
                >
                    {proposta.contato.mensagem}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&to=${proposta.contato.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95"
                        style={{ background: primaria, color: '#fff', fontFamily: 'Syne' }}
                    >
                        ✉️ Falar com a TKode Labs
                    </a>
                    {proposta.contato.whatsapp && (
                        <a
                            href={proposta.contato.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10"
                            style={{ border: `1.5px solid ${primaria}60`, color: '#fff', fontFamily: 'Syne' }}
                        >
                            💬 WhatsApp
                        </a>
                    )}
                </div>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: 'rgba(200,222,255,.4)' }}
                    >
                        ← Voltar ao site da TKode Labs
                    </Link>
                </div>

                <div
                    className="mt-12 pt-8 text-xs"
                    style={{ color: 'rgba(200,222,255,.3)', borderTop: '1px solid rgba(200,222,255,.1)' }}
                >
                    © {ano} TKode Labs · {proposta.data}
                </div>
            </div>
        </footer>
    );
}
