import React from "react";
import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import type { StoreProduct } from "@/types/product";

interface ProductSectionProps {
  title: string;
  products: StoreProduct[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-14 md:py-20">
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <h2 className="text-base md:text-xl font-black tracking-tight uppercase">
          {title}
        </h2>
        <Link
          href="/products"
          className="text-[10px] font-semibold tracking-[0.16em] uppercase hover:underline underline-offset-4"
        >
          XEM TẤT CẢ
        </Link>
      </div>

      <ProductGrid products={products} columns={4} />

      <div className="mt-10 md:mt-12 text-center">
        <Link
          href="/products"
          className="inline-block border border-black text-black px-8 py-3 text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          XEM TẤT CẢ
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
