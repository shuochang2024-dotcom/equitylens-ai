export type ResearchRating =
  | "High Research Interest"
  | "Worth Watching"
  | "Neutral"
  | "Elevated Risk"
  | "Low Research Interest";

export type RiskLevel = "Low" | "Moderate" | "Elevated" | "High";

export type Stock = {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  price: number;
  change: number;
  marketCap: string;
  peRatio: number | null;
  psRatio: number;
  forwardPe: number | null;
  sectorAveragePe: number | null;
  revenueGrowth: string;
  researchScore: number;
  rating: ResearchRating;
  riskLevel: RiskLevel;
  businessQuality: number;
  growth: number;
  valuation: number;
  momentum: number;
  analystSentiment: number;
  riskScore: number;
  summary: string;
  valuationComment: string;
  earnings: {
    date: string;
    revenue: string;
    netIncome: string;
    grossMargin: string;
    eps: string;
    freeCashFlow: string;
    guidance: string;
  };
  growthDrivers: string[];
  risks: string[];
  watchNext: string[];
};

export type EarningsItem = {
  ticker: string;
  companyName: string;
  earningsDate: string;
  revenue: string;
  eps: string;
  aiSummary: string;
  keyRisk: string;
};

export type MarketBrief = {
  majorIndexes: Array<{
    name: string;
    value: string;
    change: string;
  }>;
  topMovers: Array<{
    ticker: string;
    name: string;
    change: string;
    note: string;
  }>;
  aiStocksUpdate: string;
  earningsHighlights: string[];
  riskEvents: string[];
  stocksToWatch: string[];
};
