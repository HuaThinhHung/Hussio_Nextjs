import React from 'react';
import Link from 'next/link';
import { categories } from '@/mock/products';

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-14 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <p className="text-[10px] md:text-[11px] tracking-[0.22em] font-semibold uppercase text-zinc-500 mb-3">Danh muc</p>
        <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">San pham cong so</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.link}
            className="group relative h-[280px] md:h-[420px] overflow-hidden bg-zinc-100 border border-zinc-200"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-6 text-center">
              <span className="inline-block bg-white px-10 py-3 text-[11px] font-semibold tracking-[0.18em] border border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                {cat.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
