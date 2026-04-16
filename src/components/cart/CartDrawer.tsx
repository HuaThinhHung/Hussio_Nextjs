"use client";

import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { formatVnd } from "@/lib/utils"; // Assuming this exists or I'll define a local helper

const CartDrawer = () => {
  const { isDrawerOpen, closeDrawer, cart, loading, remove, updateQty } =
    useCartContext();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    if (isDrawerOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isDrawerOpen, closeDrawer]);

  // Swipe to close
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    if (diff > 50) {
      // Swipe right
      closeDrawer();
      setTouchStart(null);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const FREE_SHIPPING_THRESHOLD = 250000;
  const subtotal = cart?.subtotalAmount || 0;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  if (!isDrawerOpen && !cart) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500",
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-[440px] bg-white z-[101] shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDrawerOpen ? "translate-x-0" : "translate-x-full",
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-black tracking-tighter uppercase">
              GIỎ HÀNG
            </span>
            <span className="bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full text-[10px] font-bold">
              {cart?.totalQuantity || 0}
            </span>
          </div>
          <button
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
            onClick={closeDrawer}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-4 bg-zinc-50/50 border-b border-zinc-100">
          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase mb-3">
            {remaining > 0 ? (
              <span>MUA THÊM {formatPrice(remaining)} ĐỂ ĐƯỢC FREESHIP</span>
            ) : (
              <span className="text-emerald-600">
                BẠN ĐÃ ĐƯỢC MIỄN PHÍ VẬN CHUYỂN! 🎉
              </span>
            )}
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-zinc-200 overflow-hidden rounded-full">
            <div
              className="h-full bg-black transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cart Contents */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
          {cart?.lines && cart.lines.length > 0 ? (
            cart.lines.map((item) => (
              <div
                key={item.id}
                className="flex space-x-4 animate-fade-in group"
              >
                <div className="w-20 aspect-3/4 bg-zinc-100 border border-zinc-200 overflow-hidden shrink-0">
                  <img
                    src={item.image || "/images/placeholder.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[11px] font-bold uppercase tracking-tight line-clamp-2 pr-4">
                        {item.title}
                      </h3>
                      <button
                        className="text-zinc-400 hover:text-black transition-colors"
                        onClick={() => remove(item.id)}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-[9px] text-zinc-500 uppercase font-semibold">
                      {item.selectedOptions.map((o) => o.value).join(" / ")}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-zinc-200 h-8">
                      <button
                        className="w-7 h-full flex items-center justify-center hover:bg-zinc-50"
                        onClick={() =>
                          updateQty(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-[10px] font-bold">
                        {item.quantity}
                      </span>
                      <button
                        className="w-7 h-full flex items-center justify-center hover:bg-zinc-50"
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[11px] font-black">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-[10px] font-bold tracking-widest uppercase">
                GIỎ HÀNG TRỐNG
              </p>
              <button
                onClick={closeDrawer}
                className="text-[10px] underline underline-offset-4 font-bold"
              >
                TIẾP TỤC MUA SẮM
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && cart.lines.length > 0 && (
          <div className="p-6 border-t border-zinc-100 bg-zinc-50/30 space-y-4 sticky bottom-0">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold tracking-widest uppercase">
                TỔNG TẠM TÍNH
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="flex items-center justify-center border border-black py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                GIỎ HÀNG
              </Link>
              <button
                disabled={!cart.checkoutUrl}
                onClick={() => {
                  if (cart.checkoutUrl) window.location.href = cart.checkoutUrl;
                }}
                className="flex items-center justify-center bg-black text-white py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all duration-300 disabled:bg-zinc-300"
              >
                THANH TOÁN
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
