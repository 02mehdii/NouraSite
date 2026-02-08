import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy - Noura',
    description: 'Privacy Policy for Noura - The Islamic Focus App',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* Header */}
            <header className="max-w-4xl mx-auto px-6 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#4A5D58] hover:text-[#1A3C34] transition-colors"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </header>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-6 pb-24">
                <h1
                    className="text-4xl md:text-5xl font-medium text-[#1A3C34] mb-4"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    Privacy Policy
                </h1>

                <p className="text-[#4A5D58] mb-12" style={{ fontFamily: 'var(--font-outfit)' }}>
                    Last Updated: February 8, 2026
                </p>

                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-outfit)' }}>
                    <p className="text-[#4A5D58] leading-relaxed mb-8">
                        Noura (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Noura.
                    </p>

                    <p className="text-[#4A5D58] leading-relaxed mb-8">
                        This Privacy Policy applies to our website, and its associated subdomains (collectively, our &quot;Service&quot;) alongside our application, Noura. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                    </p>

                    <Section title="1. Information We Collect">
                        <Subsection title="A. Personal Data">
                            <p>We collect minimal personal data to provide the Service. This may include:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li><strong>Name:</strong> To personalize the home screen greeting.</li>
                                <li><strong>Subscription Data:</strong> We use RevenueCat and Apple&apos;s In-App Purchase system to process payments. We do not store or have access to your credit card information.</li>
                            </ul>
                        </Subsection>

                        <Subsection title="B. Location Data (Prayer Times & Qibla)">
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Purpose:</strong> To calculate accurate prayer times (Salah) and determine the Qibla direction based on your geographic location.</li>
                                <li><strong>Privacy:</strong> This data is processed locally on your device. We do not track, store, or share your precise location history with our servers or third parties.</li>
                            </ul>
                        </Subsection>

                        <Subsection title="C. Screen Time & Device Activity (FamilyControls)">
                            <p>Noura utilizes Apple&apos;s Screen Time API (FamilyControls) to provide app blocking features.</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li><strong>Strict Privacy:</strong> We cannot see which websites you visit, who you message, or the specific content of your apps.</li>
                                <li><strong>Usage:</strong> The API is strictly used to restrict access to apps you select during your specified &quot;Focus Sessions.&quot;</li>
                                <li><strong>No Data Transmission:</strong> Your screen time usage data remains on your device and is not sent to Noura&apos;s servers.</li>
                            </ul>
                        </Subsection>
                    </Section>

                    <Section title="2. How We Use Your Information">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Provide, operate, and maintain our app.</li>
                            <li>Calculate accurate prayer times and Qibla direction.</li>
                            <li>Process subscription payments.</li>
                            <li>Send local notifications (Adhan, Focus reminders) directly from the device.</li>
                        </ul>
                    </Section>

                    <Section title="3. Data Storage and Security">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Local Storage:</strong> The majority of your data (Journal entries, Good Deeds stats, Focus history) is stored locally on your device or synced via your personal iCloud account.</li>
                            <li><strong>Security:</strong> We implement a variety of security measures to maintain the safety of your personal information.</li>
                        </ul>
                    </Section>

                    <Section title="4. Third-Party Services">
                        <p>We may employ third-party companies and individuals due to the following reasons:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>RevenueCat:</strong> To manage subscription infrastructure.</li>
                            <li><strong>Apple iCloud:</strong> To sync your preferences across your devices.</li>
                        </ul>
                        <p className="mt-4">
                            These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </Section>

                    <Section title="5. Children's Privacy">
                        <p>
                            We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                        </p>
                    </Section>

                    <Section title="6. Changes to This Privacy Policy">
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </Section>

                    <Section title="7. Contact Us">
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <p className="mt-2">
                            <strong>Email:</strong>{' '}
                            <a href="mailto:getnouraapp@gmail.com" className="text-[#1A3C34] underline hover:text-[#D4AF37]">
                                getnouraapp@gmail.com
                            </a>
                        </p>
                    </Section>
                </div>
            </article>
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2
                className="text-2xl font-medium text-[#1A3C34] mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
            >
                {title}
            </h2>
            <div className="text-[#4A5D58] leading-relaxed space-y-4">
                {children}
            </div>
        </section>
    );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#1A3C34] mb-2">{title}</h3>
            <div className="text-[#4A5D58]">{children}</div>
        </div>
    );
}
