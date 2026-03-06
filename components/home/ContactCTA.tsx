'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section className="py-28 relative z-10" style={{ background: 'var(--off)' }}>
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-3xl p-12 text-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, var(--deep) 0%, var(--navy) 50%, #1a4a8a 100%)',
                        border: '1px solid rgba(200,222,255,.1)',
                    }}
                >
                    <div className="grid-lines" style={{ opacity: 0.4 }} />
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 float-anim"
                        style={{ background: 'radial-gradient(circle,var(--sky),transparent)', filter: 'blur(40px)' }}
                    />

                    <div className="relative z-10">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
                            style={{ background: 'rgba(74,144,217,.15)', color: 'var(--frost)', fontFamily: 'Syne', letterSpacing: '.08em' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 relative">
                                <span className="ping absolute inset-0 rounded-full bg-green-400" />
                            </span>
                            Aceitando novos projetos
                        </div>

                        <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Syne' }}>
                            Vamos construir algo{' '}
                            <span className="gradient-text">incrível juntos?</span>
                        </h2>

                        <p className="text-lg mb-10" style={{ color: 'rgba(200,222,255,.7)' }}>
                            Tem uma ideia ou precisa de um sistema? Fale conosco e receba uma proposta personalizada sem compromisso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=tkodelabs@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-85"
                                style={{ background: 'var(--sky)', fontFamily: 'Syne' }}
                            >
                                <Mail size={16} />
                                Enviar E‑mail
                            </a>
                            <a
                                href="https://wa.me/5586988695332"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:bg-white/10"
                                style={{ border: '1.5px solid rgba(200,222,255,.3)', color: 'var(--frost)', fontFamily: 'Syne' }}
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                        </div>

                        <p className="text-sm mt-8" style={{ color: 'rgba(200,222,255,.35)' }}>
                            Respondemos em até 24h · Proposta sem compromisso
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
