"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navigation;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md border-zinc-200 h-16" : "bg-white border-zinc-100 h-[72px]"
      )}
    >
      <div className="container mx-auto h-full px-4 lg:px-8 grid grid-cols-3 items-center gap-2">
        <div className="flex items-center">
          <button className="md:hidden p-2 -ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] font-semibold tracking-[0.16em] uppercase h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name} href={link.href}
                className="hover:text-zinc-500 transition-colors flex items-center h-full"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/" className="text-2xl lg:text-3xl font-black tracking-[-0.05em] hover:opacity-70 transition-opacity">HUSSIO</Link>
        </div>

        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <Link href="/login" className="p-2 hover:bg-zinc-100 rounded-full transition-colors hidden md:block" aria-label="Login">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </Link>
          <Link href="/cart" className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative flex items-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <span className="absolute top-1 right-0 bg-black text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">0</span>
          </Link>
          <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors" onClick={() => setIsSearchOpen(true)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-[310px] bg-white z-[70] shadow-2xl p-8 transition-transform duration-500 ease-out animate-slide-right">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black tracking-tight">HUSSIO</span>
              <button className="p-2 hover:bg-zinc-100 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-6 text-[10px] font-semibold tracking-[0.18em] uppercase">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex justify-between items-center transition-all duration-300 border-b border-zinc-100 pb-4 hover:pl-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-16 space-y-6 pt-8 border-t border-zinc-200">
               <Link href="/login" className="flex items-center space-x-3 text-[10px] font-semibold tracking-widest uppercase opacity-70" onClick={() => setIsMobileMenuOpen(false)}>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                 <span>Đăng nhập / Đăng ký</span>
               </Link>
            </div>
          </div>
        </>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-10 flex flex-col items-center justify-start animate-fade-in shadow-2xl">
           <button className="absolute top-10 right-10 p-2 hover:bg-zinc-100 rounded-full" onClick={() => setIsSearchOpen(false)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-full max-w-4xl mt-24">
               <h2 className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-12 text-center opacity-50">BẠN ĐANG TÌM GÌ?</h2>
               <input type="text" placeholder="TÌM KIẾM SẢN PHẨM..." className="w-full text-3xl md:text-5xl font-black tracking-[-0.04em] uppercase border-b border-black pb-5 focus:outline-none" autoFocus />
               <div className="mt-12 flex flex-wrap gap-8 justify-center">
                 {['ÁO SƠ MI', 'ÁO POLO', 'QUẦN TÂY', 'PHỤ KIỆN'].map(tag => (
                   <span key={tag} className="text-[10px] font-semibold tracking-widest text-zinc-500 cursor-pointer hover:text-black">#{tag}</span>
                 ))}
               </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
