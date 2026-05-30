import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/stocks", label: "Stocks" },
  { href: "/stocks-to-watch", label: "Stocks to Watch" },
  { href: "/earnings", label: "Earnings" },
  { href: "/market-brief", label: "Market Brief" },
  { href: "/pricing", label: "Pricing" },
  { href: "/education", label: "Education" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold text-white">EL</span>
              <span className="font-semibold text-slate-950">EquityLens AI</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              AI-powered U.S. stock research for educational, evidence-based market understanding.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs leading-5 text-slate-500">
          © 2026 EquityLens AI. For educational and informational purposes only.
        </p>
      </Container>
    </footer>
  );
}
