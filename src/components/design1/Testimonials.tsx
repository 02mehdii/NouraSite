'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Testimonial {
    translationKey: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        translationKey: 'testimonial1',
        rating: 5,
        avatar: '👨‍💻',
    },
    {
        translationKey: 'testimonial2',
        rating: 5,
        avatar: '👩‍⚕️',
    },
    {
        translationKey: 'testimonial3',
        rating: 5,
        avatar: '👨‍💼',
    },
];

export default function Testimonials() {
    const t = useTranslations('testimonials');

    return (
        <section className="relative py-24 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-[#D4AF37] text-sm uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        {t('label')}
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-medium text-[#1A3C34] mt-4"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                        {t('title')} <span className="text-gradient-gold">{t('titleHighlight')}</span> {t('titleEnd')}
                    </h2>
                    <p
                        className="text-lg text-[#4A5D58] max-w-2xl mx-auto mt-4"
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.translationKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-8 rounded-3xl bg-white border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 end-8">
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p
                                className="text-[#4A5D58] leading-relaxed mb-6 italic"
                                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
                            >
                                &quot;{t(`${testimonial.translationKey}.quote`)}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A3C34] to-[#2D5A4E] flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p
                                        className="font-medium text-[#1A3C34]"
                                        style={{ fontFamily: 'var(--font-outfit)' }}
                                    >
                                        {t(`${testimonial.translationKey}.name`)}
                                    </p>
                                    <p
                                        className="text-sm text-[#4A5D58]"
                                        style={{ fontFamily: 'var(--font-outfit)' }}
                                    >
                                        {t(`${testimonial.translationKey}.role`)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1A3C34] to-[#2D5A4E] text-white"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>10K+</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>{t('stats.activeUsers')}</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>2.5M+</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>{t('stats.duasRead')}</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>500K+</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>{t('stats.hoursReclaimed')}</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>4.9★</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>{t('stats.appStoreRating')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
