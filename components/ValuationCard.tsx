import type { Stock } from "@/types/stock";

export function ValuationCard({ stock }: { stock: Stock }) {
  const metrics = [
    { label: "PE Ratio", value: stock.peRatio ?? "N/A" },
    { label: "PS Ratio", value: stock.psRatio },
    { label: "Forward PE", value: stock.forwardPe ?? "N/A" },
    { label: "Sector Avg PE", value: stock.sectorAveragePe ?? "N/A" },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Valuation Check</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-950">Valuation Context</h3>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500">{metric.label}</p>
            <p className="mt-1 text-lg font-semibold text-slate-950">{metric.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-600">{stock.valuationComment}</p>
    </div>
  );
}
