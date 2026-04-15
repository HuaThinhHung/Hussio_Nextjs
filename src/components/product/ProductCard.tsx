"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { StoreProduct } from '@/types/product';

interface ProductCardProps {
  product: StoreProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const swatchColors = (product.colors || []).filter(
    (c) => typeof c === 'string' && c.trim().startsWith('#')
  );

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.handle}`} className="block relative aspect-3/4 overflow-hidden bg-zinc-100 border border-zinc-200">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.availableForSale === false && (
            <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold px-2 py-1 tracking-widest uppercase shadow-sm">
              HẾT HÀNG
            </span>
          )}
          {product.compareAtPrice !== undefined && product.compareAtPrice > product.price && (
            <span className="bg-black text-white text-[9px] font-bold px-2 py-1 tracking-widest uppercase">
              SALE
            </span>
          )}
        </div>

        {/* Product Images */}
        <div className="relative w-full h-full">
          <img 
            src={product.image || '/images/tee.webp'} 
            alt={product.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
            )}
          />
          <img 
            src={product.hoverImage || product.image || '/images/tee.webp'} 
            alt={`${product.title} hover`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
            )}
          />
        </div>

        {/* Quick Add Button */}
        {product.availableForSale !== false && (
          <button className="absolute bottom-3 right-3 p-2 bg-white border border-zinc-200 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        )}
      </Link>

      <div className={cn("mt-4 space-y-1.5", product.availableForSale === false && "opacity-60")}>
        <Link href={`/products/${product.handle}`} className="text-[11px] font-semibold tracking-tight text-zinc-800 hover:text-black transition-colors line-clamp-1 uppercase">
          {product.title}
        </Link>
        
        <div className="flex items-center space-x-2">
          <span className="text-[12px] font-black text-black">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice !== undefined && product.compareAtPrice > product.price && (
            <span className="text-[10px] text-zinc-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        <div className="flex space-x-1.5 pt-1">
          {swatchColors.map((color, index) => (
              <div
                key={index}
                className="w-2.5 h-2.5 rounded-full border border-zinc-200"
                style={{ backgroundColor: color }}
              />
            ))}
          {(product.colors?.length || 0) > 3 && (
            <span className="text-[8px] text-zinc-400">+{(product.colors?.length || 0) - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
