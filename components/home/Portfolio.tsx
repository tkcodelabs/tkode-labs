'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
    {
        emoji: '📸',
        title: 'Portfólio de Fotógrafo',
        desc: 'Site visualmente impactante para exibição de galerias em alta resolução, orçamentos rápidos e conexão com Instagram.',
        tags: ['Next.js', 'Framer Motion', 'Tailwind'],
        color: 'var(--blue)',
        bg: 'rgba(36,98,200,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
    {
        emoji: '🏫',
        title: 'Site Institucional Escolar',
        desc: 'Portal moderno para instituições de ensino com notícias, galeria de fotos, grade curricular e integração com redes sociais.',
        tags: ['Next.js', 'Sanity CMS', 'SEO'],
        color: 'var(--purple)',
        bg: 'rgba(76,29,149,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
    {
        emoji: '📱',
        title: 'App de Delivery',
        desc: 'Aplicativo mobile para restaurantes com cardápio digital, pedidos em tempo real e rastreamento de entrega.',
        tags: ['React Native', 'Expo', 'Firebase'],
        color: 'var(--sky)',
        bg: 'rgba(74,144,217,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
    {
        emoji: '🤖',
        title: 'Automação de Processos',
        desc: 'Bot de automação para processamento de documentos fiscais, integração com governo e envio automático de relatórios.',
        tags: ['Python', 'Playwright', 'OpenAI'],
        color: '#b45309',
        bg: 'rgba(180,83,9,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
    {
        emoji: '📰',
        title: 'Portal de Notícias',
        desc: 'Portal jornalístico com CMS customizado, sistema de autores, categorias, SEO otimizado e alta performance.',
        tags: ['Next.js', 'Sanity', 'Vercel'],
        color: 'var(--green)',
        bg: 'rgba(13,110,63,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
    {
        emoji: '🎓',
        title: 'Plataforma EAD',
        desc: 'Sistema de ensino à distância com cursos, videoaulas, quizzes, certificados e painel para professores.',
        tags: ['Next.js', 'Supabase', 'Stripe'],
        color: '#7c3aed',
        bg: 'rgba(124,58,237,.06)',
        status: 'Entregue',
        statusColor: '#0D6E3F',
        statusBg: 'rgba(13,110,63,.1)',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-28 relative z-10" style={{ background: '#fff' }}>
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label">Portfolio</div>
                    <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
                        Projetos que entregamos
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
                        Cada projeto é único. Veja alguns dos sistemas que desenvolvemos para nossos clientes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="rounded-2xl p-6 border flex flex-col cursor-default"
                            style={{ background: project.bg, borderColor: 'var(--line)' }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                                    style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,.07)' }}
                                >
                                    {project.emoji}
                                </div>
                                <span
                                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                                    style={{
                                        background: project.statusBg,
                                        color: project.statusColor,
                                        fontFamily: 'Syne',
                                        letterSpacing: '.04em',
                                    }}
                                >
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="font-bold text-base mb-2" style={{ color: 'var(--navy)', fontFamily: 'Syne' }}>
                                {project.title}
                            </h3>
                            <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#64748b' }}>
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                                        style={{
                                            background: '#fff',
                                            color: project.color,
                                            border: `1px solid ${project.color}25`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
