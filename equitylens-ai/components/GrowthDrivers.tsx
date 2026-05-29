export function GrowthDrivers({ drivers }: { drivers: string[] }) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Growth Drivers</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-950">Potential Business Drivers</h3>
      <div className="mt-6 space-y-3">
        {drivers.map((driver) => (
          <div key={driver} className="flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <span>{driver}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
