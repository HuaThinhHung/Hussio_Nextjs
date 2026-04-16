"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const ProductCardSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="aspect-3/4 bg-zinc-100 border border-zinc-200" />
    <div className="space-y-2">
      <div className="h-3 bg-zinc-100 w-3/4" />
      <div className="h-3 bg-zinc-100 w-1/2" />
    </div>
  </div>
);

export const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8">
    {[...Array(count)].map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

export const CartItemSkeleton = () => (
  <div className="flex space-x-4 py-4 border-b border-zinc-100 animate-pulse">
    <div className="w-16 h-20 bg-zinc-100" />
    <div className="flex-1 space-y-2 py-1">
      <div className="h-3 bg-zinc-100 w-3/4" />
      <div className="h-2 bg-zinc-100 w-1/2" />
    </div>
  </div>
);
