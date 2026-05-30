import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "EquityLens AI | Smarter Stock Research Powered by AI",
  description:
    "EquityLens AI helps individual investors understand U.S. stocks faster with AI summaries, research scores, earnings breakdowns, valuation checks, and risk analysis.",
  verification: {
    google: "gwV7D6WyODw75kNKOY1NieyBA-PBr_wgyduQXIcNKtI",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
