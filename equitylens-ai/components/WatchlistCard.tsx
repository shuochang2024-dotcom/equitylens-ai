import Link from "next/link";
import type { Stock } from "@/types/stock";
import { getRiskTone, getScoreTone } from "@/lib/score";

export function WatchlistCard({ stock, alert }: { stock: Stock; alert: string }) {
  return (
    <Link href={`/stocks/${stock.ticker.toLowerCase()}`} className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="rounded-xl bg-slate-950 px-3 py-1.5 text-sm font-bold text-white">{stock.ticker}</span>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">{stock.name}</h3>
          <p className="mt-1 text-sm text-slate-500">Next Event: Earnings and guidance updates</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:min-w-72">
          <div className={`rounded-2xl border p-3 ${getScoreTone(stock.researchScore)}`}>
            <p className="text-xs font-medium opacity-80">Research Score</p>
            <p className="mt-1 text-xl font-bold">{stock.researchScore}</p>
          </div>
          <div className={`rounded-2xl border p-3 ${getRiskTone(stock.riskLevel)}`}>
            <p className="text-xs font-medium opacity-80">Risk Level</p>
            <p className="mt-1 text-xl font-bold">{stock.riskLevel}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">{alert}</div>
    </Link>
  );
}
