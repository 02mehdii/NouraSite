'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhoneMockupProps {
    imageSrc: string;
    alt: string;
    variant?: 'sacred' | 'digital';
    className?: string;
    glowColor?: string;
    rotation?: number;
}

export default function PhoneMockup({
    imageSrc,
    alt,
    variant = 'sacred',
    className = '',
    glowColor,
    rotation = -5
}: PhoneMockupProps) {
    const defaultGlow = variant === 'sacred' ? '#D4AF37' : '#10B981';
    const glow = glowColor || defaultGlow;

    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ y: 50, opacity: 0, rotate: rotation }}
            animate={{ y: 0, opacity: 1, rotate: rotation }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Glow effect behind phone */}
            <div
                className="absolute inset-0 -z-10 animate-glow-pulse rounded-[3rem] scale-110"
                style={{
                    background: `radial-gradient(ellipse at center, ${glow}40 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                }}
            />

            {/* Phone frame container */}
            <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* iPhone frame */}
                <div
                    className={`
            relative overflow-hidden rounded-[2.5rem] p-2
            ${variant === 'sacred'
                            ? 'bg-gradient-to-br from-[#E8D5B5] via-[#C9B896] to-[#A89070]'
                            : 'bg-gradient-to-br from-[#2D2D2D] via-[#1A1A1A] to-[#0D0D0D] border border-[#333]'
                        }
          `}
                    style={{
                        boxShadow: variant === 'sacred'
                            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.3)'
                            : `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${glow}20`,
                    }}
                >
                    {/* Inner bezel */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-black">
                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[28px] bg-black rounded-full" />

                        {/* Screen content */}
                        <div className="relative w-[240px] h-[520px] md:w-[280px] md:h-[600px]">
                            <Image
                                src={imageSrc}
                                alt={alt}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Side button */}
                <div
                    className={`
            absolute right-[-2px] top-[100px] w-[3px] h-[60px] rounded-r-full
            ${variant === 'sacred'
                            ? 'bg-gradient-to-b from-[#C9B896] to-[#A89070]'
                            : 'bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]'
                        }
          `}
                />

                {/* Volume buttons */}
                <div
                    className={`
            absolute left-[-2px] top-[80px] w-[3px] h-[30px] rounded-l-full
            ${variant === 'sacred'
                            ? 'bg-gradient-to-b from-[#C9B896] to-[#A89070]'
                            : 'bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]'
                        }
          `}
                />
                <div
                    className={`
            absolute left-[-2px] top-[120px] w-[3px] h-[50px] rounded-l-full
            ${variant === 'sacred'
                            ? 'bg-gradient-to-b from-[#C9B896] to-[#A89070]'
                            : 'bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]'
                        }
          `}
                />
            </motion.div>
        </motion.div>
    );
}
