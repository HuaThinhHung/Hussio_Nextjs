import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.collections.title,
  description: seoConfig.collections.description,
};

const collections = [
  { title: "QUIET STRENGTH", year: "2024" },
  { title: "MODERN BLACK", year: "2024" },
  { title: "SUMMER ESSENTIALS", year: "2024" },
  { title: "HUSSIO CLASSIC", year: "EVERGREEN" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">COLLECTIONS</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Tổng hợp các bộ sưu tập theo mùa và theo phong cách của HUSSIO.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((c) => (
            <div key={c.title} className="border border-zinc-200 p-6 hover:border-black transition-colors">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{c.year}</p>
              <h2 className="mt-2 text-lg font-black uppercase tracking-tight">{c.title}</h2>
              <p className="mt-3 text-sm text-zinc-600">Lookbook & sản phẩm sẽ cập nhật.</p>
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="mt-10 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-zinc-100"
        >
          Xem sản phẩm
        </Link>
      </section>
    </div>
  );
}

