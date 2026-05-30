import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is EPS? Understanding Earnings Per Share in Stock Research | EquityLens AI",
  description:
    "Learn what earnings per share means, how it is calculated, and how to use it in stock research. Educational content only.",
};

const related = [
  { href: "/education/how-to-read-an-earnings-report", label: "How to Read an Earnings Report" },
  { href: "/education/what-is-pe-ratio", label: "What Is P/E Ratio?" },
  { href: "/education/what-is-revenue-growth", label: "What Is Revenue Growth?" },
];

export default function WhatIsEpsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is EPS? Understanding Earnings Per Share in Stock Research"
        description="A beginner-friendly guide to earnings per share and how to use it when evaluating companies."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What EPS means</h2>
          <p>
            Earnings per share, or EPS, is a measure of a company's profit on a per-share basis. It divides the company's net income by the number of shares outstanding. EPS is one of the most commonly used metrics in stock research because it allows comparison across companies of different sizes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How EPS is calculated</h2>
          <p>
            EPS is calculated by taking the company's net income and dividing it by the number of shares outstanding. For example, if a company earns $100 million and has 10 million shares, the EPS would be $10 per share.
          </p>
          <p>
            Companies often report both basic EPS and diluted EPS. Diluted EPS includes the impact of stock options and other instruments that could be converted into shares, which gives a more conservative picture.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Growing vs declining EPS</h2>
          <p>
            For beginners, one useful habit is to track EPS over several quarters. Growing EPS suggests the company is increasing its profitability or managing better, while declining EPS may signal challenges.
          </p>
          <p>
            However, EPS alone does not tell the full story. EPS can be affected by the number of shares outstanding, which can change due to stock buybacks or new share issuance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">EPS and valuation</h2>
          <p>
            EPS is the foundation for many valuation metrics. The price-to-earnings ratio divides the stock price by EPS. Understanding EPS helps you evaluate whether a stock is priced high or low relative to its earnings.
          </p>
          <p>
            Remember that valuation is just one part of analysis. A low EPS ratio does not automatically mean the stock is a good value, and a high ratio does not mean it is expensive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Limits of EPS</h2>
          <p>
            EPS has limitations. It does not show cash flow, debt levels, or asset quality. It can also be affected by accounting choices and one-time items. Some companies report adjusted EPS to remove unusual events.
          </p>
          <p>
            For thorough research, combine EPS with revenue trends, cash flow, and balance sheet strength to build a more complete picture.
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
