import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { EarningsCard } from "@/components/EarningsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { earnings } from "@/data/earnings";

export const metadata: Metadata = {
  title: "Earnings Breakdown | EquityLens AI",
  description: "Mock earnings breakdowns with revenue, EPS, AI summaries, and key risks for widely followed U.S. stocks.",
};

export default function EarningsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Earnings"
        title="Earnings Breakdown"
        description="Quickly review recent earnings snapshots, AI summaries, and the main risk each report highlights."
      />
      <div className="mt-12 grid gap-5">
        {earnings.map((item) => (
          <EarningsCard key={item.ticker} item={item} />
        ))}
      </div>
      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
