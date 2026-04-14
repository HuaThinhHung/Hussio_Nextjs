import React from 'react';
import Link from 'next/link';
import { categories } from '@/mock/products';

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-14 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
          Danh mục sản phẩm
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.link}
            className="group flex flex-col"
          >
            {/* Ảnh */}
            <div className="relative h-[280px] md:h-[380px] overflow-hidden bg-zinc-100 border border-zinc-200">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Button tách riêng bên dưới */}
            <div className="px-6 py-3 text-center transition-colors duration-300 ">
              <span className="text-2px font-semibold tracking-[0.18em] uppercase transition-colors duration-300">
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