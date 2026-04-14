"use client";

import React from 'react';

const AnnouncementBar = () => {
  const helmetIcon = (
    <svg className="w-4 h-4 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2ZM12 4.41L16.41 15L12 13.06L7.59 15L12 4.41Z" />
    </svg>
  );

  return (
    <div className="w-full bg-black text-white py-2.5 px-4 overflow-hidden border-b border-black">
      <div className="flex items-center justify-center whitespace-nowrap animate-marquee md:animate-none space-x-10 md:space-x-16 text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase">
        <div className="flex items-center space-x-3">
          <span className="opacity-80">{helmetIcon}</span>
          <span>FREESHIP ĐƠN TỪ 250K</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="opacity-80">{helmetIcon}</span>
          <span>ĐỔI TRẢ DỄ DÀNG TRONG 30 NGÀY</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="opacity-80">{helmetIcon}</span>
          <span>THỜI TRANG CÔNG SỞ NAM - HUSSIO</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
