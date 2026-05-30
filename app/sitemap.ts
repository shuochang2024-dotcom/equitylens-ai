import { type MetadataRoute } from "next";

const baseUrl = "https://equitylens-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/stocks` },
    { url: `${baseUrl}/stocks/nvda` },
    { url: `${baseUrl}/stocks/tsla` },
    { url: `${baseUrl}/stocks/aapl` },
    { url: `${baseUrl}/stocks/baba` },
    { url: `${baseUrl}/stocks/zh` },
    { url: `${baseUrl}/stocks-to-watch` },
    { url: `${baseUrl}/earnings` },
    { url: `${baseUrl}/market-brief` },
    { url: `${baseUrl}/pricing` },
    { url: `${baseUrl}/about` },
  ];
}
