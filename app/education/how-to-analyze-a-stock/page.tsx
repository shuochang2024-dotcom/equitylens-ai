import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "How to Analyze a Stock: A Beginner-Friendly Research Framework",
  description:
    "Learn how to analyze a stock using company fundamentals, earnings, valuation, risks, and market context. Educational content only, not investment advice.",
};

export default function HowToAnalyzeAStockPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Education article"
        title="How to Analyze a Stock: A Beginner-Friendly Research Framework"
        description="A practical guide to stock research that focuses on fundamentals, earnings, valuation, risk, and market context."
      />

      <div className="mt-10 max-w-4xl space-y-10 text-slate-700">
        <Link
          href="/education"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Education hub
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">What stock analysis means</h2>
          <p>
            Stock analysis is the process of studying a company and its business to understand how it operates and how it performs. It is a disciplined way to look beyond the ticker symbol and consider the underlying fundamentals that drive long-term value.
          </p>
          <p>
            For beginners, stock analysis starts with clear questions: what does the company do, how does it earn revenue, how healthy are its finances, and what risks should be understood before adding it to a watchlist.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Company overview</h2>
          <p>
            The company overview is the foundation of research. It describes the business model, the main products or services, the industry it serves, and the markets where it operates.
          </p>
          <p>
            A clear overview helps a beginner frame the story. It explains whether the company is consumer-facing, industrial, software-based, or focused on a niche market. This context is useful when comparing one business to another.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Revenue and earnings</h2>
          <p>
            Revenue shows how much money a company brings in, while earnings measure how much money remains after expenses. These two figures are central to stock research because they reflect growth and profitability.
          </p>
          <p>
            Beginners often look at revenue trends over several quarters, and they pay attention to whether earnings are rising, falling, or holding steady. Consistent growth is usually a sign of a healthy business model.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Valuation basics</h2>
          <p>
            Valuation is the process of determining whether a stock price reflects the company’s fundamentals. Common valuation measures include price-to-earnings, price-to-sales, and market capitalization.
          </p>
          <p>
            It is important to remember that valuation is not a prediction of future returns. It is a way to compare how much the market values one company relative to others with similar characteristics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Risk factors</h2>
          <p>
            Risk analysis is a key part of stock research. It is useful to separate risk into categories such as business risk, financial risk, valuation risk, and industry risk.
          </p>
          <p>
            For example, a company with high debt may face financial risk if interest rates rise. A business that depends on one product may face risk if demand shifts. Understanding these risks helps make the research process more balanced.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Market context</h2>
          <p>
            Market context includes industry trends, macroeconomic conditions, and changes in the broader environment. It can help explain why certain companies are performing better or worse than others.
          </p>
          <p>
            A beginner does not need to predict the market, but it can be helpful to note whether a company operates in a stable sector, a cyclical industry, or an area with rapid change.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950">Building a watchlist</h2>
          <p>
            A watchlist is a personal list of companies to monitor. It is a useful tool for organizing ideas and tracking the information that matters most to the investor.
          </p>
          <p>
            When building a watchlist, focus on a handful of businesses that you understand. Use the company overview, revenue, valuation, and risk sections above to guide what you want to follow over time.
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
