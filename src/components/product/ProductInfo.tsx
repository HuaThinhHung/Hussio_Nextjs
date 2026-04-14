"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductInfoProps {
  title: string;
  price: number;
  originalPrice?: number;
}

const ProductInfo = ({ title, price, originalPrice }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black text-black">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex justify-between items-center text-[10px] font-semibold tracking-widest uppercase">
          <span>KÍCH THƯỚC: {selectedSize}</span>
          <span className="underline cursor-pointer opacity-60">Bảng size</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "w-12 h-12 flex items-center justify-center border text-xs font-semibold transition-all duration-300",
                selectedSize === size 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-black border-zinc-200 hover:border-black"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="text-[10px] font-semibold tracking-widest uppercase">SỐ LƯỢNG</div>
        <div className="flex items-center w-32 border border-zinc-200">
          <button 
            className="w-10 h-10 flex items-center justify-center hover:bg-zinc-50"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly
            className="w-12 text-center text-xs font-bold focus:outline-none"
          />
          <button 
            className="w-10 h-10 flex items-center justify-center hover:bg-zinc-50"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-6">
        <button className="w-full bg-black text-white py-4 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-zinc-800 transition-all">
          THÊM VÀO GIỎ HÀNG
        </button>
        <button className="w-full border border-black text-black py-4 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-zinc-50 transition-all">
          MUA NGAY
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
