import { stocks } from "@/data/stocks";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function getStockByTicker(ticker: string) {
  return stocks.find((stock) => stock.ticker.toLowerCase() === ticker.toLowerCase());
}

export function getStocksByTickers(tickers: string[]) {
  return tickers
    .map((ticker) => getStockByTicker(ticker))
    .filter((stock): stock is NonNullable<typeof stock> => Boolean(stock));
}
