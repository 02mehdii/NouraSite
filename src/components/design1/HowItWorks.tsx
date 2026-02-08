'use client';

import { motion } from 'framer-motion';
import { Shield, HandHeart, Heart, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Shield',
        description: 'Block distracting apps when you need focus. TikTok, Instagram, Twitter—choose your battles.',
        icon: Shield,
        color: '#1A3C34',
    },
    {
        number: '02',
        title: 'Key',
        description: 'Try to open them? You must first read a beautiful Dua. A spiritual toll for your soul.',
        icon: HandHeart,
        color: '#D4AF37',
    },
    {
        number: '03',
        title: 'Reward',
        description: 'Unlock your app with a reminded heart. Every bypass becomes a moment of remembrance.',
        icon: Heart,
        color: '#2D5A4E',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 bg-[#FDFBF7]">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
                    style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span
                        className="text-[#D4AF37] text-sm uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        How It Works
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-medium text-[#1A3C34] mt-4"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                        Your path to digital <span className="text-gradient-gold">Ihsan</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-px bg-gradient-to-r from-[#1A3C34]/20 via-[#D4AF37]/40 to-[#2D5A4E]/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Step card */}
                            <div className="relative p-8 rounded-3xl bg-white border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {/* Number badge */}
                                <div
                                    className="absolute -top-4 left-8 px-4 py-1 rounded-full text-white text-sm font-medium"
                                    style={{
                                        fontFamily: 'var(--font-outfit)',
                                        background: step.color
                                    }}
                                >
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4"
                                    style={{ background: `${step.color}15` }}
                                >
                                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                                </div>

                                {/* Content */}
                                <h3
                                    className="text-2xl font-medium text-[#1A3C34] mb-3"
                                    style={{ fontFamily: 'var(--font-cormorant)' }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-[#4A5D58] leading-relaxed"
                                    style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                                >
                                    {step.description}
                                </p>

                                {/* Arrow for non-last items (mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden flex justify-center mt-6">
                                        <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90" />
                                    </div>
                                )}
                            </div>

                            {/* Arrow between cards (desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-[100px] -right-[28px] z-10">
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-6 h-6 text-[#D4AF37]" />
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Arabic Dua preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#1A3C34] to-[#2D5A4E] text-center max-w-2xl mx-auto"
                >
                    <p className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
                        Example Dua
                    </p>
                    <p className="text-3xl text-white mb-4" style={{ fontFamily: 'var(--font-cormorant)', direction: 'rtl' }}>
                        رَبِّ اغْفِرْ لِي
                    </p>
                    <p className="text-white/80 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                        "My Lord, forgive me."
                    </p>
                    <p className="text-white/50 text-sm mt-2" style={{ fontFamily: 'var(--font-outfit)' }}>
                        — Read before unlocking TikTok
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
