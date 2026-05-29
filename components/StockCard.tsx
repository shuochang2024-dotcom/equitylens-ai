import Link from "next/link";
import type { Stock } from "@/types/stock";
import { formatCurrency } from "@/lib/utils";
import { getRiskTone, getScoreTone } from "@/lib/score";

export function StockCard({ stock }: { stock: Stock }) {
  const changePositive = stock.change >= 0;

  return (
    <Link href={`/stocks/${stock.ticker.toLowerCase()}`} className="group block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-slate-950 px-3 py-1.5 text-sm font-bold text-white">{stock.ticker}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${changePositive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
              {changePositive ? "+" : ""}{stock.change}%
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-950 group-hover:text-blue-700">{stock.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{stock.sector} · {stock.industry}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-slate-950">{formatCurrency(stock.price)}</p>
          <p className="mt-1 text-xs text-slate-500">Market Cap {stock.marketCap}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className={`rounded-2xl border p-3 ${getScoreTone(stock.researchScore)}`}>
          <p className="text-xs font-medium opacity-80">Research Score</p>
          <p className="mt-1 text-xl font-bold">{stock.researchScore}</p>
        </div>
        <div className={`rounded-2xl border p-3 ${getRiskTone(stock.riskLevel)}`}>
          <p className="text-xs font-medium opacity-80">Risk Level</p>
          <p className="mt-1 text-xl font-bold">{stock.riskLevel}</p>
        </div>
      </div>
    </Link>
  );
}
