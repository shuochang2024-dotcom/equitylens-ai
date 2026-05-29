import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "About | EquityLens AI",
  description: "Learn about EquityLens AI, an educational AI stock research platform for individual investors.",
};

const principles = [
  {
    title: "Evidence over hype",
    text: "Every research view should be connected to business data, valuation context, earnings quality, sentiment, or identifiable risk factors.",
  },
  {
    title: "Risk is part of the product",
    text: "The platform makes risk visible instead of focusing only on opportunity narratives or short-term excitement.",
  },
  {
    title: "Plain English matters",
    text: "Individual investors should not need to decode dense financial jargon to understand the basic research case for a public company.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Helping individual investors understand public companies faster.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            EquityLens AI helps individual investors understand public companies faster through structured, evidence-based stock research. It is designed as an educational research platform, not a financial advisor.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Product boundaries</h2>
          <div className="mt-6 space-y-4">
            {[
              "We are not a financial advisor.",
              "We do not provide personalized investment advice.",
              "We focus on education, research, and risk awareness.",
              "We do not connect to brokerage accounts or execute transactions.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-slate-950">Research principles</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">Future roadmap</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["OpenAI API", "Stock data APIs", "Authentication", "Stripe subscriptions"].map((item) => (
            <div key={item} className="rounded-2xl bg-blue-50 p-4 text-sm font-semibold text-blue-800">{item}</div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </Container>
  );
}
