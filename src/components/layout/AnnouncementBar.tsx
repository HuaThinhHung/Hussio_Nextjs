"use client";

import React from 'react';

const AnnouncementBar = () => {
  const hussioLogo = (
    <span
      style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      className="text-[13px] font-bold tracking-wide text-black leading-none"
    >
      HUSSIO
    </span>
  );

  const divider = <div className="w-px h-3 bg-gray-300" />;

  const items = [
    "FREESHIP ĐƠN TỪ 250K",
    "ĐỔI TRẢ DỄ DÀNG TRONG 30 NGÀY",
    "THỜI TRANG CÔNG SỞ NAM - HUSSIO",
    "DỊCH VỤ BẢO HÀNH 1 ĐỔI 1",
    "NHẬN NGAY VOUCHER 100K",
    "ƯU ĐÃI 10% KHI MUA ONLINE"
  ];

  const AnnouncementList = () => (
    <div className="flex items-center space-x-10 md:space-x-16 px-5">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3 shrink-0">
          {hussioLogo}
          {divider}
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap">
            {item}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-zinc-150 text-black py-4 overflow-hidden border-b border-zinc-200">
      <div className="flex w-fit min-w-full animate-marquee">
        <div className="flex shrink-0">
          <AnnouncementList />
        </div>
        <div className="flex shrink-0">
          <AnnouncementList />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;