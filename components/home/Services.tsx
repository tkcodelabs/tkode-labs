'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SERVICES = [
    {
        icon: '🌐',
        title: 'Sistemas Web',
        desc: 'Plataformas completas e escaláveis, desde portais corporativos a sistemas ERP e dashboards complexos.',
        tags: ['Next.js', 'Supabase', 'PostgreSQL'],
        color: 'var(--blue)',
        bg: 'rgba(36,98,200,.08)',
    },
    {
        icon: '📱',
        title: 'Apps Mobile',
        desc: 'Aplicativos iOS e Android nativos ou híbridos com design moderno e performance de ponta.',
        tags: ['React Native', 'Expo', 'TypeScript'],
        color: 'var(--green)',
        bg: 'rgba(13,110,63,.08)',
    },
    {
        icon: '🔗',
        title: 'Integrações & APIs',
        desc: 'Conectamos seus sistemas existentes com novas tecnologias, ERPs, gateways de pagamento e plataformas externas.',
        tags: ['REST', 'GraphQL', 'Webhooks'],
        color: 'var(--purple)',
        bg: 'rgba(76,29,149,.08)',
    },
    {
        icon: '⚡',
        title: 'Automações',
        desc: 'Eliminamos tarefas repetitivas com scripts, bots e fluxos automatizados que economizam seu tempo.',
        tags: ['Python', 'N8N', 'Playwright'],
        color: '#b45309',
        bg: 'rgba(180,83,9,.08)',
    },
    {
        icon: '🎨',
        title: 'UI/UX Premium',
        desc: 'Design de interfaces modernas, acessíveis e que convertem — com foco na experiência real do usuário.',
        tags: ['Figma', 'Tailwind', 'Framer'],
        color: '#7c3aed',
        bg: 'rgba(124,58,237,.08)',
    },
    {
        icon: '🛡️',
        title: 'Consultoria Tech',
        desc: 'Ajudamos sua empresa a escolher a tecnologia certa, planejar a arquitetura e escalar de forma sustentável.',
        tags: ['Arquitetura', 'DevOps', 'Cloud'],
        color: 'var(--sky)',
        bg: 'rgba(74,144,217,.08)',
    },
];



export default function Services() {
    return (
        <section id="servicos" className="py-28 relative z-10" style={{ background: '#fff' }}>
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label">O que fazemos</div>
                    <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
                        Soluções sob medida para o seu negócio
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
                        Da ideia ao deploy — desenvolvemos com qualidade, prazo e transparência total.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl p-7 border card-glow cursor-default"
                            style={{
                                background: service.bg,
                                borderColor: 'var(--line)',
                            }}
                        >
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                                style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,.07)' }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)', fontFamily: 'Syne' }}>
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
                                {service.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                                        style={{
                                            background: '#fff',
                                            color: service.color,
                                            border: `1px solid ${service.color}30`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Abaixo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <p className="text-base mb-5" style={{ color: '#64748b' }}>
                        Não encontrou o que precisa? Vamos conversar.
                    </p>
                    <Link
                        href="/#contato"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-85"
                        style={{ background: 'var(--blue)', fontFamily: 'Syne' }}
                    >
                        Fale Conosco →
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
