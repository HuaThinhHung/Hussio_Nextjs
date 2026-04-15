"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { StoreCart } from '@/types/cart';
import { ensureCart, addToCart, updateLine, removeLine, getCartId } from '@/lib/cart-client';

interface CartContextType {
  cart: StoreCart | null;
  loading: boolean;
  refresh: () => Promise<StoreCart | null>;
  add: (merchandiseId: string, quantity?: number) => Promise<StoreCart>;
  updateQty: (lineId: string, quantity: number) => Promise<StoreCart>;
  remove: (lineId: string) => Promise<StoreCart>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<StoreCart | null>(null);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const c = await ensureCart();
      setCart(c);
      return c;
    } catch (error) {
      console.error('Failed to fetch cart:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only fetch if we have a cartId in localstorage or if we want to initialize
    if (typeof window !== 'undefined') {
      void refresh();
    }
  }, [refresh]);

  const add = useCallback(async (merchandiseId: string, quantity = 1) => {
    setLoading(true);
    try {
      const c = await addToCart(merchandiseId, quantity);
      setCart(c);
      return c;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQty = useCallback(async (lineId: string, quantity: number) => {
    setLoading(true);
    try {
      const c = await updateLine(lineId, quantity);
      setCart(c);
      return c;
    } finally {
      setLoading(false);
    }
  }, []);

  const remove = useCallback(async (lineId: string) => {
    setLoading(true);
    try {
      const c = await removeLine(lineId);
      setCart(c);
      return c;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, loading, refresh, add, updateQty, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
