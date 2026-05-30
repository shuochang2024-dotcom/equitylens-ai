import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";

const articles = [
  {
    title: "How to Analyze a Stock",
    description: "A beginner-friendly guide to evaluating company fundamentals, earnings, valuation, and risk.",
    href: "/education/how-to-analyze-a-stock",
    topic: "Stock analysis",
  },
  {
    title: "How to Read an Earnings Report",
    description: "Learn the key metrics and figures that matter when studying quarterly financial results.",
    href: "/education/how-to-read-an-earnings-report",
    topic: "Earnings",
  },
  {
    title: "What Is P/E Ratio",
    description: "Understand the price-to-earnings ratio and how it can help frame valuation conversations.",
    href: "/education/what-is-pe-ratio",
    topic: "Valuation",
  },
  {
    title: "What Is Market Cap",
    description: "Explore how market capitalization is calculated and why it matters for company size comparisons.",
    href: "/education/what-is-market-cap",
    topic: "Market context",
  },
  {
    title: "What Is Risk Analysis",
    description: "Learn how risk analysis informs stock research through business, market, and valuation risks.",
    href: "/education/what-is-risk-analysis",
    topic: "Risk",
  },
];

export const metadata: Metadata = {
  title: "Stock Research Education Center | EquityLens AI",
  description:
    "Learn the basics of stock research, earnings analysis, valuation, risk analysis, and market understanding. Educational content only, not investment advice.",
};

export default function EducationPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education hub"
        title="Stock Research Education Center"
        description="Browse foundational articles on stock research topics, earnings analysis, valuation, risk, and market context."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group block rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                {article.topic}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Beginner
              </span>
            </div>
            <h2 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 group-hover:text-blue-700">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
        <p>
          This content is for educational and informational purposes only and does not constitute investment advice, financial advice, or trading advice.
        </p>
      </div>

      <div className="mt-6">
        <Disclaimer />
      </div>
    </Container>
  );
}
