'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

const locales = ['en', 'ar', 'fr', 'es'] as const;
type Locale = (typeof locales)[number];

const localeLabels: Record<Locale, string> = {
    en: 'EN',
    ar: 'AR',
    fr: 'FR',
    es: 'ES',
};

export default function LanguageSelector() {
    const locale = useLocale() as Locale;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (newLocale: Locale) => {
        if (newLocale === locale) return;

        // Replace the locale segment in the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

        startTransition(() => {
            router.replace(newPath);
        });
    };

    return (
        <div
            className={`flex items-center gap-1 text-sm ${isPending ? 'opacity-50' : ''}`}
            style={{ fontFamily: 'var(--font-outfit)' }}
        >
            {locales.map((loc, index) => (
                <span key={loc} className="flex items-center">
                    <button
                        onClick={() => switchLocale(loc)}
                        className={`px-2 py-1 rounded transition-colors ${locale === loc
                            ? 'text-[#1A3C34] font-semibold bg-[#1A3C34]/10'
                            : 'text-[#4A5D58] hover:text-[#1A3C34]'
                            }`}
                        disabled={isPending}
                    >
                        {localeLabels[loc]}
                    </button>
                    {index < locales.length - 1 && (
                        <span className="text-[#4A5D58]/30 mx-0.5">|</span>
                    )}
                </span>
            ))}
        </div>
    );
}
