import React from 'react';
import Link from 'next/link';

interface BannerSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  buttonText: string;
  link: string;
  reverse?: boolean;
}

import { cn } from '@/lib/utils';

const BannerSection = ({ title, subtitle, image, buttonText, link, reverse }: BannerSectionProps) => {
  return (
    <section className="w-full h-[360px] md:h-[520px] relative overflow-hidden my-12 md:my-16">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={cn(
        "absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/45",
        reverse ? "md:items-end md:pr-20 md:text-right" : ""
      )}>
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white text-xs md:text-sm max-w-lg mb-8 opacity-90 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
        <Link 
          href={link} 
          className="bg-white text-black text-[10px] font-semibold px-10 py-4 tracking-[0.16em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};


export default BannerSection;
