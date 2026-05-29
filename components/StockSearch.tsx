"use client";

import { useMemo, useState } from "react";
import type { Stock } from "@/types/stock";
import { StockCard } from "@/components/StockCard";

export function StockSearch({ stocks }: { stocks: Stock[] }) {
  const [query, setQuery] = useState("");

  const filteredStocks = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return stocks;
    return stocks.filter((stock) =>
      [stock.ticker, stock.name, stock.sector, stock.industry].some((field) => field.toLowerCase().includes(value)),
    );
  }, [query, stocks]);

  return (
    <div>
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <label htmlFor="stock-search" className="sr-only">Search stocks</label>
        <input
          id="stock-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by ticker, company name, sector, or industry"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredStocks.map((stock) => (
          <StockCard key={stock.ticker} stock={stock} />
        ))}
      </div>

      {filteredStocks.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No mock stock matched your search. Try NVDA, TSLA, AAPL, MSFT, or AMD.
        </div>
      ) : null}
    </div>
  );
}
