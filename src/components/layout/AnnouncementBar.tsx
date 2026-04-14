"use client";

import React from 'react';

const AnnouncementBar = () => {
  const hussioLogo = (
    <span
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="text-[13px] font-bold tracking-wide text-black leading-none"
    >
      HUSSIO
    </span>
  );

  const divider = <div className="w-px h-3 bg-gray-300" />;

  return (
    <div className="w-full bg-zinc-150 text-black py-4 px-4 overflow-hidden border-b border-zinc-200">
      <div className="flex items-center justify-center whitespace-nowrap animate-marquee md:animate-none space-x-10 md:space-x-16 text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase">
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>FREESHIP ĐƠN TỪ 250K</span>
        </div>
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>ĐỔI TRẢ DỄ DÀNG TRONG 30 NGÀY</span>
        </div>
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>THỜI TRANG CÔNG SỞ NAM - HUSSIO</span>
        </div>
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>DỊCH VỤ BẢO HÀNH 1 ĐỔI 1</span>
        </div>
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>NHẬN NGAY VOUCHER 100K</span>
        </div>
        <div className="flex items-center space-x-3">
          {hussioLogo}
          {divider}
          <span>ƯU ĐÃI 10% KHI MUA ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;