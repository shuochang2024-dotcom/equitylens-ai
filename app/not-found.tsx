import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-950">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">The page you are looking for does not exist in this MVP.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
        Return Home
      </Link>
    </Container>
  );
}
