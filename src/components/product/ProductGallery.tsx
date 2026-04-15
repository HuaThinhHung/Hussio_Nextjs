"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery = ({ images = [], title }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0] || '/images/tee.webp');

  const allImages = images.length > 0 ? images : ['/images/tee.webp'];

  return (
    <div className="lg:col-span-7 space-y-4">
      <div className="aspect-[3/4] bg-zinc-100 border border-zinc-200 overflow-hidden group">
        <img 
          src={activeImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
          {allImages.map((img, index) => (
            <div 
              key={`${img}-${index}`}
              className={cn(
                "aspect-[3/4] bg-zinc-100 border cursor-pointer transition-all duration-300",
                activeImage === img ? "border-black ring-1 ring-black" : "border-zinc-200 opacity-60 hover:opacity-100"
              )}
              onClick={() => setActiveImage(img)}
            >
              <img 
                src={img} 
                alt={`${title} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
