/**
 * Financial Modeling Prep API Integration
 * Server-side only functions for stock data retrieval
 * Never expose FMP_API_KEY to the browser
 */

const FMP_API_KEY = process.env.FMP_API_KEY;
const FMP_BASE_URL = "https://financialmodelingprep.com/api/v3";

if (!FMP_API_KEY) {
  console.warn("FMP_API_KEY is not set in environment variables");
}

// Types for FMP API responses
export interface FMPSearchResult {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
}

export interface FMPQuote {
  symbol: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  avgVolume: number;
  volume: number;
  open: number;
  previousClose: number;
  timestamp: number;
}

export interface FMPCompanyProfile {
  symbol: string;
  price: number;
  beta: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  currency: string;
  cik: string;
  isin: string;
  cusip: string;
  exchange: string;
  exchangeShortName: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  fullTimeEmployees: number;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dcfValue?: number;
  dcf?: number;
  image: string;
  ipoDate: string;
}

export interface FMPIncomeStatement {
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  operatingExpenses: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  incomeTaxExpense: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  epsdiluted: number;
  weightedAverageShsOut: number;
  weightedAverageShsOutDil: number;
  link: string;
  finalLink: string;
}

/**
 * Search for stocks by query
 * @param query - Search query (company name or ticker)
 * @param limit - Maximum number of results (default: 5)
 */
export async function searchStocks(
  query: string,
  limit: number = 5
): Promise<FMPSearchResult[]> {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return [];
  }

  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    const encodedQuery = encodeURIComponent(query.trim());
    const url = `${FMP_BASE_URL}/search?query=${encodedQuery}&limit=${limit}&apikey=${FMP_API_KEY}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Only cache for 1 hour since stock data changes frequently
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`FMP API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error searching stocks:", error);
    return [];
  }
}

/**
 * Get real-time stock quote
 * @param symbol - Stock ticker symbol
 */
export async function getStockQuote(symbol: string): Promise<FMPQuote | null> {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return null;
  }

  if (!symbol || symbol.trim().length === 0) {
    return null;
  }

  try {
    const uppercaseSymbol = symbol.toUpperCase().trim();
    const url = `${FMP_BASE_URL}/quote/${uppercaseSymbol}?apikey=${FMP_API_KEY}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Revalidate every 5 minutes for real-time data
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error(
        `FMP API error for ${symbol}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    const quote = Array.isArray(data) ? data[0] : data;

    return quote || null;
  } catch (error) {
    console.error(`Error fetching stock quote for ${symbol}:`, error);
    return null;
  }
}

/**
 * Get company profile and detailed information
 * @param symbol - Stock ticker symbol
 */
export async function getCompanyProfile(
  symbol: string
): Promise<FMPCompanyProfile | null> {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return null;
  }

  if (!symbol || symbol.trim().length === 0) {
    return null;
  }

  try {
    const uppercaseSymbol = symbol.toUpperCase().trim();
    const url = `${FMP_BASE_URL}/profile/${uppercaseSymbol}?apikey=${FMP_API_KEY}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache for 24 hours since company info changes infrequently
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      console.error(
        `FMP API error for ${symbol}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    const profile = Array.isArray(data) ? data[0] : data;

    return profile || null;
  } catch (error) {
    console.error(`Error fetching company profile for ${symbol}:`, error);
    return null;
  }
}

/**
 * Get income statement data
 * @param symbol - Stock ticker symbol
 * @param limit - Number of periods to retrieve (default: 5)
 * @param period - "quarter" or "annual" (default: "quarter")
 */
export async function getIncomeStatement(
  symbol: string,
  limit: number = 5,
  period: "quarter" | "annual" = "quarter"
): Promise<FMPIncomeStatement[]> {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return [];
  }

  if (!symbol || symbol.trim().length === 0) {
    return [];
  }

  try {
    const uppercaseSymbol = symbol.toUpperCase().trim();
    const url = `${FMP_BASE_URL}/income-statement/${uppercaseSymbol}?period=${period}&limit=${limit}&apikey=${FMP_API_KEY}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache for 24 hours
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      console.error(
        `FMP API error for ${symbol}: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Error fetching income statement for ${symbol}:`, error);
    return [];
  }
}

/**
 * Batch function to get all data for a stock
 * @param symbol - Stock ticker symbol
 */
export async function getStockData(symbol: string) {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return {
      quote: null,
      profile: null,
      incomeStatement: [],
    };
  }

  try {
    const [quote, profile, incomeStatement] = await Promise.all([
      getStockQuote(symbol),
      getCompanyProfile(symbol),
      getIncomeStatement(symbol, 5, "quarter"),
    ]);

    return {
      quote,
      profile,
      incomeStatement,
    };
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
    return {
      quote: null,
      profile: null,
      incomeStatement: [],
    };
  }
}
