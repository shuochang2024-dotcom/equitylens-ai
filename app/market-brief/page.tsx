import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { MarketBriefCard } from "@/components/MarketBriefCard";
import { SectionHeader } from "@/components/SectionHeader";
import { marketBrief } from "@/data/marketBrief";

export const metadata: Metadata = {
  title: "Daily Market Brief | EquityLens AI",
  description: "A mock daily market brief covering major indexes, top movers, AI stocks, earnings highlights, risk events, and stocks to watch.",
};

export default function MarketBriefPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Daily brief"
        title="Daily Market Brief"
        description="A structured market overview for individual investors. This MVP uses mock market data."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <MarketBriefCard title="Major Indexes">
          <div className="grid gap-3">
            {marketBrief.majorIndexes.map((index) => (
              <div key={index.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="font-medium text-slate-800">{index.name}</span>
                <div className="text-right">
                  <p className="font-semibold text-slate-950">{index.value}</p>
                  <p className={`text-sm font-semibold ${index.change.startsWith("+") ? "text-emerald-700" : "text-red-700"}`}>{index.change}</p>
                </div>
              </div>
            ))}
          </div>
        </MarketBriefCard>

        <MarketBriefCard title="Top Movers">
          <div className="grid gap-3">
            {marketBrief.topMovers.map((mover) => (
              <Link key={mover.ticker} href={`/stocks/${mover.ticker.toLowerCase()}`} className="block rounded-2xl bg-slate-50 p-4 hover:bg-blue-50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-950">{mover.ticker}</p>
                    <p className="text-sm text-slate-500">{mover.name}</p>
                  </div>
                  <p className={`font-semibold ${mover.change.startsWith("+") ? "text-emerald-700" : "text-red-700"}`}>{mover.change}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{mover.note}</p>
              </Link>
            ))}
          </div>
        </MarketBriefCard>

        <MarketBriefCard title="AI Stocks Update">
          <p className="text-sm leading-7 text-slate-600">{marketBrief.aiStocksUpdate}</p>
        </MarketBriefCard>

        <MarketBriefCard title="Earnings Highlights">
          <ul className="space-y-3">
            {marketBrief.earningsHighlights.map((item) => (
              <li key={item} className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-800">{item}</li>
            ))}
          </ul>
        </MarketBriefCard>

        <MarketBriefCard title="Risk Events">
          <ul className="space-y-3">
            {marketBrief.riskEvents.map((item) => (
              <li key={item} className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">{item}</li>
            ))}
          </ul>
        </MarketBriefCard>

        <MarketBriefCard title="Stocks to Watch">
          <div className="flex flex-wrap gap-3">
            {marketBrief.stocksToWatch.map((ticker) => (
              <Link key={ticker} href={`/stocks/${ticker.toLowerCase()}`} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                {ticker}
              </Link>
            ))}
          </div>
        </MarketBriefCard>
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
