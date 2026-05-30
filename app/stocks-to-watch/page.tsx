import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";
import { StockCard } from "@/components/StockCard";
import { stocks } from "@/data/stocks";

export const metadata: Metadata = {
  title: "Stocks to Watch | EquityLens AI",
  description: "Research-focused U.S. stock lists for AI stocks, tech stocks, growth stocks, dividend stocks, valuation ideas, and momentum names.",
};

const sections = [
  {
    title: "AI Stocks to Watch",
    description: "Companies with meaningful exposure to AI infrastructure, chips, cloud platforms, or AI software adoption.",
    tickers: ["NVDA", "MSFT", "GOOGL", "AMD", "PLTR", "SMCI"],
  },
  {
    title: "Tech Stocks to Watch",
    description: "Large-cap and growth-oriented technology companies with broad investor attention.",
    tickers: ["AAPL", "MSFT", "AMZN", "META", "GOOGL", "NVDA"],
  },
  {
    title: "High Growth Stocks",
    description: "Companies where revenue growth and reinvestment remain key research variables.",
    tickers: ["NVDA", "SMCI", "META", "PLTR", "AMD", "AMZN"],
  },
  {
    title: "Dividend Stocks to Watch",
    description: "Mature companies and cash-generative platforms where capital return can matter to investors.",
    tickers: ["AAPL", "MSFT", "META"],
  },
  {
    title: "Undervalued Stocks to Research",
    description: "Names with comparatively balanced valuation scores inside this mock research dataset.",
    tickers: ["GOOGL", "META", "MSFT", "AMZN"],
  },
  {
    title: "High Momentum Stocks",
    description: "Stocks where price trend and market attention are currently stronger in the mock score model.",
    tickers: ["NVDA", "PLTR", "AMD", "META", "MSFT"],
  },
];

function getSectionStocks(tickers: string[]) {
  return tickers
    .map((ticker) => stocks.find((stock) => stock.ticker === ticker))
    .filter((stock): stock is NonNullable<typeof stock> => Boolean(stock));
}

export default function StocksToWatchPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Research lists"
        title="Stocks to Watch"
        description="Research-oriented lists built from mock data. The goal is to support structured discovery, not to provide personalized investment advice."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Link
          href="/lists/ai-stocks-to-watch"
          className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">AI Stocks</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">AI Stocks to Watch</h3>
          <p className="mt-2 text-sm text-slate-600">Explore key AI exposure names, research scores, and valuation context.</p>
        </Link>
        <Link
          href="/lists/chinese-adr-stocks-to-watch"
          className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Chinese ADRs</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">Chinese ADR Stocks to Watch</h3>
          <p className="mt-2 text-sm text-slate-600">Review Chinese ADR companies with notable global investor exposure.</p>
        </Link>
        <Link
          href="/lists/semiconductor-stocks-to-watch"
          className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-lg"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Semiconductors</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">Semiconductor Stocks to Watch</h3>
          <p className="mt-2 text-sm text-slate-600">Learn about semiconductor-related names, valuation signals, and risk considerations.</p>
        </Link>
      </div>

      <div className="mt-14 space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{section.description}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {getSectionStocks(section.tickers).map((stock) => (
                <StockCard key={`${section.title}-${stock.ticker}`} stock={stock} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14">
        <Disclaimer />
      </div>
    </Container>
  );
}
