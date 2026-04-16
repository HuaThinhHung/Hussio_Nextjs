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
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toast: { message: string; type: 'success' | 'error' } | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<StoreCart | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
  }, []);

  // Sync scroll lock
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      // Compensate for scrollbar shift to prevent layout jump
      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollWidth > 0) {
        document.body.style.paddingRight = `${scrollWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isDrawerOpen]);

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
    if (typeof window !== 'undefined') {
      void refresh();
    }
  }, [refresh]);

  // Toast auto-clear
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const add = useCallback(async (merchandiseId: string, quantity = 1) => {
    setLoading(true);
    try {
      const c = await addToCart(merchandiseId, quantity);
      setCart(c);
      showToast('Đã thêm sản phẩm vào giỏ hàng');
      openDrawer();
      return c;
    } catch (err) {
      showToast('Có lỗi xảy ra khi thêm vào giỏ', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [showToast, openDrawer]);

  const updateQty = useCallback(async (lineId: string, quantity: number) => {
    // Optimistic placeholder (simple)
    const originalCart = cart;
    setLoading(true);
    try {
      const c = await updateLine(lineId, quantity);
      setCart(c);
      return c;
    } catch (err) {
      setCart(originalCart); // Rollback
      showToast('Không thể cập nhật số lượng', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [cart, showToast]);

  const remove = useCallback(async (lineId: string) => {
    const originalCart = cart;
    setLoading(true);
    try {
      const c = await removeLine(lineId);
      setCart(c);
      showToast('Đã xóa sản phẩm khỏi giỏ hàng');
      return c;
    } catch (err) {
      setCart(originalCart);
      showToast('Không thể xóa sản phẩm', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [cart, showToast]);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        loading, 
        refresh, 
        add, 
        updateQty, 
        remove, 
        isDrawerOpen, 
        setIsDrawerOpen,
        openDrawer,
        closeDrawer,
        toast
      }}
    >
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
