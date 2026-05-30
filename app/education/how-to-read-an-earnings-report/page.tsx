import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "How to Read an Earnings Report: Revenue, EPS, Margins and Guidance",
  description:
    "Learn how to read an earnings report by reviewing revenue, EPS, margins, guidance, and key risks. Educational content only.",
};

export default function HowToReadAnEarningsReportPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="How to Read an Earnings Report: Revenue, EPS, Margins and Guidance"
        description="A beginner-friendly overview of the main components in quarterly corporate financial reports."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What an earnings report is</h2>
          <p>
            An earnings report is a periodic summary prepared by a public company to share its financial results. It typically covers revenue, profit, and other measures that show how the business performed during the quarter.
          </p>
          <p>
            For beginners, the most important idea is that earnings reports are a snapshot of recent performance. They are one part of a broader research process that also includes company strategy, industry conditions, and longer-term trends.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Revenue</h2>
          <p>
            Revenue is the total amount of money the company earned from its core business activity. It is often called the top line because it appears near the top of the income statement.
          </p>
          <p>
            When reading revenue, look at whether it is growing, shrinking, or stable compared with prior periods. Rising revenue can signal increasing demand, while falling revenue may raise questions about the business model.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">EPS</h2>
          <p>
            Earnings per share, or EPS, measures profit on a per-share basis. It is calculated by dividing the company’s net income by the number of shares outstanding.
          </p>
          <p>
            EPS is useful because it provides a standardized way to compare profitability across companies of different sizes. However, it is still only one number, and it should be considered alongside revenue and other metrics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Gross margin and operating margin</h2>
          <p>
            Gross margin shows the percentage of revenue left after subtracting the direct cost of goods sold. Operating margin includes additional operating expenses, such as research, selling, and administrative costs.
          </p>
          <p>
            These margins help you understand how efficiently a company runs its operations. Higher margins can indicate stronger pricing power or cost control, while lower margins may show more pressure on profitability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Guidance</h2>
          <p>
            Guidance is the company’s own outlook for future revenue or earnings. It is often included in earnings releases and helps investors understand management’s expectations.
          </p>
          <p>
            For a beginner, guidance is a warning sign when it changes dramatically. If a company lowers guidance, it may indicate the business is facing new challenges. If guidance stays steady, it suggests management sees a stable path ahead.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Balance sheet signals</h2>
          <p>
            The balance sheet is another part of financial reporting. It shows assets, liabilities, and shareholder equity, and it can reveal the company’s financial strength.
          </p>
          <p>
            Pay attention to cash levels, debt, and whether the company has enough liquidity to support its operations. A healthy balance sheet can help a business handle unexpected events.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Risks to consider</h2>
          <p>
            Every earnings report comes with risks. These can include slower revenue, weaker margins, changes in customer demand, or industry regulation.
          </p>
          <p>
            Reading the risks section of the report, along with the management discussion, helps you see where the company may face future pressure. It is an important step in building balanced research.
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
