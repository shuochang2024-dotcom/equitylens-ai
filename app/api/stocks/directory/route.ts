import { searchStockDirectory } from "@/lib/fmp";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * GET /api/stocks/directory?q=...
 * Returns { query, count, results }
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

    if (!process.env.FMP_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error: stock directory unavailable" },
        { status: 500 }
      );
    }

    const results = await searchStockDirectory(query);

    return NextResponse.json({ query, count: results.length, results });
  } catch (error) {
    console.error("Error in stock directory route:", error);
    return NextResponse.json(
      { error: "Failed to search stock directory" },
      { status: 500 }
    );
  }
}
