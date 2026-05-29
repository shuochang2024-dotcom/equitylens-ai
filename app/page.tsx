import Link from "next/link";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { StockCard } from "@/components/StockCard";
import { stocks, popularTickers } from "@/data/stocks";
import { getStocksByTickers } from "@/lib/utils";

const features = [
  {
    icon: "⌁",
    title: "AI Stock Summaries",
    description: "Turn complex filings, metrics, and market context into clear research summaries for individual investors.",
  },
  {
    icon: "▦",
    title: "Earnings Breakdown",
    description: "Review revenue, margins, earnings quality, free cash flow, guidance, and the main changes to monitor.",
  },
  {
    icon: "◎",
    title: "Research Scores",
    description: "Compare companies through a structured framework across quality, growth, valuation, momentum, sentiment, and risk.",
  },
  {
    icon: "≋",
    title: "Valuation Check",
    description: "Understand whether current market expectations look demanding relative to peers and growth assumptions.",
  },
  {
    icon: "⚠",
    title: "Risk Analysis",
    description: "See key business, valuation, regulatory, execution, and market risks before forming a research view.",
  },
  {
    icon: "◌",
    title: "Watchlist Alerts",
    description: "Track research changes, upcoming earnings, valuation pressure, and other events that may deserve attention.",
  },
];

const comparisonRows = [
  ["Urgent action framing", "Worth researching"],
  ["No context", "Evidence-based insights"],
  ["Only upside", "Upside and risk analysis"],
  ["Emotional opinions", "Structured research framework"],
];

export default function HomePage() {
  const popularStocks = getStocksByTickers(popularTickers).slice(0, 6);

  return (
    <>
      <HeroSection />

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Product features"
            title="Research tools designed for everyday investors"
            description="EquityLens AI focuses on clarity, evidence, and risk awareness rather than prediction-first market hype."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Product boundary</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Not stock tips. Evidence-based research.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                EquityLens AI is designed to help investors understand public companies through structured data, plain-English explanations, and visible risk context.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-2 border-b border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold">
                <span>Hype-driven stock tips</span>
                <span>EquityLens AI</span>
              </div>
              {comparisonRows.map(([left, right]) => (
                <div key={left} className="grid grid-cols-2 border-b border-white/10 px-5 py-4 text-sm last:border-b-0">
                  <span className="text-slate-300">{left}</span>
                  <span className="font-medium text-white">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Popular stocks</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Start with widely followed tickers</h2>
            </div>
            <Link href="/stocks" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:border-blue-200 hover:text-blue-700">
              View all stocks
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {popularStocks.map((stock) => (
              <StockCard key={stock.ticker} stock={stock} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Disclaimer />
        </Container>
      </section>
    </>
  );
}
