'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Ahmed K.',
        role: 'Software Engineer',
        quote: 'Noura changed my relationship with my phone. Now every time I mindlessly reach for Instagram, I\'m reminded of Allah instead. SubhanAllah.',
        rating: 5,
        avatar: '👨‍💻',
    },
    {
        name: 'Fatima S.',
        role: 'Medical Student',
        quote: 'I reclaimed 3+ hours daily for studying and Quran. My exam scores improved and my heart feels lighter. This app is a true blessing.',
        rating: 5,
        avatar: '👩‍⚕️',
    },
    {
        name: 'Omar M.',
        role: 'Business Owner',
        quote: 'The Dua-to-unlock feature is genius. I\'ve memorized more duas in 2 weeks than I did in 2 years. Highly recommend for every Muslim.',
        rating: 5,
        avatar: '👨‍💼',
    },
];

export default function Testimonials() {
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
                        Testimonials
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-medium text-[#1A3C34] mt-4"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                        Join the <span className="text-gradient-gold">Digital Detox</span> Movement
                    </h2>
                    <p
                        className="text-lg text-[#4A5D58] max-w-2xl mx-auto mt-4"
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        10,000+ Muslims are reclaiming their time and reconnecting with their Deen.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-8 rounded-3xl bg-white border border-[#1A3C34]/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 right-8">
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
                                "{testimonial.quote}"
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
                                        {testimonial.name}
                                    </p>
                                    <p
                                        className="text-sm text-[#4A5D58]"
                                        style={{ fontFamily: 'var(--font-outfit)' }}
                                    >
                                        {testimonial.role}
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
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>Active Users</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>2.5M+</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>Duas Read</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>500K+</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>Hours Reclaimed</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>4.9★</p>
                            <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)' }}>App Store Rating</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
