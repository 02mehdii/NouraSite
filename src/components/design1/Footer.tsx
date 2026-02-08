'use client';

import { motion } from 'framer-motion';
import { Apple, Moon, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="download" className="relative py-24 bg-gradient-to-b from-[#FDFBF7] to-[#F0EBE0] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
                />
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #1A3C34 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                {/* Ramadan countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A3C34]/10 mb-8"
                >
                    <Moon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[#1A3C34]" style={{ fontFamily: 'var(--font-outfit)' }}>
                        Ramadan 2026 starts in <span className="font-semibold text-[#D4AF37]">~24 days</span>
                    </span>
                </motion.div>

                {/* Main CTA */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A3C34] mb-6"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    Are you ready to <span className="text-gradient-gold">focus?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-[#4A5D58] mb-10 max-w-xl mx-auto"
                    style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                >
                    Start your digital detox journey today. Your heart will thank you.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 px-10 py-5 bg-[#1A3C34] text-white rounded-full shadow-xl shadow-[#1A3C34]/20 hover:shadow-2xl hover:shadow-[#1A3C34]/30 transition-all duration-300 mx-auto"
                    >
                        <Apple className="w-7 h-7" />
                        <span style={{ fontFamily: 'var(--font-outfit)' }} className="font-medium text-lg">
                            Download for iOS — Free
                        </span>
                    </motion.button>

                    <p className="mt-4 text-sm text-[#4A5D58]" style={{ fontFamily: 'var(--font-outfit)' }}>
                        Available on the App Store • No subscription required to start
                    </p>
                </motion.div>

                {/* Footer links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 pt-8 border-t border-[#1A3C34]/10"
                >
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <a href="/privacy" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Privacy Policy</a>
                        <a href="/terms" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Terms of Service</a>
                        <a href="mailto:getnouraapp@gmail.com" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Support</a>
                        <a href="mailto:getnouraapp@gmail.com" className="text-[#4A5D58] hover:text-[#1A3C34] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>Contact</a>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[#4A5D58]" style={{ fontFamily: 'var(--font-outfit)' }}>
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                        <span>for the Ummah</span>
                    </div>

                    <p className="mt-4 text-sm text-[#4A5D58]/60" style={{ fontFamily: 'var(--font-outfit)' }}>
                        © 2026 Noura. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
