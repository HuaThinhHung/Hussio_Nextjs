"use client";

import { useCallback, useEffect, useState } from 'react';
import type { StoreCart } from '@/types/cart';
import { addToCart, ensureCart, removeLine, updateLine } from '@/lib/cart-client';

export function useCart() {
  const [cart, setCart] = useState<StoreCart | null>(null);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const c = await ensureCart();
      setCart(c);
      return c;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
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

  return { cart, loading, refresh, add, updateQty, remove };
}

