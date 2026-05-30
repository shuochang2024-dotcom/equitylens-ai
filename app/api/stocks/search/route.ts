import {
  searchStockDirectory,
  searchStocks,
  searchStocksByTheme,
} from "@/lib/fmp";
import { stocks } from "@/data/stocks";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface SearchResult {
  symbol: string;
  name: string;
  exchange?: string;
  currency?: string;
  stockExchange?: string;
  sector?: string;
  industry?: string;
  marketCap?: number | null;
  price?: number | null;
  matchType?: "directory" | "fmp" | "theme" | "mock";
}

function normalizeDirectoryResult(item: any): SearchResult {
  const symbol = String(item.symbol || item.ticker || "").toUpperCase();
  const price = item.price == null ? null : Number(item.price);
  const exchange = item.exchange || item.exchangeShortName || item.stockExchange;

  return {
    symbol,
    name: String(item.name || item.companyName || ""),
    exchange,
    stockExchange: exchange,
    sector: undefined,
    industry: undefined,
    marketCap: null,
    price,
    matchType: "directory",
  };
}

function normalizeFMPResult(result: any): SearchResult {
  const symbol = String(result.symbol || "").toUpperCase();
  const price = result.price == null ? null : Number(result.price);

  return {
    symbol,
    name: String(result.name || result.companyName || ""),
    exchange: result.stockExchange || result.exchange,
    stockExchange: result.stockExchange || result.exchange,
    currency: result.currency,
    sector: result.sector,
    industry: result.industry,
    marketCap:
      result.marketCap == null ? null : Number(result.marketCap),
    price,
    matchType: "fmp",
  };
}

function normalizeThemeResult(result: any): SearchResult {
  const symbol = String(result.symbol || "").toUpperCase();
  const price = result.price == null ? null : Number(result.price);

  return {
    symbol,
    name: String(result.companyName || result.name || ""),
    exchange: result.stockExchange || result.exchange,
    stockExchange: result.stockExchange || result.exchange,
    currency: result.currency,
    sector: result.sector,
    industry: result.industry,
    marketCap:
      result.marketCap == null ? null : Number(result.marketCap),
    price,
    matchType: "theme",
  };
}

/**
 * GET /api/stocks/search?q=query
 * Search for stocks by query string
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required" },
        { status: 400 }
      );
    }

    const normalizedQuery = query.trim();

    const directoryResults = await searchStockDirectory(normalizedQuery);
    const fmpResults = await searchStocks(normalizedQuery, 50);
    const themeResults = await searchStocksByTheme(normalizedQuery, 50);

    const mergedResults: SearchResult[] = [];
    const seen = new Set<string>();

    const pushResults = (items: SearchResult[]) => {
      for (const item of items) {
        const symbol = String(item.symbol || "").toUpperCase();
        if (!symbol || seen.has(symbol)) continue;
        seen.add(symbol);
        mergedResults.push(item);
        if (mergedResults.length >= 50) return;
      }
    };

    pushResults(directoryResults.map(normalizeDirectoryResult));
    if (mergedResults.length < 50) {
      pushResults(fmpResults.map(normalizeFMPResult));
    }
    if (mergedResults.length < 50) {
      pushResults(themeResults.map(normalizeThemeResult));
    }

    const results = mergedResults.slice(0, 50);

    if (results.length > 0) {
      return NextResponse.json({
        success: true,
        query: normalizedQuery,
        results,
        source: "combined",
      });
    }

    // Fallback to mock data if no results were discovered
    const queryLower = normalizedQuery.toLowerCase();
    const mockResults = stocks
      .filter(
        (stock) =>
          stock.ticker.toLowerCase().includes(queryLower) ||
          stock.name.toLowerCase().includes(queryLower)
      )
      .slice(0, 10)
      .map((stock) => ({
        symbol: stock.ticker,
        name: stock.name,
        exchange: "NASDAQ",
        stockExchange: "NASDAQ",
        currency: "USD",
        sector: stock.sector,
        industry: stock.industry,
        marketCap: null,
        price: stock.price,
        matchType: "mock" as const,
      }));

    return NextResponse.json({
      success: true,
      query: normalizedQuery,
      results: mockResults,
      source: "mock",
      note: "Using mock data - FMP API may not be available",
    });
  } catch (error) {
    console.error("Error in search route:", error);

    return NextResponse.json(
      { error: "Failed to search stocks", details: String(error) },
      { status: 500 }
    );
  }
}
