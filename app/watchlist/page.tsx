import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";
import { WatchlistCard } from "@/components/WatchlistCard";
import { getStocksByTickers } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Watchlist | EquityLens AI",
  description: "A mock watchlist page for tracking research scores, risk levels, upcoming events, and educational alerts.",
};

const watchlist = [
  { ticker: "NVDA", alert: "NVDA earnings report is coming soon. Monitor data center revenue and margin trends." },
  { ticker: "TSLA", alert: "TSLA valuation risk remains elevated. Monitor delivery growth and automotive margins." },
  { ticker: "AAPL", alert: "AAPL revenue growth has slowed. Monitor services revenue and AI feature adoption." },
  { ticker: "MSFT", alert: "MSFT remains strong in cloud and AI. Monitor Azure growth and infrastructure spending." },
  { ticker: "PLTR", alert: "PLTR has strong AI platform attention. Monitor commercial revenue growth and valuation sensitivity." },
];

export default function WatchlistPage() {
  const stocks = getStocksByTickers(watchlist.map((item) => item.ticker));

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Personal research list"
        title="Watchlist"
        description="A static MVP watchlist that demonstrates how future authenticated users could track research changes, risks, and upcoming events."
      />

      <div className="mt-12 grid gap-5">
        {stocks.map((stock) => {
          const item = watchlist.find((entry) => entry.ticker === stock.ticker);
          return <WatchlistCard key={stock.ticker} stock={stock} alert={item?.alert ?? "Monitor research score and risk changes."} />;
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-950">Future integration ready</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          This page is structured for future authentication, database-backed watchlists, email alerts, and Stripe-based Pro features.
        </p>
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
