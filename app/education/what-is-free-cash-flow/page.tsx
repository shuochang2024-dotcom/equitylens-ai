import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "What Is Free Cash Flow? Why It Matters in Stock Research | EquityLens AI",
  description:
    "Learn what free cash flow means, how it is calculated, and why it is important in stock research. Educational content only.",
};

const related = [
  { href: "/education/how-to-read-an-earnings-report", label: "How to Read an Earnings Report" },
  { href: "/education/what-is-eps", label: "What Is EPS?" },
  { href: "/education/what-is-revenue-growth", label: "What Is Revenue Growth?" },
];

export default function WhatIsFreeCashFlowPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="What Is Free Cash Flow? Why It Matters in Stock Research"
        description="A beginner-friendly guide to free cash flow and how it indicates financial health."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What free cash flow means</h2>
          <p>
            Free cash flow is the cash a company generates from operations after accounting for capital expenditures. It is called "free" because it is the cash available to the company and shareholders after the company has invested in maintaining and growing its asset base.
          </p>
          <p>
            Unlike earnings, which can be affected by accounting choices, free cash flow is harder to manipulate because it represents actual money moving in and out of the company.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">How free cash flow is calculated</h2>
          <p>
            Free cash flow is typically calculated by starting with operating cash flow and subtracting capital expenditures. Operating cash flow represents cash generated from business operations. Capital expenditures are investments in equipment, facilities, and other long-term assets.
          </p>
          <p>
            The formula looks like this: Free Cash Flow = Operating Cash Flow - Capital Expenditures. A positive free cash flow means the company is generating more cash than it needs to invest in its business.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Why free cash flow matters</h2>
          <p>
            Free cash flow shows the company's financial flexibility. Strong free cash flow means the company can fund growth, pay dividends, reduce debt, or build cash reserves. Weak or negative free cash flow may indicate the company is under pressure.
          </p>
          <p>
            For beginners, tracking free cash flow over time helps identify whether a company is becoming more or less healthy financially. Growing free cash flow is generally a positive sign.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Free cash flow vs earnings</h2>
          <p>
            A company can report strong earnings but weak free cash flow if it is investing heavily in capital or if cash is tied up in operations. Conversely, a company can have weak earnings but strong free cash flow by managing working capital efficiently.
          </p>
          <p>
            This is why research should include both metrics. Free cash flow provides a clearer picture of actual cash available to the company.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Capital intensity</h2>
          <p>
            Some businesses are capital-intensive, meaning they require large investments in equipment and facilities. Other businesses are asset-light, requiring minimal capital investment. Understanding capital intensity helps explain differences in free cash flow.
          </p>
          <p>
            For example, a software company may have higher free cash flow as a percentage of revenue because it requires less capital investment than a manufacturing company.
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
