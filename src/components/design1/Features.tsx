'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, BookOpen, Clock, Library, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Feature {
    id: string;
    translationKey: string;
    icon: LucideIcon;
    image: string;
    color: string;
}

const features: Feature[] = [
    {
        id: 'widgets',
        translationKey: 'widgets',
        icon: LayoutGrid,
        image: '/screenshots/widgetsnoura.png',
        color: '#D4AF37',
    },
    {
        id: 'quran',
        translationKey: 'quran',
        icon: BookOpen,
        image: '/screenshots/quranreadernoura.png',
        color: '#1A3C34',
    },
    {
        id: 'prayer',
        translationKey: 'prayer',
        icon: Clock,
        image: '/screenshots/prayertimes.png',
        color: '#2D5A4E',
    },
    {
        id: 'library',
        translationKey: 'library',
        icon: Library,
        image: '/screenshots/library.png',
        color: '#4A5D58',
    },
];

export default function Features() {
    const t = useTranslations('features');

    return (
        <section id="features" className="relative py-24 bg-gradient-to-b from-[#F5F0E8] to-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">
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
                        {t('title')} <span className="text-gradient-gold">{t('titleHighlight')}</span>
                    </h2>
                    <p
                        className="text-lg text-[#4A5D58] mt-4 max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-3xl bg-white border border-[#1A3C34]/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Text Content */}
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ background: `${feature.color}15` }}
                                    >
                                        <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                                    </div>
                                    <h3
                                        className="text-2xl md:text-3xl font-medium text-[#1A3C34] mb-3"
                                        style={{ fontFamily: 'var(--font-cormorant)' }}
                                    >
                                        {t(`${feature.translationKey}.title`)}
                                    </h3>
                                    <p
                                        className="text-[#4A5D58] leading-relaxed"
                                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                                    >
                                        {t(`${feature.translationKey}.description`)}
                                    </p>
                                </div>

                                {/* Screenshot */}
                                <div className="relative w-full lg:w-[200px] h-[400px] lg:h-auto flex-shrink-0">
                                    <div className="absolute inset-0 lg:relative lg:h-full">
                                        <motion.div
                                            className="relative h-full flex items-center justify-center p-4 lg:p-0"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="relative w-[180px] lg:w-[160px] rounded-[28px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                                                <Image
                                                    src={feature.image}
                                                    alt={t(`${feature.translationKey}.title`)}
                                                    width={160}
                                                    height={347}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Gradient overlay for mobile */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden pointer-events-none" />
                                </div>
                            </div>

                            {/* Decorative accent line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, ${feature.color}, ${feature.color}50)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p
                        className="text-[#4A5D58] text-lg"
                        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}
                    >
                        {t('more')} <span className="text-[#1A3C34] font-medium">{t('ramadanMode')}</span>, <span className="text-[#1A3C34] font-medium">{t('streakTracking')}</span>, <span className="text-[#1A3C34] font-medium">{t('goodDeedsCounter')}</span>...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
