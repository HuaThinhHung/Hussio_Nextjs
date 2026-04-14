import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.newIn.title,
  description: seoConfig.newIn.description,
};

export default function NewInPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">NEW IN</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Danh sách sản phẩm mới sẽ được cập nhật tại đây. Bạn có thể xem ngay tất cả sản phẩm trong shop.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-zinc-100"
        >
          Xem tất cả sản phẩm
        </Link>
      </section>
    </div>
  );
}

