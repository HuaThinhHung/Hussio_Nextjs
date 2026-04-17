"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import type { StoreProduct } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  products: StoreProduct[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const targetScroll =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(checkScrollability, 300);
  };

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

      <div
        className="relative group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10
            ${canScrollLeft && isHovering ? "opacity-100 translate-x-0" : "opacity-0 md:opacity-0"} 
            ${!canScrollLeft ? "cursor-not-allowed opacity-50" : "hover:bg-gray-50 hover:scale-110"}`}
          aria-label="Cuộn sang trái"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10
            ${canScrollRight && isHovering ? "opacity-100 translate-x-0" : "opacity-0 md:opacity-0"} 
            ${!canScrollRight ? "cursor-not-allowed opacity-50" : "hover:bg-gray-50 hover:scale-110"}`}
          aria-label="Cuộn sang phải"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

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
