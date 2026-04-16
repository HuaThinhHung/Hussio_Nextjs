"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const params = useParams();
  const router = useRouter();
  const handle = params?.handle as string;
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const allImages = images.length > 0 ? images : ["/images/tee.webp"];

  useEffect(() => {
    const savedImages = sessionStorage.getItem("productImages");
    const savedTitle = sessionStorage.getItem("productTitle");
    const savedIndex = sessionStorage.getItem("galleryStartIndex");

    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
    if (savedTitle) {
      setTitle(savedTitle);
    }
    if (savedIndex) {
      setLightboxIndex(parseInt(savedIndex, 10));
    }
  }, []);

  const closeLightbox = () => {
    sessionStorage.removeItem("galleryStartIndex");
    router.push(`/products/${handle}`);
  };

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLightboxIndex((prev) => (prev + 1) % allImages.length);
      setTimeout(() => setIsTransitioning(false), 200);
    }, 150);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLightboxIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length,
      );
      setTimeout(() => setIsTransitioning(false), 200);
    }, 150);
  };

  const goToImage = (index: number) => {
    if (index === lightboxIndex || isTransitioning) return;
    setLightboxIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allImages.length, isTransitioning]);

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100">
        <span className="text-zinc-400 text-xs font-medium">
          {lightboxIndex + 1} / {allImages.length}
        </span>
        <button
          onClick={closeLightbox}
          className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-zinc-100 rounded-full transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center relative bg-zinc-50">
          {/* Prev Button */}
          <button
            onClick={prevImage}
            disabled={isTransitioning}
            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-black bg-white/80 hover:bg-white shadow-md rounded-full transition-all duration-200 disabled:opacity-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className={cn(
              "relative transition-all duration-200",
              isTransitioning ? "opacity-0 scale-98" : "opacity-100 scale-100"
            )}
          >
            <img
              src={allImages[lightboxIndex]}
              alt={title}
              className="max-w-[90vw] max-h-[75vh] object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            disabled={isTransitioning}
            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-black bg-white/80 hover:bg-white shadow-md rounded-full transition-all duration-200 disabled:opacity-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails - Bottom */}
        <div className="flex items-center justify-center gap-2 p-4 border-t border-zinc-100 bg-white overflow-x-auto">
          {allImages.map((img, index) => (
            <button
              key={`lightbox-${img}-${index}`}
              onClick={() => goToImage(index)}
              className={cn(
                "shrink-0 w-14 h-16 border-2 transition-all duration-200 overflow-hidden rounded-sm",
                lightboxIndex === index
                  ? "border-black shadow-md"
                  : "border-zinc-200 opacity-50 hover:opacity-80",
              )}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
