import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Dashboard | EquityLens AI",
  description: "A private dashboard for signed in EquityLens AI users.",
};

export default function DashboardPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Member dashboard"
        title="Your EquityLens dashboard"
        description="Access your watchlist, saved research highlights, and updates for U.S. stocks."
      />

      <div className="mt-10 grid gap-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Welcome back</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            This dashboard is available only to signed in users and is the entry point for your private research experience.
          </p>
        </div>
      </div>
    </Container>
  );
}
