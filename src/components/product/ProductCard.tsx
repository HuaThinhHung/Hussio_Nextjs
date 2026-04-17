"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { StoreProduct } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { getColorHex } from "@/lib/product-utils";

interface ProductCardProps {
  product: StoreProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { add, loading: cartLoading } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Lấy danh sách màu từ product.colors
  const colors = product.colors || [];

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/products/${product.handle}`}
        className="block relative aspect-3/4 overflow-hidden bg-zinc-100 border border-zinc-200"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.availableForSale === false && (
            <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold px-2 py-1 tracking-widest uppercase shadow-sm">
              HẾT HÀNG
            </span>
          )}
          {product.compareAtPrice !== undefined &&
            product.compareAtPrice > product.price && (
              <span className="bg-black text-white text-[9px] font-bold px-2 py-1 tracking-widest uppercase">
                SALE
              </span>
            )}
        </div>

        {/* Product Images */}
        <div className="relative w-full h-full">
          <img
            src={product.image || "/images/tee.webp"}
            alt={product.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100",
            )}
          />
          <img
            src={product.hoverImage || product.image || "/images/tee.webp"}
            alt={`${product.title} hover`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100",
            )}
          />
        </div>

        {/* Quick Add Button */}
        {product.availableForSale !== false && (
          <button
            className="absolute bottom-3 right-3 p-2 bg-white border border-zinc-200 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50"
            disabled={cartLoading || !product.firstVariantId}
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (product.firstVariantId) {
                await add(product.firstVariantId, 1);
              }
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        )}
      </Link>

      <div
        className={cn(
          "mt-4 space-y-3",
          product.availableForSale === false && "opacity-60",
        )}
      >
        {/* Product Name */}
        <Link
          href={`/products/${product.handle}`}
          className="text-[11px] font-semibold tracking-tight text-zinc-800 hover:text-black transition-colors line-clamp-2 leading-tight"
        >
          {product.title}
        </Link>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-[12px] font-black text-black">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice !== undefined &&
            product.compareAtPrice > product.price && (
              <span className="text-[10px] text-zinc-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
        </div>

        {/* Color Variants Display */}
        {colors.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            {colors.slice(0, 6).map((color, index) => {
              const bgColor = getColorHex(color);

              return (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-zinc-200 shadow-sm"
                  style={{ backgroundColor: bgColor }}
                  title={getColorDisplayName(color)}
                />
              );
            })}
            {colors.length > 6 && (
              <span className="text-[8px] text-zinc-400 font-medium">
                +{colors.length - 6}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get Vietnamese color display name
function getColorDisplayName(colorName: string): string {
  const colorNameLower = colorName.toLowerCase().trim();

  const colorNames: Record<string, string> = {
    white: "Trắng",
    black: "Đen",
    red: "Đỏ",
    blue: "Xanh Dương",
    navy: "Navy",
    green: "Xanh Lục",
    yellow: "Vàng",
    orange: "Cam",
    pink: "Hồng",
    purple: "Tím",
    brown: "Nâu",
    gray: "Xám",
    grey: "Xám",
    beige: "Be",
    khaki: "Kaki",
    cream: "Kem",
    charcoal: "Than",
    olive: "Olive",
    burgundy: "Đỏ Rượu",
    camel: "Camel",
    wine: "Rượu Vang",
    "sky blue": "Xanh Sky",
    mint: "Mint",
    lavender: "Lavender",
    peach: "Đào",
    teal: "Teal",
    tan: "Tan",
    sand: "Sand",
    stone: "Stone",
    ash: "Ash",
    denim: "Denim",
    indigo: "Indigo",
    forest: "Forest",
    rust: "Gỉ Sắt",
    terracotta: "Terracotta",
    coral: "Coral",
    sage: "Sage",
    slate: "Slate",
    ivory: "Ngà",
    chocolate: "Socola",
    maroon: "Maroon",
    mustard: "Mustard",
    cyan: "Cyan",
    magenta: "Magenta",
    gold: "Vàng Gold",
    silver: "Bạc",
    platinum: "Platinum",
  };

  // Check exact match first
  if (colorNames[colorNameLower]) {
    return colorNames[colorNameLower];
  }

  // Check if color name contains any key
  for (const [key, value] of Object.entries(colorNames)) {
    if (colorNameLower.includes(key)) {
      return value;
    }
  }

  // Return original if no match
  return colorName;
}

export default ProductCard;
