"use client";

import React from 'react';

const ProductAccordions = () => {
  return (
    <div className="pt-8 space-y-6">
      <details className="group border-b border-zinc-200 pb-4" open>
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="text-[10px] font-semibold tracking-widest uppercase">MÔ TẢ SẢN PHẨM</span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 text-[11px] leading-relaxed text-zinc-600 tracking-wide uppercase">
          Chất liệu cao cấp, thoáng mát, giữ form tốt. Thiết kế tối giản, sang trọng phù hợp cho mọi hoàn cảnh.
          Sản phẩm thuộc bộ sưu tập Quiet Strength - mang lại sự tự tin từ chính sự tinh tế.
        </div>
      </details>
      
      <details className="group border-b border-zinc-200 pb-4">
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="text-[10px] font-semibold tracking-widest uppercase">CHẤT LIỆU & BẢO QUẢN</span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 text-[11px] leading-relaxed text-zinc-600 tracking-wide uppercase">
          - 100% Cotton Premium.<br/>
          - Giặt máy ở chế độ nhẹ nhàng.<br/>
          - Không sử dụng chất tẩy mạnh.<br/>
          - Phơi trong bóng râm để giữ độ bền màu.
        </div>
      </details>
    </div>
  );
};

export default ProductAccordions;
