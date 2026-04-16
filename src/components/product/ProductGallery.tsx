"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  title: string;
  handle: string;
}

const ProductGallery = ({ images = [], title, handle }: ProductGalleryProps) => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(
    images[0] || "/images/tee.webp",
  );
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  const allImages = images.length > 0 ? images : ["/images/tee.webp"];

  useEffect(() => {
    const idx = allImages.indexOf(activeImage);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, [activeImage, allImages]);

  const scrollUp = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollTop -= 100;
    }
  };

  const scrollDown = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollTop += 100;
    }
  };

  const openLightbox = (index: number) => {
    // Store current image index in sessionStorage for the gallery page
    sessionStorage.setItem("galleryStartIndex", String(index));
    sessionStorage.setItem("productImages", JSON.stringify(allImages));
    sessionStorage.setItem("productTitle", title);
    router.push(`/products/${handle}/gallery`);
  };

  return (
    <>
      <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-3">
        {/* Thumbnails - Left Side Vertical with Scroll Buttons */}
        {allImages.length > 1 && (
          <div className="flex lg:flex-col gap-2 items-center">
            {/* Up Button */}
            <button
              onClick={scrollUp}
              className="hidden lg:flex w-8 h-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:bg-zinc-100 hover:text-black transition-colors rounded-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            {/* Thumbnails Container */}
            <div
              ref={thumbnailRef}
              className="lg:w-16 flex lg:flex-col gap-2 overflow-y-auto no-scrollbar max-h-[500px] lg:max-h-[400px]"
            >
              {allImages.map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  className={cn(
                    "shrink-0 w-14 lg:w-full aspect-3/4 bg-zinc-50 border transition-all duration-300 overflow-hidden",
                    activeImage === img
                      ? "border-black/40 ring-1 ring-black/5"
                      : "border-zinc-100 opacity-60 hover:opacity-100 hover:border-zinc-300",
                  )}
                  onClick={() => setActiveImage(img)}
                >
                  <img
                    src={img}
                    alt={`${title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Down Button */}
            <button
              onClick={scrollDown}
              className="hidden lg:flex w-8 h-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:bg-zinc-100 hover:text-black transition-colors rounded-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Main Image */}
        <div
          className="flex-1 bg-zinc-50 border border-zinc-100 overflow-hidden group relative aspect-3/4 cursor-zoom-in"
          onClick={() => openLightbox(lightboxIndex)}
        >
          <img
            src={activeImage}
            alt={title}
            className="w-full h-full object-contain transition-all duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
