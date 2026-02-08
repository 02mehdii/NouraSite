'use client';

import { motion } from 'framer-motion';
import { Apple, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#FDFBF7]">
            {/* Watercolor texture overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            radial-gradient(ellipse at 20% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(26, 60, 52, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(143, 166, 158, 0.1) 0%, transparent 60%)
          `,
                }}
            />

            {/* Subtle organic shapes */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-40 right-20 w-96 h-96 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #1A3C34 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
                {/* Navigation */}
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-between mb-20"
                >
                    <div className="flex items-center gap-3">
                        <Image
                            src="/screenshots/nouralogo.png"
                            alt="Noura Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span
                            className="text-2xl font-semibold text-[#1A3C34]"
                            style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                            Noura
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Features</a>
                        <a href="#how-it-works" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>How It Works</a>
                        <a href="#download" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Download</a>
                    </div>
                </motion.nav>

                {/* Hero content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C34]/10 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm text-[#1A3C34]" style={{ fontFamily: 'var(--font-outfit)' }}>
                                Ramadan 2026 Ready
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#1A3C34] leading-tight mb-6"
                            style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                            Quit the Scroll.
                            <br />
                            <span className="text-gradient-gold">Connect to the Soul.</span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className="text-xl text-[#4A5D58] mb-10 max-w-lg leading-relaxed"
                            style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                        >
                            The first Islamic focus app that forces you to read Duas to unlock social media.
                            <span className="text-[#1A3C34] font-medium"> Reclaim your heart before Ramadan.</span>
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-8 py-4 bg-[#1A3C34] text-white rounded-full shadow-xl shadow-[#1A3C34]/20 hover:shadow-2xl hover:shadow-[#1A3C34]/30 transition-all duration-300"
                        >
                            <Apple className="w-6 h-6" />
                            <span style={{ fontFamily: 'var(--font-outfit)' }} className="font-medium">
                                Download for iOS
                            </span>
                            <motion.span
                                className="text-[#D4AF37]"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.button>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 mt-10 text-sm text-[#4A5D58]" style={{ fontFamily: 'var(--font-outfit)' }}>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A3C34] to-[#2D5A4E] border-2 border-[#FDFBF7]" />
                                    ))}
                                </div>
                                <span>1k+ Muslims</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span key={i} className="text-[#D4AF37]">★</span>
                                ))}
                                <span className="ml-1">4.9 on App Store</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Screenshot with bounce effect */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            {/* Screenshot with shadow and rounded corners */}
                            <div className="relative w-[280px] md:w-[320px] rounded-[40px] overflow-hidden shadow-2xl shadow-[#1A3C34]/30">
                                <Image
                                    src="/screenshots/mainscreennoura.png"
                                    alt="Noura App Home Screen"
                                    width={320}
                                    height={693}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>

                            {/* Subtle glow behind */}
                            <div className="absolute -inset-4 -z-10 rounded-[50px] bg-gradient-to-br from-[#D4AF37]/20 to-[#1A3C34]/20 blur-2xl" />
                        </motion.div>

                        {/* Floating decorative elements */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#1A3C34]/10 shadow-lg flex items-center justify-center"
                            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        >
                            <span className="text-3xl">🤲</span>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-20 -right-8 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-[#1A3C34]/10 shadow-lg"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                        >
                            <p className="text-sm text-[#1A3C34]" style={{ fontFamily: 'var(--font-outfit)' }}>
                                <span className="text-[#D4AF37] font-semibold">+2.5h</span> reclaimed today
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z"
                        fill="#1A3C34"
                        fillOpacity="0.05"
                    />
                </svg>
            </div>
        </section>
    );
}
