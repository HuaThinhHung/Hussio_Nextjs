"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import type { StoreProductVariant } from '@/types/product-detail';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

interface ProductInfoProps {
  title: string;
  variants?: StoreProductVariant[];
  warranty?: string;
}

function formatVnd(price: number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

function normalizeName(s: string) {
  return s.toLowerCase().trim();
}

function matchesOptionName(actual: string, aliases: string[]) {
  const a = normalizeName(actual);
  return aliases.some((x) => a === normalizeName(x));
}

const COLOR_ALIASES = ['color', 'màu', 'mau'];
const SIZE_ALIASES = ['size', 'kích thước', 'kich thuoc', 'size áo', 'size quan'];

function getOptionValues(variants: StoreProductVariant[], aliases: string[]) {
  const values = new Set<string>();
  for (const v of variants) {
    const hit = v.selectedOptions.find((o) => matchesOptionName(o.name, aliases));
    if (hit?.value) values.add(hit.value);
  }
  return Array.from(values);
}

function findVariant(variants: StoreProductVariant[], color?: string, size?: string) {
  return (
    variants.find((v) => {
      const colorHit = color
        ? v.selectedOptions.some((o) => matchesOptionName(o.name, COLOR_ALIASES) && o.value === color)
        : true;
      const sizeHit = size
        ? v.selectedOptions.some((o) => matchesOptionName(o.name, SIZE_ALIASES) && o.value === size)
        : true;
      return colorHit && sizeHit;
    }) || variants[0]
  );
}

const ProductInfo = ({ title, variants = [], warranty }: ProductInfoProps) => {
  const router = useRouter();
  const { add, loading: cartLoading } = useCart();
  const colors = getOptionValues(variants, COLOR_ALIASES);
  const sizes = getOptionValues(variants, SIZE_ALIASES);

  const [selectedColor, setSelectedColor] = useState<string | undefined>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = findVariant(variants, selectedColor, selectedSize);
  const price = selectedVariant?.price ?? 0;
  const originalPrice =
    selectedVariant?.compareAtPrice && selectedVariant.compareAtPrice > price
      ? selectedVariant.compareAtPrice
      : undefined;

  const availability = selectedVariant?.availableForSale ?? true;
  const warrantyText = warranty || 'Bảo hành 1 đổi 1 theo chính sách cửa hàng';
  const canAdd = availability && Boolean(selectedVariant?.id) && !cartLoading;

  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black text-black">
            {formatVnd(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              {formatVnd(originalPrice)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-[10px] font-semibold tracking-widest uppercase text-zinc-500">
          <span className={availability ? 'text-emerald-600' : 'text-red-600'}>
            {availability ? 'CÒN HÀNG' : 'HẾT HÀNG'}
          </span>
          <span className="text-zinc-300">|</span>
          <span>{warrantyText}</span>
        </div>
      </div>

      {colors.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-zinc-200">
          <div className="flex justify-between items-center text-[10px] font-semibold tracking-widest uppercase">
            <span>MÀU: {selectedColor}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={cn(
                  'h-11 px-4 border text-[10px] font-semibold tracking-widest uppercase transition-all duration-300',
                  selectedColor === c ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200 hover:border-black'
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {sizes.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex justify-between items-center text-[10px] font-semibold tracking-widest uppercase">
            <span>KÍCH THƯỚC: {selectedSize}</span>
            <span className="underline cursor-pointer opacity-60">Bảng size</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={cn(
                  'w-12 h-12 flex items-center justify-center border text-xs font-semibold transition-all duration-300',
                  selectedSize === s ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200 hover:border-black'
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4 pt-4">
        <div className="text-[10px] font-semibold tracking-widest uppercase">SỐ LƯỢNG</div>
        <div className="flex items-center w-32 border border-zinc-200">
          <button 
            className="w-10 h-10 flex items-center justify-center hover:bg-zinc-50"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly
            className="w-12 text-center text-xs font-bold focus:outline-none"
          />
          <button 
            className="w-10 h-10 flex items-center justify-center hover:bg-zinc-50"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-6">
        <button
          disabled={!canAdd}
          className={cn(
            'w-full py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-all',
            canAdd ? 'bg-black text-white hover:bg-zinc-800' : 'bg-zinc-200 text-zinc-500 cursor-not-allowed'
          )}
          onClick={async () => {
            if (!selectedVariant?.id) return;
            await add(selectedVariant.id, quantity);
            router.push('/cart');
          }}
        >
          {cartLoading ? 'ĐANG THÊM...' : 'THÊM VÀO GIỎ HÀNG'}
        </button>
        <button
          disabled={!canAdd}
          className={cn(
            'w-full border py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-all',
            canAdd ? 'border-black text-black hover:bg-zinc-50' : 'border-zinc-200 text-zinc-500 cursor-not-allowed'
          )}
          onClick={async () => {
            if (!selectedVariant?.id) return;
            const c = await add(selectedVariant.id, quantity);
            window.location.href = c.checkoutUrl;
          }}
        >
          MUA NGAY
        </button>
        {selectedVariant?.id && (
          <div className="text-[10px] text-zinc-400 tracking-widest uppercase">
            Mã variant: {selectedVariant.id.split('/').pop()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
