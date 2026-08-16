import Link from 'next/link';

export default function Privacy() {
  return (
    <div>
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-mid leading-relaxed">
            <p><strong>Last updated:</strong> January 2026</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Information We Collect</h2>
            <p>When you submit a form on our website, we collect your name, business name, email address, phone number (if provided), country, industry, service interests, budget range, and project details. This information is used solely to respond to your inquiry and discuss your project.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your project inquiry within 24 hours</li>
              <li>Provide you with a custom project quote</li>
              <li>Communicate about ongoing projects if you become a client</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Data Storage</h2>
            <p>Form submissions are processed through secure third-party form services and stored with appropriate security measures. We retain your data only as long as necessary to serve your inquiry or project.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Cookies</h2>
            <p>This website uses minimal, essential cookies for functionality. We do not use third-party advertising or tracking cookies.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us via our <Link href="/contact" className="text-indigo">contact form</Link> to make such a request.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Contact</h2>
            <p>If you have any questions about this privacy policy, please <Link href="/contact" className="text-indigo">get in touch</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
