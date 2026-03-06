'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
    { value: 30, suffix: '+', label: 'Projetos entregues', icon: '🚀' },
    { value: 20, suffix: '+', label: 'Clientes satisfeitos', icon: '🤝' },
    { value: 5, suffix: ' anos', label: 'Experiência no mercado', icon: '📅' },
    { value: 99, suffix: '%', label: 'Taxa de satisfação', icon: '⭐' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let current = 0;
        const step = Math.ceil(target / 50);
        const interval = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [inView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section id="stats" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--deep)' }}>
            <div className="grid-lines" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="section-label" style={{ color: 'var(--sky)' }}>Resultados</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'Syne' }}>
                        Números que falam por si
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center rounded-2xl p-4 sm:p-6"
                            style={{
                                background: 'rgba(255,255,255,.05)',
                                border: '1px solid rgba(255,255,255,.08)',
                            }}
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div
                                className="text-3xl sm:text-4xl font-extrabold text-white mb-1"
                                style={{ fontFamily: 'Syne' }}
                            >
                                <CountUp target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm" style={{ color: 'rgba(200,222,255,.55)' }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
