import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.sale.title,
  description: seoConfig.sale.description,
};

export default function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">SALE</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Trang ưu đãi sẽ cập nhật các sản phẩm giảm giá. Hiện tại bạn có thể xem toàn bộ sản phẩm.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-zinc-100"
        >
          Xem sản phẩm
        </Link>
      </section>
    </div>
  );
}

