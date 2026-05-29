import type { Stock } from "@/types/stock";
import { ScoreBar } from "@/components/ScoreBar";
import { getScoreTone } from "@/lib/score";

export function ResearchScoreCard({ stock }: { stock: Stock }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Research Score</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">Overall Research Score</h3>
        </div>
        <div className={`rounded-2xl border px-5 py-4 text-center ${getScoreTone(stock.researchScore)}`}>
          <div className="text-3xl font-bold">{stock.researchScore}</div>
          <div className="text-xs font-semibold uppercase tracking-wide">/ 100</div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-500">Rating</p>
        <p className="mt-1 text-lg font-semibold text-slate-950">{stock.rating}</p>
      </div>

      <div className="mt-6 space-y-5">
        <ScoreBar label="Business Quality" score={stock.businessQuality} />
        <ScoreBar label="Growth" score={stock.growth} />
        <ScoreBar label="Valuation" score={stock.valuation} />
        <ScoreBar label="Momentum" score={stock.momentum} />
        <ScoreBar label="Analyst Sentiment" score={stock.analystSentiment} />
        <ScoreBar label="Risk Level" score={stock.riskScore} inverse />
      </div>
    </div>
  );
}
