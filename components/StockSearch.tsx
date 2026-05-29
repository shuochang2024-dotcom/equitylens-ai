"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SearchResult {
  symbol: string;
  name: string;
  exchange?: string;
  currency?: string;
  matchType?: "fmp" | "mock";
}

export function StockSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        setError(null);
        setHasSearched(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const response = await fetch(`/api/stocks/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Failed to search stocks");
          setResults([]);
          return;
        }

        setResults(data.results || []);
      } catch (err) {
        console.error("Search error:", err);
        setError("Error searching for stocks");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300); // Debounce search

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <label htmlFor="stock-search" className="sr-only">
          Search stocks
        </label>
        <input
          id="stock-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by ticker or company name"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 text-center">
          <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-500"></div>
          <p className="mt-3 text-slate-600">Searching stocks...</p>
        </div>
      )}

      {/* Error state */}
      {error && !isLoading && (
        <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="text-red-700">
            {error}
          </p>
          <p className="mt-2 text-sm text-red-600">
            Showing limited results. Try searching for NVDA, TSLA, or AAPL.
          </p>
        </div>
      )}

      {/* Results grid */}
      {!isLoading && results.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Link
              key={result.symbol}
              href={`/stocks/${result.symbol}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-lg font-semibold text-slate-950 group-hover:text-blue-600">
                    {result.symbol}
                  </div>
                  <div className="mt-1 line-clamp-1 text-sm text-slate-600">
                    {result.name}
                  </div>
                  {result.matchType === "mock" && (
                    <div className="mt-2 inline-block rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                      Demo
                    </div>
                  )}
                </div>
                <div className="text-blue-500 transition group-hover:translate-x-1">→</div>
              </div>
              {result.exchange && (
                <div className="mt-3 text-xs text-slate-500">
                  {result.exchange}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && query.trim() && results.length === 0 && !error && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          <p>No stocks found for "{query}".</p>
          <p className="mt-2 text-sm">Try searching for NVDA, TSLA, AAPL, MSFT, or other tickers.</p>
        </div>
      )}

      {/* Initial state */}
      {!hasSearched && !query && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          <p>Start typing to search for stocks.</p>
          <p className="mt-2 text-sm">Try NVDA, TSLA, AAPL, MSFT, AMZN, or other tickers.</p>
        </div>
      )}
    </div>
  );
}
