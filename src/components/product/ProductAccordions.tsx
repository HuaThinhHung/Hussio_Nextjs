"use client";

import React from "react";

type ProductAccordionsProps = {
  descriptionHtml?: string;
  warranty?: string;
};

const ProductAccordions = ({
  descriptionHtml,
  warranty,
}: ProductAccordionsProps) => {
  const warrantyText =
    warranty || "DỊCH VỤ BẢO HÀNH 1 ĐỔI 1 (THEO CHÍNH SÁCH CỬA HÀNG).";

  return (
    <div className="pt-8 space-y-6">
      <details className="group border-b border-zinc-200 pb-4" open>
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="text-[20px] font-semibold tracking-widest uppercase">
            MÔ TẢ SẢN PHẨM
          </span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        {descriptionHtml ? (
          <div
            className="mt-4 text-[15px] leading-relaxed text-zinc-600 tracking-wide"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        ) : (
          <div className="mt-4 text-[20px] leading-relaxed text-zinc-600 tracking-wide uppercase">
            Chất liệu cao cấp, thoáng mát, giữ form tốt. Thiết kế tối giản, sang
            trọng phù hợp cho mọi hoàn cảnh.
          </div>
        )}
      </details>

      <details className="group border-b border-zinc-200 pb-4">
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="text-[20px] font-semibold tracking-widest uppercase">
            CHẤT LIỆU & BẢO QUẢN
          </span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 text-[15px] leading-relaxed text-zinc-600 tracking-wide uppercase">
          - 100% Cotton Premium.
          <br />
          - Giặt máy ở chế độ nhẹ nhàng.
          <br />
          - Không sử dụng chất tẩy mạnh.
          <br />- Phơi trong bóng râm để giữ độ bền màu.
        </div>
      </details>

      <details className="group border-b border-zinc-200 pb-4">
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="text-[20px] font-semibold tracking-widest uppercase">
            BẢO HÀNH
          </span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 text-[15px] leading-relaxed text-zinc-600 tracking-wide uppercase">
          {warrantyText}
        </div>
      </details>
    </div>
  );
};

export default ProductAccordions;
