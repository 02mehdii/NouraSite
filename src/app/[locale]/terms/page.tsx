import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('terms');

    return (
        <main className="min-h-screen bg-[#FDFBF7] py-24">
            <div className="max-w-3xl mx-auto px-6">
                <h1
                    className="text-4xl md:text-5xl font-medium text-[#1A3C34] mb-4"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    {t('title')}
                </h1>
                <p
                    className="text-[#4A5D58] mb-12"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                >
                    {t('lastUpdated')}
                </p>

                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-outfit)' }}>
                    <p className="text-[#4A5D58] mb-8 leading-relaxed">
                        {t('intro')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section1Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section1Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section2Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section2Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section3Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section3Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section4Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section4Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section5Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section5Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section6Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section6Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section7Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section7Content')}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-medium text-[#1A3C34] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {t('section8Title')}
                        </h2>
                        <p className="text-[#4A5D58] leading-relaxed">
                            {t('section8Content')}
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-[#1A3C34]/10">
                    <a
                        href={`/${locale}`}
                        className="text-[#D4AF37] hover:text-[#1A3C34] transition-colors"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
