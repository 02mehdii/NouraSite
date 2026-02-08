'use client';

import { motion } from 'framer-motion';
import { BatteryLow, BatteryFull, Clock, Brain } from 'lucide-react';

export default function Problem() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#FDFBF7] to-[#F5F0E8]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-medium text-[#1A3C34] mb-4"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                        Your phone is stealing your <span className="text-gradient-gold">Akhirah.</span>
                    </h2>
                    <p
                        className="text-lg text-[#4A5D58] max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        Every hour spent doomscrolling is an hour lost from remembering Allah.
                        Which one brings you peace?
                    </p>
                </motion.div>

                {/* Comparison cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Left: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative p-8 rounded-3xl bg-white/50 border border-[#4A5D58]/10 shadow-lg"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Before Noura
                        </div>

                        {/* Battery visualization */}
                        <div className="flex items-center justify-center mb-8">
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative"
                            >
                                {/* Custom CSS Battery */}
                                <div className="relative w-32 h-16 rounded-2xl border-4 border-red-400 flex items-center justify-center bg-red-50/50">
                                    <div className="absolute -right-3 w-1.5 h-6 bg-red-400 rounded-r-md" />
                                    <span className="text-2xl font-bold text-red-500" style={{ fontFamily: 'var(--font-outfit)' }}>15%</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-red-50">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-red-400" />
                                    <span className="text-[#4A5D58]" style={{ fontFamily: 'var(--font-outfit)' }}>Daily screen time</span>
                                </div>
                                <span className="font-semibold text-red-500" style={{ fontFamily: 'var(--font-outfit)' }}>5h 23m</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-red-50">
                                <div className="flex items-center gap-3">
                                    <Brain className="w-5 h-5 text-red-400" />
                                    <span className="text-[#4A5D58]" style={{ fontFamily: 'var(--font-outfit)' }}>Duas read</span>
                                </div>
                                <span className="font-semibold text-red-500" style={{ fontFamily: 'var(--font-outfit)' }}>0</span>
                            </div>
                        </div>

                        <p className="mt-6 text-center text-sm text-[#4A5D58] italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            "I feel empty... where did my day go?"
                        </p>
                    </motion.div>

                    {/* Right: The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1A3C34] to-[#2D5A4E] text-white shadow-xl"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            With Noura
                        </div>

                        {/* Battery visualization */}
                        <div className="flex items-center justify-center mb-8">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="relative"
                            >
                                {/* Custom CSS Battery */}
                                <div className="relative w-32 h-16 rounded-2xl border-4 border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10">
                                    <div className="absolute -right-3 w-1.5 h-6 bg-[#D4AF37] rounded-r-md" />
                                    {/* Filled progress bar background for 100% */}
                                    <div className="absolute inset-1 rounded-xl bg-[#D4AF37]/20" />
                                    <span className="relative z-10 text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>100%</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white/10">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-white/80" style={{ fontFamily: 'var(--font-outfit)' }}>Time reclaimed</span>
                                </div>
                                <span className="font-semibold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>3h 45m</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white/10">
                                <div className="flex items-center gap-3">
                                    <Brain className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-white/80" style={{ fontFamily: 'var(--font-outfit)' }}>Duas read</span>
                                </div>
                                <span className="font-semibold text-[#D4AF37]" style={{ fontFamily: 'var(--font-outfit)' }}>47</span>
                            </div>
                        </div>

                        <p className="mt-6 text-center text-sm text-white/70 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            "My heart feels at peace. Alhamdulillah."
                        </p>

                        {/* Decorative glow */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#D4AF37]/20 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
