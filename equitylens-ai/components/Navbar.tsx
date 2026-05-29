"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/stocks", label: "Stocks" },
  { href: "/stocks-to-watch", label: "Stocks to Watch" },
  { href: "/earnings", label: "Earnings" },
  { href: "/market-brief", label: "Market Brief" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
            EL
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-950">EquityLens AI</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/stocks" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
            Search
          </Link>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Sign In
          </button>
        </div>

        <button
          className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="block h-5 w-5 text-center text-base leading-5">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/stocks" onClick={() => setOpen(false)} className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700">
                Search
              </Link>
              <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Sign In</button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
