import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | EquityLens AI",
  description: "Learn how EquityLens AI handles information, analytics, account data, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Learn how EquityLens AI collects, uses, and protects information on this educational stock research platform."
      />

      <div className="mt-10 space-y-10 text-slate-700">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← Back to home
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Introduction</h2>
          <p>
            EquityLens AI is an educational stock research platform. This Privacy Policy explains how we collect and use information, and how we protect it. The platform does not provide investment advice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Information We Collect</h2>
          <p>
            We may collect information that helps deliver the service, improve the website, and provide a better user experience. This includes data entered directly by users and data collected automatically through usage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Account and Authentication Data</h2>
          <p>
            When users create an account or sign in, we may collect authentication and account-related information. This helps manage access and support the features of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Usage and Analytics Data</h2>
          <p>
            We may collect analytics data about how visitors use the site, such as page views, clicks, and session duration. This information helps us improve the educational content and site experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Cookies and Similar Technologies</h2>
          <p>
            The platform may use cookies and similar technologies to remember user preferences, support login sessions, and analyze site performance. These tools are used to make the experience smoother and more reliable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, hosting, and authentication. These providers have their own privacy practices, and we encourage users to review those policies as well.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How We Use Information</h2>
          <p>
            Information is used to deliver and improve the service, communicate with users, and maintain the security of the platform. It is not used to provide investment recommendations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How We Protect Information</h2>
          <p>
            We use reasonable administrative and technical measures to protect information. While no system is completely secure, we aim to safeguard the data that is entrusted to us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Data Retention</h2>
          <p>
            We retain information for as long as needed to provide the service and comply with legal obligations. Data may be deleted when it is no longer required for these purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Your Choices</h2>
          <p>
            Users can manage certain preferences, including how they receive communications. Users may also request access to or deletion of their information as permitted by applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Children’s Privacy</h2>
          <p>
            The service is not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any material changes will be posted on this page with an updated date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out through the contact options available on the website.
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
