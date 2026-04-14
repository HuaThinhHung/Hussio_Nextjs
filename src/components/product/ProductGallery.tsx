"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: {
    main: string;
    hover: string;
  };
  title: string;
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images.main);

  const allImages = [images.main, images.hover, images.main];

  return (
    <div className="lg:col-span-7 grid grid-cols-1 gap-4">
      <div className="aspect-[3/4] bg-zinc-100 border border-zinc-200 overflow-hidden">
        <img 
          src={activeImage} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {allImages.map((img, index) => (
          <div 
            key={index}
            className={cn(
              "aspect-[3/4] bg-zinc-100 border border-zinc-200 overflow-hidden cursor-pointer transition-all duration-300",
              activeImage === img ? "border-black" : "opacity-60 hover:opacity-100"
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
    </div>
  );
};

export default ProductGallery;
