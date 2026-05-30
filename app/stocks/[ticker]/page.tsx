import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { GrowthDrivers } from "@/components/GrowthDrivers";
import { ResearchScoreCard } from "@/components/ResearchScoreCard";
import { RiskList } from "@/components/RiskList";
import { ValuationCard } from "@/components/ValuationCard";
import { popularTickers, stocks } from "@/data/stocks";
import { formatCurrency, getStockByTicker } from "@/lib/utils";
import { getRiskTone, getScoreTone } from "@/lib/score";

type PageProps = {
  params: Promise<{
    ticker: string;
  }>;
};

interface StockApiResponse {
  success: boolean;
  symbol: string;
  source: "fmp" | "mock";
  quote?: {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    marketCap: number | null;
    pe: number | null;
    dayHigh: number;
    dayLow: number;
    yearHigh: number;
    yearLow: number;
    avgVolume: number;
    volume: number;
  };
  profile?: {
    symbol: string;
    companyName: string;
    sector: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    employees: number;
    country: string;
    address: string;
  };
  incomeStatement?: Array<{
    period: string;
    revenue: number;
    netIncome: number;
    grossProfit: number;
    eps: number;
    operatingIncome: number;
  }>;
}

async function getStockRealData(symbol: string): Promise<StockApiResponse | null> {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    
    const response = await fetch(`${baseUrl}/api/stocks/${symbol}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      console.error(`Failed to fetch stock data for ${symbol}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
    return null;
  }
}

