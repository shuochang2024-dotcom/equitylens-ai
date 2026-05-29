export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`rounded-3xl border p-7 shadow-sm ${highlighted ? "border-blue-200 bg-blue-600 text-white shadow-blue-600/20" : "border-slate-200 bg-white text-slate-950"}`}>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className={`mt-3 text-sm leading-6 ${highlighted ? "text-blue-50" : "text-slate-600"}`}>{description}</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Free" ? <span className={highlighted ? "mb-1 text-blue-100" : "mb-1 text-slate-500"}>/ month</span> : null}
      </div>
      <ul className="mt-7 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${highlighted ? "bg-white/20" : "bg-blue-50 text-blue-700"}`}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${highlighted ? "bg-white text-blue-700 hover:bg-blue-50" : "bg-slate-950 text-white hover:bg-blue-700"}`}>
        {highlighted ? "Upgrade to Pro" : "Start Free"}
      </button>
    </div>
  );
}
