"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery = ({ images = [], title }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0] || '/images/tee.webp');

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  const allImages = images.length > 0 ? images : ['/images/tee.webp'];

  return (
    <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="lg:w-20 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar py-1">
          {allImages.map((img, index) => (
            <button 
              key={`${img}-${index}`}
              className={cn(
                "flex-shrink-0 w-16 lg:w-full aspect-[3/4] bg-zinc-50 border transition-all duration-300 overflow-hidden",
                activeImage === img 
                  ? "border-black/40 ring-1 ring-black/5" 
                  : "border-zinc-100 opacity-60 hover:opacity-100 hover:border-zinc-300"
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
      )}
      
      {/* Main Image */}
      <div className="flex-1 bg-zinc-50 border border-zinc-100 overflow-hidden group relative aspect-[3/4]">
        <img 
          src={activeImage} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
        />
        {/* Subtle Overlay or Badge if needed could go here */}
      </div>
    </div>
  );
};

export default ProductGallery;
