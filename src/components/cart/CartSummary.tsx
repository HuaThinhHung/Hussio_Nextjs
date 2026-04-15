"use client";

import React from 'react';
import Link from 'next/link';

interface CartSummaryProps {
  subtotal: number;
  checkoutUrl?: string;
}

const CartSummary = ({ subtotal }: CartSummaryProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="lg:col-span-4">
      <div className="bg-zinc-50 p-8 space-y-6 sticky top-24 border border-zinc-200">
        <h2 className="text-sm font-semibold tracking-widest uppercase mb-6 opacity-80">TÓM TẮT ĐƠN HÀNG</h2>
        
        <div className="space-y-4 border-b border-zinc-200 pb-6 text-xs tracking-wide">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">Tạm tính</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">Giao hàng</span>
            <span className="font-semibold text-black">Miễn phí</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-xs font-semibold tracking-widest uppercase">TỔNG CỘNG</span>
          <span className="text-lg font-black text-black">{formatPrice(subtotal)}</span>
        </div>

        <button 
          onClick={() => {
            if (checkoutUrl) window.location.href = checkoutUrl;
          }}
          disabled={!checkoutUrl}
          className="w-full bg-black text-white py-4 text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-zinc-800 transition-all disabled:bg-zinc-300 disabled:cursor-not-allowed"
        >
          TIẾN HÀNH THANH TOÁN
        </button>
        
        <Link href="/products" className="block text-center text-[10px] font-semibold underline tracking-widest uppercase hover:opacity-70 transition-opacity">
          TIẾP TỤC MUA SẮM
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
