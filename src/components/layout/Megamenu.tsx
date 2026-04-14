"use client";

import React from 'react';
import Link from 'next/link';

interface MegamenuProps {
  type: 'products' | 'collections';
}

const Megamenu = ({ type }: MegamenuProps) => {
  const productCategories = [
    {
      title: 'ÁO (TOPS)',
      items: ['Áo Polo', 'Áo Thun (Tee)', 'Áo Sơ mi', 'Áo Khoác (Jacket)']
    },
    {
      title: 'QUẦN (BOTTOMS)',
      items: ['Quần Kaki', 'Quần Tây', 'Quần Short', 'Jeans']
    },
    {
      title: 'PHỤ KIỆN',
      items: ['Ví Da', 'Thắt Lưng', 'Vớ (Socks)', 'Nón (Caps)']
    }
  ];

  const collections = [
    { title: 'QUIET STRENGTH', year: '2024' },
    { title: 'MODERN BLACK', year: '2024' },
    { title: 'SUMMER ESSENTIALS', year: '2024' },
    { title: 'HUSSIO CLASSIC', year: 'EVERGREEN' }
  ];

  if (type === 'products') {
    return (
      <div className="grid grid-cols-4 gap-10 p-10 bg-white border-t border-zinc-200 animate-fade-in shadow-xl">
        {productCategories.map((cat) => (
          <div key={cat.title} className="space-y-5">
            <h4 className="text-[10px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">{cat.title}</h4>
            <div className="flex flex-col space-y-3">
              {cat.items.map((item) => (
                <Link 
                  key={item} 
                  href="/products" 
                  className="text-[11px] font-semibold tracking-widest text-black hover:text-zinc-500 transition-colors uppercase"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
        {/* Featured Card */}
        <div className="relative aspect-[4/5] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop" 
            alt="New Arrival" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end p-4">
             <span className="text-white text-[10px] font-bold tracking-[0.2em] border-b border-white pb-1">NEW ARRIVALS</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-10 p-10 bg-white border-t border-zinc-200 animate-fade-in shadow-xl">
      {collections.map((col) => (
        <div key={col.title} className="relative aspect-[3/4] bg-zinc-100 flex flex-col justify-end p-6 overflow-hidden group">
           <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop" 
              alt={col.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative z-10 text-white">
               <h4 className="text-xs font-bold tracking-widest uppercase">{col.title}</h4>
               <p className="text-[9px] font-medium opacity-70 mt-1">{col.year}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default Megamenu;
