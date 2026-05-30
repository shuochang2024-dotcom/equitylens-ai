import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is Gross Margin? Understanding Business Profitability | EquityLens AI",
  description:
    "Learn what gross margin means, how it is calculated, and why it matters in stock research. Educational content only.",
};

const related = [
  { href: "/education/how-to-read-an-earnings-report", label: "How to Read an Earnings Report" },
  { href: "/education/what-is-revenue-growth", label: "What Is Revenue Growth?" },
  { href: "/education/what-is-free-cash-flow", label: "What Is Free Cash Flow?" },
];

export default function WhatIsGrossMarginPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is Gross Margin? Understanding Business Profitability"
        description="A beginner-friendly guide to gross margin and what it reveals about a company's pricing and efficiency."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What gross margin means</h2>
          <p>
            Gross margin is the percentage of revenue that remains after subtracting the cost of goods sold. It shows how much profit a company makes on each dollar of sales before accounting for operating expenses like salaries and marketing.
          </p>
          <p>
            For example, if a company has $100 in revenue and $30 in cost of goods sold, the gross profit is $70, and the gross margin is 70%. Higher gross margin generally means more efficient or premium business operations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How to calculate gross margin</h2>
          <p>
            Gross margin is calculated by taking gross profit and dividing it by revenue, then multiplying by 100 to express it as a percentage. The formula is: (Revenue - Cost of Goods Sold) / Revenue × 100.
          </p>
          <p>
            For beginners, the key is to understand that gross margin reflects the core profitability of the business before operating costs are factored in. It helps identify whether the company is generating value from its basic business operations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why gross margin matters</h2>
          <p>
            Gross margin reveals the health of the core business. A company with stable or improving gross margin is often managing its production costs and pricing well. Declining gross margin may signal rising costs or pricing pressure.
          </p>
          <p>
            Gross margin also helps compare companies in the same industry. Companies with higher gross margins may have stronger brand power, better efficiency, or unique products.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Industry variation</h2>
          <p>
            Gross margins vary significantly by industry. Software companies often have very high gross margins because they do not have significant costs to produce additional copies. Retail companies typically have lower gross margins because they buy products for resale.
          </p>
          <p>
            When researching a company, it is useful to compare its gross margin to industry peers to understand whether it is performing well or struggling relative to competitors.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Gross margin and operating margin</h2>
          <p>
            After gross profit, companies must pay operating expenses like salaries, rent, and marketing. When these are subtracted, the result is operating profit and operating margin. Operating margin is typically lower than gross margin because it includes more costs.
          </p>
          <p>
            Tracking both gross and operating margin helps identify whether a company's profitability challenges come from the cost of goods sold or from operating expense management.
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
