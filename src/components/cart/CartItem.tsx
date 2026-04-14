"use client";

import React from 'react';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-zinc-200 items-center animate-fade-in">
      <div className="col-span-6 flex items-center space-x-4">
        <div className="w-20 md:w-24 aspect-[3/4] bg-zinc-100 border border-zinc-200 shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-semibold uppercase tracking-tight">{item.title}</h3>
          <p className="text-[10px] text-zinc-500">SIZE: {item.size}</p>
          <button className="text-[10px] font-semibold underline mt-2 hover:text-black transition-colors">Xóa</button>
        </div>
      </div>
      <div className="col-span-2 text-center hidden md:block text-xs font-medium">
        {formatPrice(item.price)}
      </div>
      <div className="col-span-2 flex justify-center">
        <div className="flex items-center border border-zinc-200 bg-white">
          <button className="px-2 py-1 text-xs hover:bg-zinc-50">-</button>
          <span className="px-3 py-1 text-xs font-semibold">{item.quantity}</span>
          <button className="px-2 py-1 text-xs hover:bg-zinc-50">+</button>
        </div>
      </div>
      <div className="col-span-2 text-right text-xs font-black">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartItem;
