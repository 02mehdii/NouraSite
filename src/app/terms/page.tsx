import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service - Noura',
    description: 'Terms of Service for Noura - The Islamic Focus App',
};

export default function TermsOfService() {
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
                    Terms of Service
                </h1>

                <p className="text-[#4A5D58] mb-12" style={{ fontFamily: 'var(--font-outfit)' }}>
                    Last Updated: February 8, 2026
                </p>

                <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-outfit)' }}>
                    <p className="text-[#4A5D58] leading-relaxed mb-8">
                        Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Noura mobile application (the &quot;Service&quot;) operated by Mehdi (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                    </p>

                    <p className="text-[#4A5D58] leading-relaxed mb-8">
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>

                    <Section title="1. Acknowledgement">
                        <p>
                            These Terms are concluded between you and us only, and not with Apple Inc. We are solely responsible for the Service and the content thereof. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Service.
                        </p>
                    </Section>

                    <Section title="2. Subscriptions and Payments">
                        <p>
                            Noura offers auto-renewing subscription options to access premium features (&quot;Noura Pro&quot;).
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Billing:</strong> Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
                            <li><strong>Renewal:</strong> Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
                            <li><strong>Charges:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                            <li><strong>Management:</strong> You can manage and cancel your subscriptions by going to your account settings on the App Store after purchase.</li>
                            <li><strong>Free Trial:</strong> Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable.</li>
                        </ul>
                    </Section>

                    <Section title="3. Medical & Religious Disclaimer">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Not Medical Advice:</strong> Noura is a productivity tool, not a medical treatment for ADHD or addiction. Consult a professional for health concerns.</li>
                            <li><strong>Religious Accuracy:</strong> While we strive for accuracy in Prayer Times, Qibla, and Quranic text, technical errors may occur. Users should verify critical religious timings with local mosques if unsure.</li>
                        </ul>
                    </Section>

                    <Section title="4. Intellectual Property">
                        <p>
                            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Noura and its licensors.
                        </p>
                    </Section>

                    <Section title="5. Limitation of Liability">
                        <p>
                            In no event shall Noura, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </Section>

                    <Section title="6. Governing Law">
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of United States, without regard to its conflict of law provisions.
                        </p>
                    </Section>

                    <Section title="7. Changes">
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        </p>
                    </Section>

                    <Section title="8. Contact Us">
                        <p>If you have any questions about these Terms, please contact us:</p>
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
