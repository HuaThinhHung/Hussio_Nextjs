"use client";

import React, { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { StoreProductVariant } from "@/types/product-detail";
import { useCart } from "@/hooks/useCart";
import { isColorOption, getColorHex, isGenderOption } from "@/lib/product-utils";
import { formatVnd } from "@/lib/utils";

interface ProductInfoProps {
  title: string;
  variants?: StoreProductVariant[];
  options?: Array<{ name: string; values: string[] }>;
  warranty?: string;
}

const ProductInfo = ({
  title,
  variants = [],
  options = [],
}: ProductInfoProps) => {
  const { add, loading: cartLoading, cart } = useCart();
  
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  // Initialize selected options from the first variant if available
  useEffect(() => {
    if (variants.length > 0 && Object.keys(selectedOptions).length === 0) {
      const initial: Record<string, string> = {};
      variants[0].selectedOptions.forEach(opt => {
        initial[opt.name] = opt.value;
      });
      setSelectedOptions(initial);
    } else if (options.length > 0 && Object.keys(selectedOptions).length === 0) {
      const initial: Record<string, string> = {};
      options.forEach((opt) => {
        if (opt.values.length > 0) initial[opt.name] = opt.values[0];
      });
      setSelectedOptions(initial);
    }
  }, [variants, options]);

  const [quantity, setQuantity] = useState(1);

  // Find the matching variant based on selected options
  const selectedVariant = useMemo(() => {
    if (!variants.length) return null;
    return variants.find((v) =>
      v.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value),
    ) || variants[0];
  }, [variants, selectedOptions]);

  const price = selectedVariant?.price ?? 0;
  const originalPrice =
    selectedVariant?.compareAtPrice && selectedVariant.compareAtPrice > price
      ? selectedVariant.compareAtPrice
      : undefined;

  const availability = selectedVariant?.availableForSale ?? false;
  const isLowStock = false; // Cannot determine without inventory permissions

  const canAdd = availability && Boolean(selectedVariant?.id) && !cartLoading;

  const handleOptionChange = (name: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: value }));
  };

  const FREE_SHIPPING_THRESHOLD = 250000;
  const currentTotal = cart?.subtotalAmount || 0;

  return (
    <div className="space-y-6 animate-fade-in-up max-w-xl">
      {/* Title & Price */}
      <div className="space-y-3">
        <h1 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
          {title}
        </h1>
        <div className="flex items-baseline gap-3">
          <span className="text-xl font-bold tracking-tight text-[#1e2749]">
            {formatVnd(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-zinc-400 line-through font-medium">
              {formatVnd(originalPrice)}
            </span>
          )}
          {originalPrice && (
            <span className="bg-[#1e2749] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm tracking-widest">
              SALE
            </span>
          )}
        </div>
      </div>

      <div className="w-full h-px bg-zinc-100" />

      {/* Variants Selection */}
      <div className="space-y-6">
        {options.filter(opt => !isGenderOption(opt.name)).map((opt) => {
          const isColor = isColorOption(opt.name);
          const currentValue = selectedOptions[opt.name];

          return (
            <div key={opt.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {opt.name}
                </span>
                <span className="text-[10px] font-bold text-black uppercase tracking-wider">
                  {currentValue}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {opt.values.map((val) => {
                  const isActive = currentValue === val;
                  
                  if (isColor) {
                    return (
                      <button
                        key={val}
                        onClick={() => handleOptionChange(opt.name, val)}
                        className={cn(
                          "group relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300",
                          isActive
                            ? "ring-2 ring-black ring-offset-2 scale-110"
                            : "ring-1 ring-zinc-200 ring-offset-0 hover:ring-zinc-400"
                        )}
                        title={val}
                      >
                        <div
                          className="w-full h-full rounded-full border border-black/5 shadow-inner transition-transform duration-500 group-hover:scale-90"
                          style={{ backgroundColor: getColorHex(val) }}
                        />
                      </button>
                    );
                  }

                  return (
                    <button
                      key={val}
                      onClick={() => handleOptionChange(opt.name, val)}
                      className={cn(
                        "min-w-[48px] h-9 px-3 border text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded-[2px]",
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-zinc-200 text-zinc-500 hover:border-black hover:text-black"
                      )}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Quantity Selection */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            Số lượng
          </div>
          
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center h-10 border border-zinc-200 rounded-[2px] bg-zinc-50/50">
              <button
                className="w-10 h-full flex items-center justify-center text-zinc-400 hover:text-black transition-colors disabled:opacity-20"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <span className="text-lg">-</span>
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center text-[11px] font-black bg-transparent outline-none text-zinc-900"
              />
              <button
                className="w-10 h-full flex items-center justify-center text-zinc-400 hover:text-black transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <span className="text-lg">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        {!availability && (
          <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-center mb-2">
            Sản phẩm đang tạm hết hàng
          </p>
        )}
        
        <button
          disabled={!canAdd}
          className={cn(
            "w-full h-12 text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 rounded-[2px] relative overflow-hidden group",
            canAdd
              ? "bg-[#1e2749] text-white hover:bg-black hover:tracking-[0.3em]"
              : "bg-zinc-100 text-zinc-400 cursor-not-allowed",
          )}
          onClick={async () => {
            if (!selectedVariant?.id) return;
            await add(selectedVariant.id, quantity);
          }}
        >
          <span className="relative z-10">
            {cartLoading ? "ĐANG XỬ LÝ..." : (availability ? "Thêm vào giỏ hàng" : "Hết hàng")}
          </span>
        </button>
      </div>

      {/* Shipping Progress Minimal */}
      <div className="pt-2">
        <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.15em] text-zinc-400 mb-1.5">
          <span>Miễn phí vận chuyển</span>
          <span>{formatVnd(FREE_SHIPPING_THRESHOLD)}</span>
        </div>
        <div className="h-0.5 w-full bg-zinc-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#1e2749] transition-all duration-1000 ease-out"
            style={{ width: `${Math.min((currentTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Policies */}
      <div className="grid grid-cols-1 gap-3 pt-2">
        {[
          { icon: "📦", text: "Giao hàng toàn quốc (2-4 ngày)" },
          { icon: "🔄", text: "Đổi trả trong vòng 30 ngày" },
          { icon: "🛡️", text: "Sản phẩm chính hãng 100%" },
        ].map((policy, i) => (
          <div key={i} className="flex items-center gap-2.5 group translate-x-0 hover:translate-x-1 transition-transform cursor-default">
            <span className="text-xs grayscale group-hover:grayscale-0 transition-all">{policy.icon}</span>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              {policy.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
