import { getStockData, getStockQuote, getCompanyProfile, FMPIncomeStatement } from "@/lib/fmp";
import { getStockByTicker } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface StockResponse {
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
  error?: string;
}

/**
 * GET /api/stocks/[symbol]
 * Get stock quote, profile, and income statement data
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ symbol: string }> }
) {
  try {
    const { symbol } = await params;

    if (!symbol || symbol.trim().length === 0) {
      return NextResponse.json(
        { error: "Symbol parameter is required" },
        { status: 400 }
      );
    }

    const upperSymbol = symbol.toUpperCase().trim();

    // Try to fetch from FMP API
    const fmpData = await getStockData(upperSymbol);

    // If we have FMP data, normalize and return it
    if (fmpData.quote || fmpData.profile) {
      const response: StockResponse = {
        success: true,
        symbol: upperSymbol,
        source: "fmp",
      };

      // Normalize quote data
      if (fmpData.quote) {
        response.quote = {
          symbol: fmpData.quote.symbol,
          price: fmpData.quote.price,
          change: fmpData.quote.change,
          changePercent: fmpData.quote.changesPercentage,
          marketCap: fmpData.quote.marketCap,
          pe: fmpData.quote.price > 0 ? fmpData.quote.price : null,
          dayHigh: fmpData.quote.dayHigh,
          dayLow: fmpData.quote.dayLow,
          yearHigh: fmpData.quote.yearHigh,
          yearLow: fmpData.quote.yearLow,
          avgVolume: fmpData.quote.avgVolume,
          volume: fmpData.quote.volume,
        };
      }

      // Normalize profile data
      if (fmpData.profile) {
        response.profile = {
          symbol: fmpData.profile.symbol,
          companyName: fmpData.profile.companyName,
          sector: fmpData.profile.sector,
          industry: fmpData.profile.industry,
          website: fmpData.profile.website,
          description: fmpData.profile.description,
          ceo: fmpData.profile.ceo,
          employees: fmpData.profile.fullTimeEmployees,
          country: fmpData.profile.country,
          address: fmpData.profile.address,
        };
      }

      // Normalize income statement data
      if (fmpData.incomeStatement && fmpData.incomeStatement.length > 0) {
        response.incomeStatement = fmpData.incomeStatement.slice(0, 5).map(
          (stmt: FMPIncomeStatement) => ({
            period: `${stmt.calendarYear}-${stmt.period}`,
            revenue: stmt.revenue,
            netIncome: stmt.netIncome,
            grossProfit: stmt.grossProfit,
            eps: stmt.eps,
            operatingIncome: stmt.operatingIncome,
          })
        );
      }

      return NextResponse.json(response);
    }

    // Fallback to mock data
    const mockStock = getStockByTicker(upperSymbol);

    if (mockStock) {
      const response: StockResponse = {
        success: true,
        symbol: upperSymbol,
        source: "mock",
        quote: {
          symbol: mockStock.ticker,
          price: mockStock.price,
          change: mockStock.change,
          changePercent: (mockStock.change / mockStock.price) * 100,
          marketCap: null,
          pe: mockStock.peRatio,
          dayHigh: 0,
          dayLow: 0,
          yearHigh: 0,
          yearLow: 0,
          avgVolume: 0,
          volume: 0,
        },
        profile: {
          symbol: mockStock.ticker,
          companyName: mockStock.name,
          sector: mockStock.sector,
          industry: mockStock.industry,
          website: "",
          description: mockStock.summary,
          ceo: "",
          employees: 0,
          country: "",
          address: "",
        },
        incomeStatement: [
          {
            period: mockStock.earnings.date,
            revenue: parseInt(mockStock.earnings.revenue.replace(/[^0-9]/g, "")),
            netIncome: parseInt(mockStock.earnings.netIncome.replace(/[^0-9]/g, "")),
            grossProfit: 0,
            eps: parseFloat(mockStock.earnings.eps),
            operatingIncome: 0,
          },
        ],
      };

      return NextResponse.json(response);
    }

    // Symbol not found in either source
    return NextResponse.json(
      { 
        success: false,
        symbol: upperSymbol,
        error: "Stock symbol not found" 
      },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error in stock detail route:", error);

    return NextResponse.json(
      { 
        success: false,
        error: "Failed to fetch stock data", 
        details: String(error) 
      },
      { status: 500 }
    );
  }
}
