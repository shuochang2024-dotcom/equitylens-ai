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

export interface FMPCompanyScreenerResult {
  symbol: string;
  companyName?: string;
  name?: string;
  exchange?: string;
  stockExchange?: string;
  currency?: string;
  sector?: string;
  industry?: string;
  marketCap?: number | string;
  price?: number | string;
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

const THEME_KEYWORD_MAP: Record<
  string,
  { sector?: string; industry?: string }
> = {
  energy: { sector: "Energy" },
  oil: { sector: "Energy" },
  bank: { sector: "Financial Services" },
  finance: { sector: "Financial Services" },
  financial: { sector: "Financial Services" },
  technology: { sector: "Technology" },
  tech: { sector: "Technology" },
  semiconductor: { industry: "Semiconductors" },
  software: { industry: "Software" },
  healthcare: { sector: "Healthcare" },
  consumer: { sector: "Consumer Cyclical" },
  retail: { industry: "Specialty Retail" },
};

function getThemeFilters(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  for (const keyword of Object.keys(THEME_KEYWORD_MAP)) {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    if (regex.test(normalized)) {
      return THEME_KEYWORD_MAP[keyword];
    }
  }

  return null;
}

export async function searchStocksByTheme(
  query: string,
  limit: number = 50
): Promise<FMPCompanyScreenerResult[]> {
  if (!FMP_API_KEY) {
    console.error("FMP_API_KEY not configured");
    return [];
  }

  if (!query || query.trim().length === 0) {
    return [];
  }

  const filters = getThemeFilters(query);
  if (!filters) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      apikey: FMP_API_KEY,
      limit: String(limit),
    });

    if (filters.sector) {
      params.set("sector", filters.sector);
    }
    if (filters.industry) {
      params.set("industry", filters.industry);
    }

    const url = `https://financialmodelingprep.com/stable/company-screener?${params.toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(
        `FMP API error for theme search: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();
    let rawResults: any[] = [];

    if (Array.isArray(data)) {
      rawResults = data;
    } else if (data && Array.isArray(data.data)) {
      rawResults = data.data;
    }

    return rawResults.map((item: any) => ({
      symbol: String(item.symbol || item.ticker || "").toUpperCase(),
      companyName: item.companyName || item.name || "",
      name: item.companyName || item.name || "",
      exchange: item.exchange || item.stockExchange || item.exchangeShortName,
      stockExchange: item.stockExchange || item.exchange || item.exchangeShortName,
      currency: item.currency,
      sector: item.sector,
      industry: item.industry,
      marketCap: item.marketCap,
      price: item.price,
    }));
  } catch (error) {
    console.error("Error searching stocks by theme:", error);
    return [];
  }
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

// In-memory cache for stock directory (module-level)
export interface StockListItem {
  symbol: string;
  name: string;
  price: number | null;
  exchange?: string | null;
  exchangeShortName?: string | null;
  type?: string | null;
}

let _stockListCache: StockListItem[] | null = null;

let _stockListCacheTimestamp: number | null = null;
const STOCK_LIST_CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

/**
 * Fetch and return normalized stock list from FMP with in-memory caching
 */
export async function getStockList(): Promise<StockListItem[]> {
  if (!FMP_API_KEY) {
    throw new Error("FMP_API_KEY not configured");
  }

  // Return cached if fresh
  if (
    _stockListCache &&
    _stockListCacheTimestamp &&
    Date.now() - _stockListCacheTimestamp < STOCK_LIST_CACHE_TTL_MS
  ) {
    return _stockListCache;
  }

  try {
    const url = `https://financialmodelingprep.com/stable/stock-list?apikey=${FMP_API_KEY}`;

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // Let module-level cache handle freshness; but mark as revalidate short
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`FMP stock-list error: ${res.status}`);
    }

    const data = await res.json();

    // FMP may return either an array or an object with `data` field
    let rawList: any[] = [];

    if (Array.isArray(data)) {
      rawList = data;
    } else if (data && Array.isArray(data.data)) {
      rawList = data.data;
    } else if (data && Array.isArray((data as any).symbols)) {
      // some endpoints use `symbols`
      rawList = (data as any).symbols;
    } else {
      // If response looks like an error object, log and treat as empty
      console.warn("Unexpected FMP stock-list response shape", data);
      rawList = [];
    }

    const normalized: StockListItem[] = rawList.map((item: any) => {
      const symbol = (item.symbol || item.ticker || item.code || "").toString();
      const name = (item.name || item.companyName || item.title || "").toString();
      const priceRaw = item.price ?? item.lastPrice ?? item.currentPrice ?? null;
      const price = priceRaw == null ? null : Number(priceRaw);
      const exchange = item.exchange || item.exchangeName || item.stockExchange || null;
      const exchangeShortName = item.exchangeShortName || item.exchange_short_name || null;
      const type = item.type || item.instrumentType || item.securityType || null;

      return {
        symbol,
        name,
        price,
        exchange,
        exchangeShortName,
        type,
      } as StockListItem;
    });

    _stockListCache = normalized;
    _stockListCacheTimestamp = Date.now();

    return _stockListCache;
  } catch (error) {
    console.error("Error fetching stock list:", error);
    // On error, do not clear cache if present — return cached data if available
    if (_stockListCache) return _stockListCache;
    return [] as StockListItem[];
  }
}

/**
 * Search the cached stock directory. Returns up to 50 results.
 * Ordering: exact symbol matches, prefix symbol matches, name matches.
 */
export async function searchStockDirectory(query: string) {
  if (!query || query.trim().length === 0) return [];

  // Ensure we have the list
  let list = await getStockList();

  // If list is empty, fall back to search endpoints (searchStocks)
  if (!list || list.length === 0) {
    try {
      const fmpSearch = await searchStocks(query, 50);
      if (fmpSearch && fmpSearch.length > 0) {
        list = fmpSearch.map((it) => ({
          symbol: it.symbol,
          name: it.name,
          price: null,
          exchange: (it as any).stockExchange || null,
          exchangeShortName: null,
          type: null,
        } as StockListItem));
      }
    } catch (err) {
      console.error("Fallback searchStocks failed:", err);
    }
  }

  const q = query.trim();
  const qUpper = q.toUpperCase();
  const qLower = q.toLowerCase();

  const exact: typeof list = [];
  const prefix: typeof list = [];
  const nameMatches: typeof list = [];

  for (const item of list) {
    const sym = (item.symbol || "").toString();
    const symUpper = sym.toUpperCase();
    const name = (item.name || "").toString();
    const nameLower = name.toLowerCase();

    if (symUpper === qUpper) {
      exact.push(item);
      continue;
    }

    if (symUpper.startsWith(qUpper)) {
      prefix.push(item);
      continue;
    }

    if (nameLower.includes(qLower)) {
      nameMatches.push(item);
      continue;
    }
  }

  const seen = new Set<string>();
  const results: typeof list = [];

  const pushUnique = (arr: typeof list) => {
    for (const it of arr) {
      const s = (it.symbol || "").toString();
      if (!s) continue;
      if (seen.has(s)) continue;
      seen.add(s);
      results.push(it);
      if (results.length >= 50) return;
    }
  };

  pushUnique(exact);
  if (results.length < 50) pushUnique(prefix);
  if (results.length < 50) pushUnique(nameMatches);

  return results.slice(0, 50);
}
