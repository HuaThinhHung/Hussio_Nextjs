import React from 'react';
import Link from 'next/link';

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[62vh] md:h-[88vh] overflow-hidden bg-zinc-100">
      <img 
        src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=2200&auto=format&fit=crop" 
        alt="HUSSIO Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-white text-[10px] md:text-sm font-semibold tracking-[0.35em] uppercase mb-4 opacity-90">
          Hussio Officewear
        </h3>
        <h2 className="text-white text-4xl md:text-7xl font-black tracking-tight uppercase mb-6">
          Basic Black & White
        </h2>
        <p className="text-white/90 text-xs md:text-sm max-w-xl leading-relaxed mb-8">
          Phong cach lich su, de mac moi ngay cho quy ong cong so.
        </p>
        <Link 
          href="/products" 
          className="bg-white text-black text-[10px] font-semibold px-10 py-4 tracking-[0.16em] hover:bg-black hover:text-white border border-white"
        >
          KHAM PHA BO SUU TAP
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="w-7 h-[2px] bg-white"></div>
        <div className="w-4 h-[2px] bg-white/45"></div>
        <div className="w-4 h-[2px] bg-white/45"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
