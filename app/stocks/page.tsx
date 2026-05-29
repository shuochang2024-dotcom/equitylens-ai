import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { StockSearch } from "@/components/StockSearch";

export const metadata: Metadata = {
  title: "Stock Search | EquityLens AI",
  description: "Search U.S. stocks with real-time data, company profiles, and financial information.",
};

export default function StocksPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Stock search</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Explore U.S. stock research pages</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Search by ticker or company name to view detailed financial information, company profiles, and income statement data.
        </p>
      </div>
      <div className="mt-10">
        <StockSearch />
      </div>
      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
