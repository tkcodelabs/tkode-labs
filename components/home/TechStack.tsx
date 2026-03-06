'use client';

import { motion } from 'framer-motion';

const STACK = [
    { name: 'Next.js', emoji: '▲', color: '#000', bg: '#f4f4f4' },
    { name: 'React', emoji: '⚛️', color: '#61dafb', bg: '#e8f9ff' },
    { name: 'TypeScript', emoji: '📘', color: '#3178c6', bg: '#e8f0fb' },
    { name: 'Tailwind CSS', emoji: '🌊', color: '#06b6d4', bg: '#e8f9fd' },
    { name: 'Node.js', emoji: '🟢', color: '#22863a', bg: '#e8f8ec' },
    { name: 'Supabase', emoji: '🗄', color: '#3ecf8e', bg: '#e8fbf4' },
    { name: 'PostgreSQL', emoji: '🐘', color: '#336791', bg: '#e8edf8' },
    { name: 'Vercel', emoji: '☁️', color: '#000', bg: '#f4f4f4' },
    { name: 'Docker', emoji: '🐳', color: '#2496ed', bg: '#e8f1fc' },
    { name: 'Python', emoji: '🐍', color: '#3776ab', bg: '#e8eef7' },
    { name: 'React Native', emoji: '📱', color: '#61dafb', bg: '#e8f9ff' },
    { name: 'Framer Motion', emoji: '🎞️', color: '#d74ce8', bg: '#fce8fe' },
];

export default function TechStack() {
    return (
        <section id="stack" className="py-28 relative z-10" style={{ background: 'var(--off)' }}>
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label">Stack Tecnológica</div>
                    <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
                        Tecnologias que dominamos
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
                        Usamos as melhores ferramentas do mercado para entregar sistemas robustos, escaláveis e de alta performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {STACK.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default border"
                            style={{ background: '#fff', borderColor: 'var(--line)' }}
                        >
                            <span className="text-3xl">{tech.emoji}</span>
                            <span className="text-xs font-bold text-center" style={{ color: 'var(--navy)', fontFamily: 'Syne' }}>
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
