"use client";

import React, { useMemo, useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import { cn } from "@/lib/utils";
import type { StoreProduct } from "@/types/product";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchCategory(
  productType: string | undefined,
  activeCategory: string,
) {
  if (activeCategory === "Tất cả") return true;
  const t = normalize(productType || "");
  const c = normalize(activeCategory);
  return t.includes(c);
}

export default function ProductListingClient({
  products,
}: {
  products: StoreProduct[];
}) {
  console.log(products);
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Áo", "Quần", "Phụ kiện"];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => matchCategory(p.productType, activeCategory));
  }, [products, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-zinc-50 py-12 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-2">
            TẤT CẢ SẢN PHẨM
          </h1>
          <div className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-[0.18em] text-zinc-500">
            <span>TRANG CHỦ</span>
            <span>/</span>
            <span className="text-black">SẢN PHẨM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-zinc-200 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-300",
                  activeCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-zinc-500 border-zinc-200 hover:border-black hover:text-black",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-end space-x-6 text-[10px] font-semibold tracking-[0.16em]">
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-70">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span>SẮP XẾP</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-70">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m10 0a2 2 0 100-4m0 4a2 2 0 110-4m-4 4H4m4 0h12m-6-8H4m4 0h12m-6 4H4m4 0h12" />
              </svg>
              <span>BỘ LỌC</span>
            </div>
          </div>
        </div>

        <ProductGrid products={filteredProducts} columns={4} />

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-500 text-sm tracking-widest italic">
              Không tìm thấy sản phẩm nào.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
