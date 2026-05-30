import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is Revenue Growth? A Simple Guide for Stock Research | EquityLens AI",
  description:
    "Learn what revenue growth means, how to measure it, and why it matters when researching stocks. Educational content only.",
};

const related = [
  { href: "/education/how-to-analyze-a-stock", label: "How to Analyze a Stock" },
  { href: "/education/what-is-eps", label: "What Is EPS?" },
  { href: "/education/what-is-free-cash-flow", label: "What Is Free Cash Flow?" },
];

export default function WhatIsRevenueGrowthPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is Revenue Growth? A Simple Guide for Stock Research"
        description="A beginner-friendly overview of revenue growth and how to use it in stock research."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What revenue growth means</h2>
          <p>
            Revenue growth measures how much a company's sales have increased over time. It is expressed as a percentage, showing the increase from one period to another. For example, if a company's revenue grows from $100 million to $110 million, the growth rate is 10%.
          </p>
          <p>
            Revenue growth is an important signal because it shows whether a company is expanding its business or contracting. Consistent revenue growth is often a positive sign for investors to research.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How to measure revenue growth</h2>
          <p>
            The simplest way to measure revenue growth is to compare revenue in the current period to the prior period. Year-over-year growth compares the same quarter or year to the previous year. Quarter-over-quarter growth compares one quarter to the previous quarter.
          </p>
          <p>
            Beginners often look at year-over-year growth because it removes seasonal effects. For example, retail revenue might be naturally higher in Q4 due to holiday shopping.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why revenue growth matters</h2>
          <p>
            Revenue growth shows whether the company is reaching more customers, selling more products, or growing its market share. Growing revenue is often associated with a healthy and expanding business.
          </p>
          <p>
            However, revenue growth alone does not tell the whole story. A company can have growing revenue but declining profits if costs are rising faster than sales. That is why revenue should be considered alongside profitability metrics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Fast growth vs slow growth</h2>
          <p>
            Some companies grow revenue very quickly, especially newer businesses. Others grow slowly or remain stable. The appropriate growth rate depends on the industry and the company's maturity.
          </p>
          <p>
            Fast growth can be exciting, but it may come with higher risk. Slow-growing companies might be more stable but offer fewer growth opportunities. Use growth context to understand the company's stage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Revenue quality</h2>
          <p>
            Not all revenue growth is created equal. Quality revenue growth comes from real demand and sustainable business advantages. Growth driven by unsustainable discounting or one-time sales may not be reliable.
          </p>
          <p>
            As a beginner, pay attention to the composition of revenue growth. If growth is driven by one customer or product, it may be riskier than diversified growth across many customers.
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
