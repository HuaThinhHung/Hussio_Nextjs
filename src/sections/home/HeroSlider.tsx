"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import banner1 from "@/public/images/banner/1.jpg";
import banner2 from "@/public/images/banner/2.jpg";
import banner3 from "@/public/images/banner/3.jpg";
import banner4 from "@/public/images/banner/4.jpg";
import banner5 from "@/public/images/banner/5.jpg";

type Slide = {
  src: StaticImageData;
  alt: string;
  href: string;
};

const HeroSlider = () => {
  const slides = useMemo<Slide[]>(
    () => [
      { src: banner1, alt: "HUSSIO banner 1", href: "/products" },
      { src: banner2, alt: "HUSSIO banner 2", href: "/products" },
      { src: banner3, alt: "HUSSIO banner 3", href: "/products" },
      { src: banner4, alt: "HUSSIO banner 4", href: "/products" },
      { src: banner5, alt: "HUSSIO banner 5", href: "/products" },
    ],
    [],
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (idx: number, behavior: ScrollBehavior = "smooth") => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    el.scrollTo({ left: idx * w, behavior });
  };

  const goPrev = () =>
    scrollToIndex((activeIndex - 1 + slides.length) % slides.length, "smooth");
  const goNext = () =>
    scrollToIndex((activeIndex + 1) % slides.length, "smooth");

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onResize = () => scrollToIndex(activeIndex, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const w = el.clientWidth || 1;
        const idx = Math.round(el.scrollLeft / w);
        setActiveIndex(Math.max(0, Math.min(slides.length - 1, idx)));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [slides.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isDraggingRef.current) return;
      const next = (activeIndex + 1) % slides.length;
      scrollToIndex(next, "smooth");
    }, 6000);
    return () => window.clearInterval(interval);
  }, [activeIndex, slides.length]);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el || !isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    el.scrollLeft = dragStartScrollLeftRef.current - delta;
  };

  const endDrag: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = false;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    const w = el.clientWidth || 1;
    const idx = Math.round(el.scrollLeft / w);
    scrollToIndex(Math.max(0, Math.min(slides.length - 1, idx)), "smooth");
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="HUSSIO banner carousel"
      className="w-full"
    >
      <div className="relative w-full h-full">
        <div
          ref={scrollerRef}
          className="relative flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth select-none touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={(e) => {
            if (isDraggingRef.current) endDrag(e);
          }}
        >
          {slides.map((s, i) => {
            return (
              <Link
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                href={s.href}
                className="relative h-[45vh] min-h-[300px] max-h-[800px] min-w-full snap-start overflow-hidden md:h-[85vh] lg:h-[90vh]"
                draggable={false}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </Link>
            );
          })}
        </div>

        {/* Blurred navigation (subtle) */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              onClick={() => scrollToIndex(i, "smooth")}
              className={[
                "h-1.5 w-6 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
