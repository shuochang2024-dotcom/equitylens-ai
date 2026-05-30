import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is P/E Ratio? A Simple Guide for Stock Research",
  description:
    "Understand what the price-to-earnings ratio means, how it is used in stock research, and why it should not be viewed in isolation.",
};

export default function WhatIsPERatioPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is P/E Ratio? A Simple Guide for Stock Research"
        description="Learn how price-to-earnings ratio is calculated and why it matters in a broader research process."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What P/E ratio means</h2>
          <p>
            The price-to-earnings ratio, or P/E ratio, is a valuation metric used to compare a stock’s price with its earnings. It gives a quick view of how much investors are willing to pay for a dollar of earnings.
          </p>
          <p>
            In simple terms, a higher P/E ratio means the market expects more future growth from the company, while a lower P/E ratio may indicate slower expected growth or a more mature business.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How P/E ratio is calculated</h2>
          <p>
            The P/E ratio is calculated by dividing the stock price by earnings per share (EPS). It can also be written as market capitalization divided by net income.
          </p>
          <p>
            For a beginner, the key point is that the ratio links price and profits. If a company earns $1 per share and the stock trades at $20, the P/E ratio is 20.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">High P/E vs low P/E</h2>
          <p>
            A high P/E ratio can mean that investors have strong growth expectations. It may also mean that the stock is priced richly compared with current earnings.
          </p>
          <p>
            A low P/E ratio can suggest a lower growth outlook or that the stock is undervalued relative to earnings. It can also reflect a business with more risk or cyclical performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why growth matters</h2>
          <p>
            Growth is one reason the P/E ratio is most useful when it is paired with an understanding of earnings trends. If earnings are expected to grow, a higher P/E may be more reasonable.
          </p>
          <p>
            Conversely, if earnings are flat or declining, a high P/E ratio may be harder to justify. Growth expectations are part of the story behind the number.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Limits of P/E ratio</h2>
          <p>
            P/E ratio has limits. It does not capture debt levels, cash flow, or the quality of earnings. It also does not apply cleanly to companies with negative earnings.
          </p>
          <p>
            Because the ratio is only one snapshot, it should not be the sole basis for research. It is best used alongside other metrics and a clear view of the business model.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How to use it responsibly</h2>
          <p>
            To use the P/E ratio responsibly, compare it with peers in the same industry and consider the company’s growth expectations. Also compare the current ratio with its own history.
          </p>
          <p>
            It is helpful to ask whether earnings are stable, growing, or volatile. That context helps turn the P/E ratio from a single number into an informative part of research.
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
            <Link href="/education/what-is-market-cap" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              What Is Market Cap?
            </Link>
            <Link href="/education/how-to-analyze-a-stock" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              How to Analyze a Stock
            </Link>
            <Link href="/education/how-to-read-an-earnings-report" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-blue-200 hover:bg-slate-50">
              How to Read an Earnings Report
            </Link>
          </div>
        </div>

        <div className="pb-10" />
      </div>
    </Container>
  );
}
