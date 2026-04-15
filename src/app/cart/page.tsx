"use client";

import React from 'react';
import Link from 'next/link';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

const CartPage = () => {
  const { cart, loading, remove, updateQty } = useCart();
  const cartItems = cart?.lines || [];
  const subtotal = cart?.subtotalAmount || 0;

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-20 animate-fade-in">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-2 text-center">GIỎ HÀNG CỦA BẠN</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-[0.16em] text-zinc-500 mb-12">
            <span>TRANG CHỦ</span>
            <span>/</span>
            <span className="text-black uppercase">GIỎ HÀNG</span>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm text-zinc-500">Đang tải giỏ hàng...</div>
        ) : cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-zinc-200 text-[10px] font-semibold tracking-[0.2em] text-zinc-500">
                 <div className="col-span-6">SẢN PHẨM</div>
                 <div className="col-span-2 text-center">GIÁ</div>
                 <div className="col-span-2 text-center">SỐ LƯỢNG</div>
                 <div className="col-span-2 text-right">TỔNG CỘNG</div>
              </div>

              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} onRemove={remove} onUpdateQty={updateQty} />
              ))}
            </div>

            <CartSummary subtotal={subtotal} />
            {cart?.checkoutUrl && (
              <div className="lg:col-span-12">
                <a
                  href={cart.checkoutUrl}
                  className="block w-full bg-black text-white py-4 text-center text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-zinc-800 transition-all"
                >
                  THANH TOÁN (SHOPIFY)
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-20">
            <div className="mb-6 opacity-30 flex justify-center">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-widest uppercase mb-4">GIỎ HÀNG TRỐNG</h2>
            <p className="text-zinc-500 text-sm mb-10 leading-relaxed italic">Vui lòng quay lại cửa hàng để chọn sản phẩm bạn yêu thích.</p>
            <Link href="/products" className="inline-block bg-black text-white px-10 py-4 text-[10px] font-semibold tracking-widest uppercase hover:bg-zinc-800 transition-all">
              BẮT ĐẦU MUA SẮM
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
