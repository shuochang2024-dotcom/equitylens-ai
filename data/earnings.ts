import type { EarningsItem } from "@/types/stock";

export const earnings: EarningsItem[] = [
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    earningsDate: "2026-05-22",
    revenue: "$26.0B",
    eps: "$6.12",
    aiSummary: "Data center strength remained the main driver, while valuation risk continues to require attention.",
    keyRisk: "High expectations for AI infrastructure demand.",
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    earningsDate: "2026-04-25",
    revenue: "$61.9B",
    eps: "$2.94",
    aiSummary: "Cloud growth and AI monetization remain central to the research profile.",
    keyRisk: "Large AI infrastructure spending could pressure margins.",
  },
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    earningsDate: "2026-05-02",
    revenue: "$90.8B",
    eps: "$1.53",
    aiSummary: "Services remained resilient while hardware growth needs closer monitoring.",
    keyRisk: "Slower device replacement cycles.",
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com, Inc.",
    earningsDate: "2026-04-30",
    revenue: "$143.3B",
    eps: "$0.98",
    aiSummary: "AWS, advertising, and retail margin improvement continue to drive investor attention.",
    keyRisk: "Cloud competition and consumer demand softness.",
  },
  {
    ticker: "META",
    companyName: "Meta Platforms, Inc.",
    earningsDate: "2026-04-24",
    revenue: "$36.5B",
    eps: "$4.71",
    aiSummary: "Advertising strength and AI tools supported the quarter, while infrastructure investment remains elevated.",
    keyRisk: "Regulatory scrutiny and AI spending intensity.",
  },
];
