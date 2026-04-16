"use client";

import React from 'react';
import { useCartContext } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Toast = () => {
  const { toast } = useCartContext();

  if (!toast) return null;

  return (
    <div className="fixed top-24 right-4 z-[100] animate-fade-in pointer-events-none">
      <div className={cn(
        "px-6 py-4 rounded-sm shadow-2xl flex items-center space-x-3 border",
        toast.type === 'success' 
          ? "bg-white border-zinc-200 text-black" 
          : "bg-red-50 border-red-200 text-red-800"
      )}>
        {toast.type === 'success' ? (
          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <p className="text-[11px] font-bold tracking-widest uppercase">{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
