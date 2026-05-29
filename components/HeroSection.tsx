import Link from "next/link";
import { ResearchScoreCard } from "@/components/ResearchScoreCard";
import { stocks } from "@/data/stocks";

export function HeroSection() {
  const nvda = stocks.find((stock) => stock.ticker === "NVDA") ?? stocks[0];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.12),transparent_32rem)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Evidence-based AI stock research
          </div>
          <h1 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Smarter Stock Research, Powered by AI
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Understand earnings, valuation, risks, and market sentiment in minutes — with evidence-based AI insights.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/stocks" className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Search a Stock
            </Link>
            <Link href="/stocks-to-watch" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700">
              View Stocks to Watch
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["10", "Mock stocks"],
              ["6", "Score factors"],
              ["100", "Research scale"],
              ["0", "Trading links"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-slate-950">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-blue-600/10 blur-2xl" />
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-xl bg-white/10 px-3 py-1 text-sm font-bold">{nvda.ticker}</span>
                  <h2 className="mt-4 text-2xl font-semibold">{nvda.name}</h2>
                  <p className="mt-1 text-sm text-slate-300">{nvda.industry}</p>
                </div>
                <div className="rounded-2xl bg-blue-500 px-4 py-3 text-center">
                  <p className="text-3xl font-bold">{nvda.researchScore}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Score</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-slate-300">Business Quality</p>
                  <p className="mt-1 text-lg font-semibold">High</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-slate-300">Valuation Risk</p>
                  <p className="mt-1 text-lg font-semibold">Elevated</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-slate-300">Momentum</p>
                  <p className="mt-1 text-lg font-semibold">Strong</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-slate-300">Risk Lens</p>
                  <p className="mt-1 text-lg font-semibold">Visible</p>
                </div>
              </div>
            </div>
            <div className="mt-4 hidden lg:block">
              <ResearchScoreCard stock={nvda} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
