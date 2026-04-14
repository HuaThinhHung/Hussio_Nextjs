import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">HUSSIO Blog</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Style guides, office wear tips, and updates from HUSSIO are coming soon.
        </p>
        <Link href="/products" className="mt-8 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-zinc-100">
          Browse products
        </Link>
      </section>
    </div>
  );
}