export async function generateStaticParams() {
  return popularTickers.map((ticker) => ({ ticker: ticker.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) {
    return {
      title: "Stock Analysis | EquityLens AI",
      description:
        "AI-powered stock research for learners, including company profile, earnings, valuation, risk, and research score. For educational purposes only.",
    };
  }

  const title = stock.name
    ? `${stock.name} (${stock.ticker}) Stock Analysis | EquityLens AI`
    : `${stock.ticker} Stock Analysis: Earnings, Valuation, Risks and Research Score | EquityLens AI`;

  return {
    title,
    description: `AI-powered stock research for ${stock.ticker}, including company profile, earnings data, valuation metrics, risk analysis, and research score. For educational purposes only.`,
  };
}

export default async function StockDetailPage({ params }: PageProps) {
  const { ticker } = await params;
  const mockStock = getStockByTicker(ticker);

  if (!mockStock) notFound();

  // Fetch real data from API
  const apiData = await getStockRealData(ticker.toUpperCase());

  // Merge real data with mock data
  const quote = apiData?.quote;
  const profile = apiData?.profile;
  const incomeStatement = apiData?.incomeStatement;

  // Use real values if available, fall back to mock
  const displayPrice = quote?.price ?? mockStock.price;
  const displayChange = quote?.change ?? mockStock.change;
  const displayChangePercent = quote?.changePercent ?? (mockStock.change / mockStock.price) * 100;
  const displaySector = profile?.sector ?? mockStock.sector;
  const displayIndustry = profile?.industry ?? mockStock.industry;
  const displayCompanyName = profile?.companyName ?? mockStock.name;
  const displayDescription = profile?.description ?? mockStock.summary;
  const displayWebsite = profile?.website;
  const displayCeo = profile?.ceo;

  const headlineMetrics = [
    { 
      label: "Current Price", 
      value: formatCurrency(displayPrice),
      isReal: !!quote 
    },
    { 
      label: "Daily Change", 
      value: `${displayChange >= 0 ? "+" : ""}${displayChange.toFixed(2)} (${displayChangePercent.toFixed(2)}%)`,
      isReal: !!quote 
    },
    { 
      label: "Market Cap", 
      value: quote?.marketCap ? `$${(quote.marketCap / 1e9).toFixed(1)}B` : mockStock.marketCap,
      isReal: !!quote?.marketCap 
    },
    { 
      label: "PE Ratio", 
      value: quote?.pe ? quote.pe.toFixed(1) : (mockStock.peRatio ?? "N/A"),
      isReal: !!quote?.pe 
    },
    { 
      label: "52W High", 
      value: quote?.yearHigh ? formatCurrency(quote.yearHigh) : "—",
      isReal: !!quote?.yearHigh 
    },
    { 
      label: "52W Low", 
      value: quote?.yearLow ? formatCurrency(quote.yearLow) : "—",
      isReal: !!quote?.yearLow 
    },
  ];

  // Use income statement data if available, otherwise mock earnings
  let earningsMetrics;
  if (incomeStatement && incomeStatement.length > 0) {
    const latestIncome = incomeStatement[0];
    earningsMetrics = [
      { 
        label: "Revenue", 
        value: latestIncome.revenue ? `$${(latestIncome.revenue / 1e9).toFixed(2)}B` : "—",
        note: "Total revenue from operations." 
      },
      { 
        label: "Net Income", 
        value: latestIncome.netIncome ? `$${(latestIncome.netIncome / 1e9).toFixed(2)}B` : "—",
        note: "Profitability after all expenses." 
      },
      { 
        label: "EPS", 
        value: latestIncome.eps ? latestIncome.eps.toFixed(2) : "—",
        note: "Earnings per share." 
      },
      { 
        label: "Gross Profit", 
        value: latestIncome.grossProfit ? `$${(latestIncome.grossProfit / 1e9).toFixed(2)}B` : "—",
        note: "Revenue minus cost of goods sold." 
      },
      { 
        label: "Operating Income", 
        value: latestIncome.operatingIncome ? `$${(latestIncome.operatingIncome / 1e9).toFixed(2)}B` : "—",
        note: "Profit from core operations." 
      },
      { 
        label: "Period", 
        value: latestIncome.period || "—",
        note: "Reporting period for this data." 
      },
    ];
  } else {
    earningsMetrics = [
      { 
        label: "Revenue", 
        value: mockStock.earnings.revenue, 
        note: "Top-line performance from the latest reported quarter." 
      },
      { 
        label: "Net Income", 
        value: mockStock.earnings.netIncome, 
        note: "Profitability after operating and non-operating expenses." 
      },
      { 
        label: "Gross Margin", 
        value: mockStock.earnings.grossMargin, 
        note: "A useful indicator of product economics and pricing power." 
      },
      { 
        label: "EPS", 
        value: mockStock.earnings.eps, 
        note: "Earnings per share." 
      },
      { 
        label: "Free Cash Flow", 
        value: mockStock.earnings.freeCashFlow, 
        note: "Cash generation after capital expenditures." 
      },
      { 
        label: "Guidance", 
        value: "Context", 
        note: mockStock.earnings.guidance 
      },
    ];
  }

  const dataSource = apiData?.source === "fmp" ? "Live Data" : "Demo Data";

  return (
    <Container className="py-12 sm:py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">{ticker.toUpperCase()}</span>
              {apiData?.source === "fmp" && (
                <span className="rounded-2xl bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Live</span>
              )}
              {apiData?.source === "mock" && (
                <span className="rounded-2xl bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Demo</span>
              )}
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${getScoreTone(mockStock.researchScore)}`}>
                {mockStock.rating}
              </span>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${getRiskTone(mockStock.riskLevel)}`}>
                {mockStock.riskLevel} Risk
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {displayCompanyName}
            </h1>
            <p className="mt-3 text-base text-slate-600">
              {displaySector} · {displayIndustry}
            </p>
            {displayWebsite && (
              <p className="mt-2 text-sm text-blue-600">
                <a href={displayWebsite} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">
                  Visit website →
                </a>
              </p>
            )}
          </div>
          <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-600/20 lg:min-w-56">
            <p className="text-sm font-medium text-blue-100">Research Score</p>
            <p className="mt-1 text-5xl font-bold">{mockStock.researchScore}</p>
            <p className="mt-1 text-sm text-blue-100">out of 100</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {headlineMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Company Overview</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">About This Company</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {displayDescription}
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Financial Data</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Latest Financial Snapshot</h2>
            <p className="mt-2 text-sm text-slate-500">
              {incomeStatement && incomeStatement.length > 0 
                ? `Data from ${incomeStatement[0].period}`
                : `Mock earnings date: ${mockStock.earnings.date}`
              }
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {earningsMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.note}</p>
                </div>
              ))}
            </div>
          </section>

          <ValuationCard stock={mockStock} />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">What to Watch Next</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Research Signals to Monitor</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {mockStock.watchNext.map((item) => (
                <div key={item} className="rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">{item}</div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <ResearchScoreCard stock={mockStock} />
          <GrowthDrivers drivers={mockStock.growthDrivers} />
          <RiskList risks={mockStock.risks} />
        </aside>
      </div>

      <div className="mt-10">
        <Disclaimer />
      </div>
    </Container>
  );
}
