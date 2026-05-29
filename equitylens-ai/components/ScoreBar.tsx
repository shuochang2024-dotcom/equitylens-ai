import { cn } from "@/lib/utils";

export function ScoreBar({ label, score, inverse = false }: { label: string; score: number; inverse?: boolean }) {
  const color = inverse
    ? score >= 70
      ? "bg-red-500"
      : score >= 50
        ? "bg-amber-500"
        : "bg-emerald-500"
    : score >= 80
      ? "bg-emerald-500"
      : score >= 65
        ? "bg-blue-500"
        : score >= 50
          ? "bg-amber-500"
          : "bg-red-500";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-semibold text-slate-950">{score}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className={cn("h-full rounded-full", color)} style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }} />
      </div>
    </div>
  );
}
