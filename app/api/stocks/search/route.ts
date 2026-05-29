import { searchStocks } from "@/lib/fmp";
import { stocks } from "@/data/stocks";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface SearchResult {
  symbol: string;
  name: string;
  exchange?: string;
  currency?: string;
  matchType?: "fmp" | "mock";
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

    // Try to fetch from FMP API
    const fmpResults = await searchStocks(query, 10);

    // If FMP returns results, use those
    if (fmpResults && fmpResults.length > 0) {
      const normalized: SearchResult[] = fmpResults.map((result) => ({
        symbol: result.symbol,
        name: result.name,
        exchange: result.stockExchange,
        currency: result.currency,
        matchType: "fmp",
      }));

      return NextResponse.json({
        success: true,
        query,
        results: normalized,
        source: "fmp",
      });
    }

    // Fallback to mock data if FMP fails
    const queryLower = query.toLowerCase();
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
        exchange: "NASDAQ", // Default for mock data
        currency: "USD",
        matchType: "mock" as const,
      }));

    return NextResponse.json({
      success: true,
      query,
      results: mockResults,
      source: "mock",
      note: "Using mock data - FMP API may not be available",
    });
  } catch (error) {
    console.error("Error in search route:", error);

    // Return error response
    return NextResponse.json(
      { error: "Failed to search stocks", details: String(error) },
      { status: 500 }
    );
  }
}
