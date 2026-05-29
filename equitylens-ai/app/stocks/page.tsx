import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { StockSearch } from "@/components/StockSearch";
import { stocks } from "@/data/stocks";

export const metadata: Metadata = {
  title: "Stock Search | EquityLens AI",
  description: "Search mock U.S. stock research pages with AI summaries, research scores, valuation checks, and risk analysis.",
};

export default function StocksPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Stock search</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Explore U.S. stock research pages</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Search by ticker, company, sector, or industry. This MVP uses mock data and is structured for future integration with market data providers.
        </p>
      </div>
      <div className="mt-10">
        <StockSearch stocks={stocks} />
      </div>
      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
