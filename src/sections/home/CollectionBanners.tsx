"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import banner1 from "@/public/images/banner/1.jpg";
import banner2 from "@/public/images/banner/2.jpg";

type CollectionCard = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
};

const cards: CollectionCard[] = [
  {
    title: "Collenction Sơ Mi Tối Giản",
    description:
      "Bô siêu tập sơ mi trơn tối giản, tập trung vào chất liệu, gam màu và phom dáng.",
    image: banner1,
    href: "/collections",
  },
  {
    title: "Collenction Tết 2026",
    description:
      "Bộ siêu tập tết nguyên đán thiết kế, nhấn mạnh vào chi tiết tạo điểm nhấn khác biệt.",
    image: banner2,
    href: "/collections",
  },
];

export default function CollectionBanners() {
  return (
    <section className="container mx-auto px-4 pb-14 md:pb-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
          >
            <div className="relative h-[260px] md:h-[360px] lg:h-[420px]">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 lg:p-8">
              <h3 className="text-base md:text-lg lg:text-xl font-black uppercase tracking-[0.06em] text-white">
                {c.title}
              </h3>
              <p className="mt-2 max-w-md text-[11px] md:text-xs leading-relaxed text-white/80">
                {c.description}
              </p>
              <span className="mt-4 inline-flex items-center justify-center rounded-sm bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-200 group-hover:bg-white">
                Khám phá
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
