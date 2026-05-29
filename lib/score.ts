import type { ResearchRating } from "@/types/stock";

export function getResearchRating(score: number): ResearchRating {
  if (score >= 80) return "High Research Interest";
  if (score >= 65) return "Worth Watching";
  if (score >= 50) return "Neutral";
  if (score >= 35) return "Elevated Risk";
  return "Low Research Interest";
}

export function getScoreTone(score: number) {
  if (score >= 80) return "text-emerald-700 bg-emerald-50 border-emerald-200";
  if (score >= 65) return "text-blue-700 bg-blue-50 border-blue-200";
  if (score >= 50) return "text-slate-700 bg-slate-50 border-slate-200";
  if (score >= 35) return "text-amber-700 bg-amber-50 border-amber-200";
  return "text-red-700 bg-red-50 border-red-200";
}

export function getRiskTone(level: string) {
  switch (level) {
    case "Low":
      return "text-emerald-700 bg-emerald-50 border-emerald-200";
    case "Moderate":
      return "text-blue-700 bg-blue-50 border-blue-200";
    case "Elevated":
      return "text-amber-700 bg-amber-50 border-amber-200";
    case "High":
      return "text-red-700 bg-red-50 border-red-200";
    default:
      return "text-slate-700 bg-slate-50 border-slate-200";
  }
}
