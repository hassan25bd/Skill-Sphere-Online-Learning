import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">404</p>
      <h1 className="mt-3 font-display text-5xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you requested does not exist or may have been moved.
      </p>
      <Link href="/" className="btn mt-8 bg-brand text-white hover:bg-brand-dark">
        Back to Home
      </Link>
    </section>
  );
}
