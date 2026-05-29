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

export async function generateStaticParams() {
  return popularTickers.map((ticker) => ({ ticker: ticker.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) {
    return {
      title: "Stock Analysis | EquityLens AI",
    };
  }

  return {
    title: `${stock.ticker} Stock Analysis | EquityLens AI`,
    description: `AI-powered ${stock.ticker} stock analysis with earnings summary, valuation check, research score, growth drivers, and key risks.`,
  };
}

export default async function StockDetailPage({ params }: PageProps) {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) notFound();

  const headlineMetrics = [
    { label: "Current Price", value: formatCurrency(stock.price) },
    { label: "Daily Change", value: `${stock.change >= 0 ? "+" : ""}${stock.change}%` },
    { label: "Market Cap", value: stock.marketCap },
    { label: "PE Ratio", value: stock.peRatio ?? "N/A" },
    { label: "Revenue Growth", value: stock.revenueGrowth },
    { label: "Sector", value: stock.sector },
  ];

  const earningsMetrics = [
    { label: "Revenue", value: stock.earnings.revenue, note: "Top-line performance from the latest reported quarter." },
    { label: "Net Income", value: stock.earnings.netIncome, note: "Profitability after operating and non-operating expenses." },
    { label: "Gross Margin", value: stock.earnings.grossMargin, note: "A useful indicator of product economics and pricing power." },
    { label: "EPS", value: stock.earnings.eps, note: "Earnings per share from the latest mock earnings dataset." },
    { label: "Free Cash Flow", value: stock.earnings.freeCashFlow, note: "Cash generation after capital expenditures." },
    { label: "Guidance", value: "Context", note: stock.earnings.guidance },
  ];

  return (
    <Container className="py-12 sm:py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">{stock.ticker}</span>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${getScoreTone(stock.researchScore)}`}>{stock.rating}</span>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${getRiskTone(stock.riskLevel)}`}>{stock.riskLevel} Risk</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{stock.name}</h1>
            <p className="mt-3 text-base text-slate-600">{stock.sector} · {stock.industry}</p>
          </div>
          <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-600/20 lg:min-w-56">
            <p className="text-sm font-medium text-blue-100">Research Score</p>
            <p className="mt-1 text-5xl font-bold">{stock.researchScore}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">AI Stock Summary</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Plain-English Research Summary</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{stock.summary}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Earnings Breakdown</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Latest Earnings Snapshot</h2>
            <p className="mt-2 text-sm text-slate-500">Mock earnings date: {stock.earnings.date}</p>
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

          <ValuationCard stock={stock} />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">What to Watch Next</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Research Signals to Monitor</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {stock.watchNext.map((item) => (
                <div key={item} className="rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">{item}</div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <ResearchScoreCard stock={stock} />
          <GrowthDrivers drivers={stock.growthDrivers} />
          <RiskList risks={stock.risks} />
        </aside>
      </div>

      <div className="mt-10">
        <Disclaimer />
      </div>
    </Container>
  );
}
