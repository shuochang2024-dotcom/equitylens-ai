import Link from "next/link";
import type { EarningsItem } from "@/types/stock";

export function EarningsCard({ item }: { item: EarningsItem }) {
  return (
    <Link href={`/stocks/${item.ticker.toLowerCase()}`} className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="rounded-xl bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">{item.ticker}</span>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.companyName}</h3>
          <p className="mt-1 text-sm text-slate-500">Earnings Date: {item.earningsDate}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-right sm:min-w-48">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Revenue</p>
            <p className="font-semibold text-slate-950">{item.revenue}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">EPS</p>
            <p className="font-semibold text-slate-950">{item.eps}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-600">{item.aiSummary}</p>
      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>Key risk:</strong> {item.keyRisk}
      </div>
    </Link>
  );
}
