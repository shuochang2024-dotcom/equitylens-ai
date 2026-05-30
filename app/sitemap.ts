import { type MetadataRoute } from "next";

const baseUrl = "https://equitylens-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/stocks` },
    { url: `${baseUrl}/stocks/nvda` },
    { url: `${baseUrl}/stocks/tsla` },
    { url: `${baseUrl}/stocks/aapl` },
    { url: `${baseUrl}/stocks/msft` },
    { url: `${baseUrl}/stocks/amd` },
    { url: `${baseUrl}/stocks/pltr` },
    { url: `${baseUrl}/stocks/baba` },
    { url: `${baseUrl}/stocks/pdd` },
    { url: `${baseUrl}/stocks/zh` },
    { url: `${baseUrl}/stocks/nio` },
    { url: `${baseUrl}/stocks/li` },
    { url: `${baseUrl}/stocks/xpev` },
    { url: `${baseUrl}/stocks/googl` },
    { url: `${baseUrl}/stocks/meta` },
    { url: `${baseUrl}/stocks/amzn` },
    { url: `${baseUrl}/stocks-to-watch` },
    { url: `${baseUrl}/earnings` },
    { url: `${baseUrl}/market-brief` },
    { url: `${baseUrl}/pricing` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/lists/ai-stocks-to-watch` },
    { url: `${baseUrl}/lists/semiconductor-stocks-to-watch` },
    { url: `${baseUrl}/lists/chinese-adr-stocks-to-watch` },
    { url: `${baseUrl}/lists/ev-stocks-to-watch` },
    { url: `${baseUrl}/lists/energy-stocks-to-watch` },
 
{ url: `${baseUrl}/education` },
{ url: `${baseUrl}/education/how-to-analyze-a-stock` },
{ url: `${baseUrl}/education/how-to-read-an-earnings-report` },
{ url: `${baseUrl}/education/what-is-pe-ratio` },
{ url: `${baseUrl}/education/what-is-market-cap` },
{ url: `${baseUrl}/education/what-is-risk-analysis` },
];
}
