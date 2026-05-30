import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service | EquityLens AI",
  description: "Review the terms for using EquityLens AI, an educational U.S. stock research platform.",
};

export default function TermsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Review the terms for using EquityLens AI, an educational stock research platform in the U.S."
      />

      <div className="mt-10 space-y-10 text-slate-700">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← Back to home
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Acceptance of Terms</h2>
          <p>
            By accessing or using EquityLens AI, you agree to these terms. The site is provided as an educational resource for U.S. stock research and is not a financial advisor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Educational and Informational Use Only</h2>
          <p>
            EquityLens AI is intended for educational and informational purposes only. The content is designed to help users learn about stock research concepts and should not be treated as advice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">No Investment Advice</h2>
          <p>
            The platform does not provide investment advice, trading advice, or recommendations to buy or sell any securities. Users should make their own decisions based on their own research.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">No Financial, Legal, or Tax Advice</h2>
          <p>
            The content on EquityLens AI is not intended to serve as financial, legal, or tax advice. Users should consult qualified professionals for those matters.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">No Guarantee of Accuracy or Performance</h2>
          <p>
            We aim to provide accurate educational resources, but we do not guarantee completeness or performance. Historical information or examples should not be relied upon as a prediction of future outcomes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">User Responsibilities</h2>
          <p>
            Users are responsible for their own use of the platform. It is important to verify information and use the content as a starting point for learning rather than as a decision-making system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Account Access</h2>
          <p>
            Account access is managed through authentication providers. Users should keep their login credentials secure and notify us if they suspect unauthorized access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Third-Party Data and Services</h2>
          <p>
            The platform may use third-party data and services for analytics, authentication, and hosting. We are not responsible for the policies or accuracy of third-party providers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Acceptable Use</h2>
          <p>
            Users should use the site responsibly and not engage in abusive, disruptive, or illegal behavior. This includes respecting the rights of others and abiding by applicable laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Intellectual Property</h2>
          <p>
            The content and design of EquityLens AI are protected by intellectual property rights. Users may view and use the material for personal educational purposes only.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, EquityLens AI is not liable for any losses arising from use of the site. The platform is intended to support learning, not to guarantee results.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Changes to the Service</h2>
          <p>
            We may update the site, features, or these terms from time to time. Continued use of the service after changes means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Termination</h2>
          <p>
            We may suspend or terminate access for users who violate these terms or misuse the platform. Access may also be ended if the service is discontinued.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Governing Terms</h2>
          <p>
            These terms govern use of EquityLens AI. They are intended to provide clear expectations for the educational nature of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
          <p>
            If you have questions about these terms, please use the contact options available on the website. We welcome feedback and questions about the educational platform.
          </p>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
          <p>
            EquityLens AI is for educational and informational purposes only and does not provide investment advice, financial advice, trading advice, legal advice, or tax advice.
          </p>
        </div>
      </div>
    </Container>
  );
}
