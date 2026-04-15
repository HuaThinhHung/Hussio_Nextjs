import React from 'react';
import Link from 'next/link';
import { categories } from '@/mock/products';

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-2">
          Danh mục sản phẩm
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-medium tracking-wide">
          Khám phá những bộ sưu tập mới nhất từ HUSSIO
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.link}
            className="group flex flex-col"
          >
            {/* Ảnh */}
            <div className="relative h-[220px] sm:h-[320px] md:h-[550px] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Title below */}
            <div className="pt-4 text-center">
              <span className="relative inline-block text-[11px] md:text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300">
                {cat.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;