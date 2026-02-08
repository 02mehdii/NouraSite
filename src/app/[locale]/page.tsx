import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/design1/Hero';
import Problem from '@/components/design1/Problem';
import HowItWorks from '@/components/design1/HowItWorks';
import Features from '@/components/design1/Features';
import Testimonials from '@/components/design1/Testimonials';
import Footer from '@/components/design1/Footer';

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <Problem />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Footer />
        </main>
    );
}
