export function RiskList({ risks }: { risks: string[] }) {
  return (
    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Key Risks</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-950">Risks to Consider</h3>
      <div className="mt-6 space-y-3">
        {risks.map((risk) => (
          <div key={risk} className="flex gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-800">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
            <span>{risk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
