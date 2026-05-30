import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";
import { getStocksByTickers } from "@/lib/utils";

const tickers = ["NVDA", "MSFT", "GOOGL", "AMZN", "META", "AMD", "PLTR", "SMCI"];
const stocks = getStocksByTickers(tickers);

export const metadata: Metadata = {
  title: "AI Stocks to Watch: Research Scores, Valuation and Key Risks | EquityLens AI",
  description:
    "A research list of AI-related stocks with company profiles, research scores, valuation context, and key risks for educational study.",
};

export default function AIStocksToWatchPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Research lists"
        title="AI Stocks to Watch"
        description="Selected companies with notable AI exposure across hardware, software, cloud, and infrastructure. This page is intended for educational research and informational purposes only."
      />

      <div className="mt-8 space-y-8">
        <p className="max-w-3xl text-sm leading-7 text-slate-600">
          Explore a study list of AI-related stocks with a focus on research score context, valuation considerations, and the primary risk themes that analysts may track.
        </p>

        <div className="grid gap-6 xl:grid-cols-2">
          {stocks.map((stock) => (
            <article
              key={stock.ticker}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{stock.sector}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    <Link href={`/stocks/${stock.ticker.toLowerCase()}`} className="hover:text-blue-700">
                      {stock.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {stock.ticker} · {stock.industry}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-right">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Research score</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{stock.researchScore}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">Key research angle</p>
                  <p className="mt-2">{stock.valuationComment}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Key risks to consider</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {stock.risks.slice(0, 3).map((risk) => (
                      <li key={risk}>{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
          <p>
            This page is for educational and informational purposes only and does not constitute investment advice.
          </p>
        </div>

        <div className="mt-6">
          <Disclaimer />
        </div>
      </div>
    </Container>
  );
}
