import Link from 'next/link';

export default function Terms() {
  return (
    <div>
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-mid leading-relaxed">
            <p><strong>Last updated:</strong> January 2026</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Overview</h2>
            <p>Amplifai provides website design & development and ad creative production services to small and medium-sized businesses. By using this website or engaging our services, you agree to these terms.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Services</h2>
            <p>All projects are custom-quoted based on scope and requirements. Prices, timelines, and deliverables are agreed upon before any work begins and documented in a project agreement or proposal.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Payment</h2>
            <p>Payment terms are specified in individual project agreements. Typical arrangements include an upfront deposit before work begins and a final payment upon delivery.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Intellectual Property</h2>
            <p>Upon full payment, all final deliverables (website files, ad creative assets) are transferred to the client. Amplifai retains the right to showcase completed work in our portfolio unless otherwise agreed.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Revisions</h2>
            <p>The number of included revisions is specified in each project agreement. Additional revisions beyond the agreed scope may incur extra charges at a pre-agreed rate.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Limitation of Liability</h2>
            <p>Amplifai is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability is limited to the amount paid for the specific project in question.</p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mt-8">Contact</h2>
            <p>If you have any questions about these terms, please <Link href="/contact" className="text-indigo">get in touch</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
