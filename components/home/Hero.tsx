'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero-bg min-h-screen flex items-center pt-24 pb-20 relative">
            <div className="grid-lines" />

            {/* Decorative blobs */}
            <div
                className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-15 float-anim pointer-events-none"
                style={{ background: 'radial-gradient(circle,var(--sky),transparent)', filter: 'blur(50px)' }}
            />
            <div
                className="absolute bottom-16 left-5 w-56 h-56 rounded-full opacity-10 float-anim pointer-events-none"
                style={{ background: 'radial-gradient(circle,var(--frost),transparent)', filter: 'blur(35px)', animationDelay: '.8s' }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div
                                className="badge mb-6"
                                style={{ background: 'rgba(74,144,217,.15)', color: 'var(--frost)' }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 relative">
                                    <span className="ping absolute inset-0 rounded-full bg-green-400" />
                                </span>
                                Aceitando novos projetos · 2026
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                        >
                            Sistemas web que{' '}
                            <span className="gradient-text">transformam</span>{' '}
                            negócios
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg mb-8"
                            style={{ color: 'rgba(200,222,255,.75)', lineHeight: 1.7 }}
                        >
                            Da ideia ao deploy — desenvolvemos plataformas web modernas, aplicações mobile e automações sob medida para o seu negócio.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <Link
                                href="/#servicos"
                                className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95"
                                style={{ background: 'var(--sky)', fontFamily: 'Syne' }}
                            >
                                Ver Serviços →
                            </Link>
                            <Link
                                href="/#contato"
                                className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/10"
                                style={{ borderColor: 'rgba(200,222,255,.3)', color: 'var(--frost)' }}
                            >
                                Fale Conosco
                            </Link>
                        </motion.div>

                        {/* Tech pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-2"
                        >
                            {['⚡ Next.js', '🗄 Supabase', '🐘 PostgreSQL', '📱 React Native', '☁️ Vercel'].map((tech) => (
                                <span
                                    key={tech}
                                    className="badge"
                                    style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(200,222,255,.9)' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Mock Terminal + Dashboard Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                background: 'rgba(255,255,255,.06)',
                                border: '1px solid rgba(255,255,255,.1)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Fake browser bar */}
                            <div
                                className="flex items-center gap-2 px-4 py-3"
                                style={{ background: 'rgba(0,0,0,.25)', borderBottom: '1px solid rgba(255,255,255,.08)' }}
                            >
                                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                                <div
                                    className="flex-1 mx-4 h-5 rounded-md text-xs flex items-center px-3"
                                    style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(200,222,255,.5)' }}
                                >
                                    app.tkodelabs.com.br
                                </div>
                            </div>

                            {/* Mock dashboard */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--frost)' }}>Dashboard</div>
                                        <div className="text-xl font-bold text-white" style={{ fontFamily: 'Syne' }}>Bem-vindo, Cliente</div>
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                                        style={{ background: 'rgba(74,144,217,.2)' }}
                                    >
                                        👨‍💻
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Projetos', value: '12', bg: 'rgba(74,144,217,.15)' },
                                        { label: 'Entregas', value: '98%', bg: 'rgba(13,110,63,.2)' },
                                        { label: 'Tickets', value: '3', bg: 'rgba(180,83,9,.2)' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="rounded-xl p-3 text-center" style={{ background: stat.bg }}>
                                            <div className="text-xl font-bold text-white">{stat.value}</div>
                                            <div className="text-xs mt-0.5" style={{ color: 'var(--frost)' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Activity items */}
                                <div>
                                    <div
                                        className="text-xs font-semibold mb-2"
                                        style={{ color: 'rgba(200,222,255,.5)', fontFamily: 'Syne', letterSpacing: '.06em', textTransform: 'uppercase' }}
                                    >
                                        Atividade Recente
                                    </div>
                                    {[
                                        { icon: '🚀', title: 'Deploy realizado com sucesso', sub: 'Portal v2.1 · há 2h' },
                                        { icon: '✅', title: 'Feature aprovada pelo cliente', sub: 'Dashboard analytics · há 5h' },
                                        { icon: '🔧', title: 'Bug corrigido em produção', sub: 'Auth service · ontem' },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="flex items-center gap-3 rounded-lg p-2.5 mb-1.5"
                                            style={{ background: 'rgba(255,255,255,.05)' }}
                                        >
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                                                style={{ background: 'rgba(74,144,217,.25)' }}
                                            >
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-white">{item.title}</div>
                                                <div className="text-xs" style={{ color: 'rgba(200,222,255,.4)' }}>{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
