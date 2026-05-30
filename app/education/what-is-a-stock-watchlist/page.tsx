import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is a Stock Watchlist? How to Organize Your Research | EquityLens AI",
  description:
    "Learn how to build and maintain a stock watchlist as a tool for organizing your stock research. Educational content only.",
};

const related = [
  { href: "/education/how-to-analyze-a-stock", label: "How to Analyze a Stock" },
  { href: "/education/what-is-risk-analysis", label: "What Is Stock Risk Analysis?" },
  { href: "/education/how-to-read-an-earnings-report", label: "How to Read an Earnings Report" },
];

export default function WhatIsAStockWatchlistPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is a Stock Watchlist? How to Organize Your Research"
        description="A beginner-friendly guide to building and maintaining a stock watchlist for learning and research."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What a watchlist is</h2>
          <p>
            A stock watchlist is a personal collection of companies you want to learn about and monitor over time. It is a research tool that helps you organize your thoughts and track changes in companies that interest you. A watchlist is not a list of stocks to buy or sell; it is a learning tool.
          </p>
          <p>
            Watchlists can be maintained using spreadsheets, note-taking apps, or dedicated investment research tools. The format is less important than the discipline of regularly updating and reviewing the list.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why build a watchlist</h2>
          <p>
            A watchlist helps you stay organized and focused. Instead of following hundreds of stocks randomly, a watchlist lets you concentrate on a manageable number of companies that you understand. This focused approach supports better learning.
          </p>
          <p>
            A watchlist also encourages regular monitoring. By checking your watchlist regularly, you stay informed about earnings releases, price changes, and industry developments affecting your companies of interest.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How to build a watchlist</h2>
          <p>
            Start with a small number of companies, perhaps 5 to 10. Include companies from different industries so you get exposure to diverse business models. Focus on companies where the business model makes sense to you and where you can find publicly available information.
          </p>
          <p>
            Use your watchlist to document key facts about each company: industry, business model, recent earnings, valuation, and any major risks. This documentation helps you review your thinking and track how your understanding develops.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What to track on a watchlist</h2>
          <p>
            For each company on your watchlist, consider tracking revenue growth, earnings trends, valuation metrics, and risk factors. You might also note important upcoming events such as earnings dates or product launches.
          </p>
          <p>
            Update your watchlist after each earnings release or quarterly report. Note whether the company met expectations and whether your understanding of the business has changed. This habit builds research discipline and deepens your learning.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Watchlist best practices</h2>
          <p>
            Keep your watchlist focused on learning, not on trying to predict prices. Update it regularly, such as after earnings releases or when major news affects the company. Review your watchlist periodically to refresh your understanding of each company.
          </p>
          <p>
            Over time, you may add or remove companies from your watchlist as your interests change or as you finish learning about a company. A watchlist is a living document that evolves with your knowledge and interests.
          </p>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
          <p>
            This content is for educational and informational purposes only and does not constitute investment advice, financial advice, or trading advice.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-900">Related articles</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pb-10" />
      </div>
    </Container>
  );
}
