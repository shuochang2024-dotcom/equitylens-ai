import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is Market Cap? Understanding Company Size in Stock Research",
  description:
    "Learn what market capitalization means, how it is calculated, and why it matters when comparing companies.",
};

export default function WhatIsMarketCapPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is Market Cap? Understanding Company Size in Stock Research"
        description="A beginner's guide to market capitalization and how it helps classify public companies."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What market cap means</h2>
          <p>
            Market capitalization, or market cap, is the total market value of a company’s shares. It is a simple way to describe the size of a public company.
          </p>
          <p>
            Market cap helps researchers understand whether a company is a large, established business or a smaller, potentially more volatile company.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How market cap is calculated</h2>
          <p>
            The calculation is straightforward. Multiply the stock price by the number of shares outstanding. The result is the total value the market places on the company.
          </p>
          <p>
            For example, if a company has 100 million shares outstanding and a stock price of $10, the market cap is $1 billion. This creates an easy way to compare company sizes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Large cap, mid cap, and small cap</h2>
          <p>
            Companies are often grouped by size. Large cap companies are typically the biggest names with stable revenue and broad operations. Mid cap companies are in the middle, and small cap companies are smaller and can be more growth-oriented.
          </p>
          <p>
            These categories are useful because they often share common traits. For example, large cap companies may be more stable, while small cap companies may offer higher growth potential and higher risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why market cap matters</h2>
          <p>
            Market cap matters because it provides context when comparing companies. It helps separate businesses of different sizes and can influence the types of metrics that are most relevant.
          </p>
          <p>
            For instance, a small cap company may be evaluated more on growth prospects, while a large cap company may be evaluated more on stability and cash flow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Market cap vs company quality</h2>
          <p>
            Market cap is not a direct measure of company quality. A large market cap may reflect investor confidence, but it does not guarantee strong fundamentals or low risk.
          </p>
          <p>
            It is important to use market cap as a starting point, and then look deeper at revenue, earnings, margins, and risk factors to understand the business quality.
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
            <Link href="/education/what-is-pe-ratio" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              What Is P/E Ratio?
            </Link>
            <Link href="/education/how-to-read-an-earnings-report" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              How to Read an Earnings Report
            </Link>
            <Link href="/education/what-is-risk-analysis" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              What Is Risk Analysis?
            </Link>
          </div>
        </div>

        <div className="pb-10" />
      </div>
    </Container>
  );
}
