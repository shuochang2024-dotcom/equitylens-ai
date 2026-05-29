import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Pricing | EquityLens AI",
  description: "Pricing UI for EquityLens AI with Free and Pro plan concepts, ready for future Stripe integration.",
};

export default function PricingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Pricing"
        title="Start free. Upgrade when deeper research matters."
        description="The first MVP only includes the pricing interface. It is ready for future Stripe subscription integration."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        <PricingCard
          name="Free"
          price="Free"
          description="For exploring basic stock research pages and market education features."
          features={[
            "Stock search",
            "Basic stock summaries",
            "Limited research scores",
            "Daily market brief",
          ]}
        />
        <PricingCard
          name="Pro"
          price="$9.99"
          description="For users who want deeper research workflows, alerts, and more detailed AI analysis."
          highlighted
          features={[
            "Advanced AI research reports",
            "Watchlist alerts",
            "Earnings call summaries",
            "Valuation comparison",
            "Risk change alerts",
          ]}
        />
      </div>

      <div className="mt-12 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
        {[
          ["No trading execution", "EquityLens AI is not designed to place trades or connect to brokerage accounts."],
          ["Research-first UX", "The product language focuses on research scores, risk context, and plain-English explanations."],
          ["Integration-ready", "The pricing page is structured for future Stripe checkout and account management."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
