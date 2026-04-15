"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import type { StoreProductVariant } from '@/types/product-detail';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

interface ProductInfoProps {
  title: string;
  variants?: StoreProductVariant[];
  options?: Array<{ name: string; values: string[] }>;
  warranty?: string;
}

function formatVnd(price: number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

const ProductInfo = ({ title, variants = [], options = [], warranty }: ProductInfoProps) => {
  const router = useRouter();
  const { add, loading: cartLoading } = useCart();

  // Khởi tạo state cho các option đã chọn
  // Mặc định chọn giá trị đầu tiên của mỗi option
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    options.forEach(opt => {
      if (opt.values.length > 0) initial[opt.name] = opt.values[0];
    });
    return initial;
  });

  const [quantity, setQuantity] = useState(1);

  // Tìm variant khớp với tất cả option đã chọn
  const selectedVariant = variants.find(v => 
    v.selectedOptions.every(opt => selectedOptions[opt.name] === opt.value)
  ) || variants[0];

  const price = selectedVariant?.price ?? 0;
  const originalPrice =
    selectedVariant?.compareAtPrice && selectedVariant.compareAtPrice > price
      ? selectedVariant.compareAtPrice
      : undefined;

  const availability = selectedVariant?.availableForSale ?? true;
  const warrantyText = warranty || 'Bảo hành 1 đổi 1 theo chính sách cửa hàng';
  const canAdd = availability && Boolean(selectedVariant?.id) && !cartLoading;

  const handleOptionChange = (name: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
          {title}
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-black text-black">
            {formatVnd(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              {formatVnd(originalPrice)}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
          <span className={availability ? 'text-emerald-600 bg-emerald-50 px-2 py-1' : 'text-red-600 bg-red-50 px-2 py-1'}>
            {availability ? 'CÒN HÀNG' : 'HẾT HÀNG'}
          </span>
          {selectedVariant?.sku && (
            <span className="text-zinc-500 bg-zinc-100 px-2 py-1">SKU: {selectedVariant.sku}</span>
          )}
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-zinc-100">
        {options.map((opt) => (
          <div key={opt.name} className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
              <span>{opt.name}: {selectedOptions[opt.name]}</span>
              {opt.name.toLowerCase().includes('size') && (
                <span className="underline cursor-pointer opacity-60 hover:opacity-100 transition-opacity">Bảng size</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {opt.values.map((val) => {
                const isActive = selectedOptions[opt.name] === val;
                return (
                  <button
                    key={val}
                    onClick={() => handleOptionChange(opt.name, val)}
                    className={cn(
                      'min-w-[44px] h-11 px-4 border text-[11px] font-bold tracking-widest uppercase transition-all duration-200',
                      isActive 
                        ? 'bg-black text-white border-black shadow-md' 
                        : 'bg-white text-black border-zinc-200 hover:border-black'
                    )}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="space-y-4">
          <div className="text-[10px] font-bold tracking-widest uppercase">SỐ LƯỢNG</div>
          <div className="flex items-center w-32 border border-zinc-200 bg-zinc-50/50">
            <button 
              className="w-10 h-10 flex items-center justify-center hover:bg-white transition-colors border-r border-zinc-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <input 
              type="text" 
              value={quantity} 
              readOnly
              className="w-12 text-center text-xs font-bold bg-transparent focus:outline-none"
            />
            <button 
              className="w-10 h-10 flex items-center justify-center hover:bg-white transition-colors border-l border-zinc-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-4">
        <button
          disabled={!canAdd}
          className={cn(
            'w-full py-5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300',
            canAdd ? 'bg-black text-white hover:bg-zinc-800' : 'bg-zinc-200 text-zinc-500 cursor-not-allowed'
          )}
          onClick={async () => {
            if (!selectedVariant?.id) return;
            await add(selectedVariant.id, quantity);
            router.push('/cart');
          }}
        >
          {cartLoading ? 'ĐANG XỬ LÝ...' : 'THÊM VÀO GIỎ HÀNG'}
        </button>
        <button
          disabled={!canAdd}
          className={cn(
            'w-full border py-5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300',
            canAdd ? 'border-black text-black hover:bg-zinc-900 hover:text-white' : 'border-zinc-200 text-zinc-400 cursor-not-allowed'
          )}
          onClick={async () => {
            if (!selectedVariant?.id) return;
            const c = await add(selectedVariant.id, quantity);
            if (c.checkoutUrl) window.location.href = c.checkoutUrl;
          }}
        >
          MUA NGAY
        </button>
        
        <div className="flex items-center justify-center gap-2 pt-2 grayscale opacity-50">
           <img src="https://cdn.shopify.com/s/files/1/0611/8195/2240/files/payment-methods.png?v=1641542562" alt="payment" className="h-6 object-contain" />
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-100">
        <div className="bg-zinc-50 p-4 space-y-2">
           <div className="flex items-start gap-3">
              <span className="text-lg">🛡️</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black">Cam kết từ Hussio</p>
                <p className="text-[10px] text-zinc-500 uppercase leading-relaxed mt-1">{warrantyText}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
