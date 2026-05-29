import type { MarketBrief } from "@/types/stock";

export const marketBrief: MarketBrief = {
  majorIndexes: [
    { name: "S&P 500", value: "5,318.44", change: "+0.42%" },
    { name: "Nasdaq 100", value: "18,642.10", change: "+0.78%" },
    { name: "Dow Jones", value: "39,108.66", change: "-0.12%" },
  ],
  topMovers: [
    {
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      change: "+2.31%",
      note: "AI infrastructure demand remains a key discussion point.",
    },
    {
      ticker: "SMCI",
      name: "Super Micro Computer",
      change: "-2.76%",
      note: "Investors continue to monitor margin and supply chain risk.",
    },
    {
      ticker: "AMD",
      name: "Advanced Micro Devices",
      change: "+2.04%",
      note: "AI accelerator traction remains central to sentiment.",
    },
  ],
  aiStocksUpdate:
    "AI-related stocks remain a major focus for individual investors, but valuation dispersion is widening across semiconductors, cloud platforms, and application software companies.",
  earningsHighlights: [
    "Mega-cap technology results continue to show strong cloud and advertising demand.",
    "Hardware-linked AI companies are showing rapid revenue growth but more volatile margin profiles.",
    "Investors are increasingly focused on whether AI spending can translate into durable free cash flow.",
  ],
  riskEvents: [
    "Higher long-term interest rates could pressure premium valuations.",
    "Regulatory pressure remains relevant for large technology platforms.",
    "AI infrastructure supply constraints may affect delivery timelines.",
  ],
  stocksToWatch: ["NVDA", "MSFT", "AMZN", "META", "AMD", "PLTR"],
};
