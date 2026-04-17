"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useCart } from "@/hooks/useCart";
import Megamenu from "./Megamenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'products' | 'collections' | 'contact' | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<'products' | 'collections' | 'contact' | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const { cart, openDrawer } = useCart();
  const cartCount = cart?.totalQuantity || 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.bottom = "0";
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : "0";
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
      document.body.style.touchAction = "none";
      
      document.documentElement.style.scrollBehavior = "auto";
      
      requestAnimationFrame(() => {
        document.body.style.height = `${scrollY + window.innerHeight}px`;
      });
    } else {
      const scrollY = parseInt(document.body.style.height || "0") - window.innerHeight;
      
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";
      document.body.style.paddingRight = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.touchAction = "";
      
      document.documentElement.style.scrollBehavior = "";
      
      requestAnimationFrame(() => {
        window.scrollTo(0, Math.max(0, scrollY));
      });
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";
      document.body.style.paddingRight = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.touchAction = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = siteConfig.navigation;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-zinc-200 h-16"
          : "bg-white border-zinc-100 h-[72px]",
        activeMenu && "bg-white border-zinc-200"
      )}
      onMouseLeave={() => {
        const timeout = setTimeout(() => setActiveMenu(null), 100);
        setLeaveTimeout(timeout);
      }}
      onMouseEnter={() => {
        if (leaveTimeout) clearTimeout(leaveTimeout);
      }}
    >
      <div className="container mx-auto h-full px-4 lg:px-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="flex items-center">
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] font-semibold tracking-[0.16em] uppercase h-full"
          >
            {navLinks.map((link) => {
              const hasSubmenu = link.name === "LIÊN HỆ" && link.submenu;
              return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => {
                  if (link.name === "SẢN PHẨM") setActiveMenu("products");
                  else if (link.name === "BỘ SƯU TẬP") setActiveMenu("collections");
                  else if (link.name === "LIÊN HỆ") setActiveMenu("contact");
                  else setActiveMenu(null);
                }}
                className="group relative inline-flex items-center h-full px-0.5 text-black whitespace-nowrap transition-colors duration-200 hover:text-zinc-500"
              >
                <span className={cn(
                  "relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:bg-current after:opacity-90 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:after:scale-x-100",
                  (activeMenu === 'products' && link.name === "SẢN PHẨM") ||
                  (activeMenu === 'collections' && link.name === "BỘ SƯU TẬP") ||
                  (activeMenu === 'contact' && link.name === "LIÊN HỆ") ? "after:scale-x-100" : ""
                )}>
                  {link.name}
                </span>
              </Link>
            );
          })}
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-black tracking-[-0.05em] hover:opacity-70 transition-opacity"
          >
            HUSSIO
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <Link
            href="/login"
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors hidden md:block"
            aria-label="Đăng nhập"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <Link
            href="/cart"
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative flex items-center"
            onClick={(e) => {
              e.preventDefault();
              openDrawer();
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 bg-black text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold animate-pulse-subtle">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Megamenu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 w-full z-100 bg-white border-b border-zinc-200 transition-all duration-300 ease-out",
          activeMenu
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        )}
        onMouseEnter={() => {
          if (leaveTimeout) clearTimeout(leaveTimeout);
        }}
        onMouseLeave={() => {
          const timeout = setTimeout(() => setActiveMenu(null), 100);
          setLeaveTimeout(timeout);
        }}
      >
        <div className="container mx-auto">
           {activeMenu && <Megamenu type={activeMenu} />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 w-[310px] bg-white z-70 shadow-2xl p-8 transition-transform duration-500 ease-out animate-slide-right">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black tracking-tight">HUSSIO</span>
              <button
                className="p-2 hover:bg-zinc-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col space-y-6 text-[10px] font-semibold tracking-[0.18em] uppercase"
            >
              {/* NEW-IN - Link trực tiếp, hàng đầu tiên */}
              <Link
                href="/new-in"
                className="flex justify-between items-center transition-all duration-300 border-b border-zinc-100 pb-4 hover:pl-2 hover:text-zinc-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>NEW-IN</span>
              </Link>

              {/* Products Submenu */}
              <div className="border-b border-zinc-100 pb-4">
                <button
                  className="flex justify-between items-center w-full hover:pl-2 hover:text-zinc-500 transition-all"
                  onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'products' ? null : 'products')}
                >
                  <span>SẢN PHẨM</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      mobileActiveSubmenu === 'products' ? "rotate-180" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobileActiveSubmenu === 'products' ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="flex flex-col space-y-3 pl-4">
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Áo Polo</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Áo Thun (Tee)</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Áo Sơ mi</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Áo Khoác (Jacket)</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Quần Kaki</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Quần Tây</Link>
                    <Link href="/products" className="text-zinc-500 hover:text-black transition-colors">Phụ Kiện</Link>
                  </div>
                </div>
              </div>

              {/* Collections Submenu */}
              <div className="border-b border-zinc-100 pb-4">
                <button
                  className="flex justify-between items-center w-full hover:pl-2 hover:text-zinc-500 transition-all"
                  onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'collections' ? null : 'collections')}
                >
                  <span>BỘ SƯU TẬP</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      mobileActiveSubmenu === 'collections' ? "rotate-180" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobileActiveSubmenu === 'collections' ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="flex flex-col space-y-3 pl-4">
                    <Link href="/collections" className="text-zinc-500 hover:text-black transition-colors">Quiet Strength</Link>
                    <Link href="/collections" className="text-zinc-500 hover:text-black transition-colors">Modern Black</Link>
                    <Link href="/collections" className="text-zinc-500 hover:text-black transition-colors">Summer Essentials</Link>
                    <Link href="/collections" className="text-zinc-500 hover:text-black transition-colors">Hussio Classic</Link>
                  </div>
                </div>
              </div>

              {/* LIÊN HỆ with Submenu */}
              <div className="border-b border-zinc-100 pb-4">
                <button
                  className="flex justify-between items-center w-full hover:pl-2 hover:text-zinc-500 transition-all"
                  onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'contact' ? null : 'contact')}
                >
                  <span>LIÊN HỆ</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      mobileActiveSubmenu === 'contact' ? "rotate-180" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobileActiveSubmenu === 'contact' ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="flex flex-col space-y-3 pl-4">
                    <Link
                      href="/contact"
                      className="text-zinc-500 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Liên hệ
                    </Link>
                    <Link
                      href="/careers"
                      className="text-zinc-500 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Tuyển dụng
                    </Link>
                  </div>
                </div>
              </div>

              {/* SALE 50% */}
              <Link
                href="/sale"
                className="flex justify-between items-center transition-all duration-300 border-b border-zinc-100 pb-4 hover:pl-2 hover:text-zinc-500 text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>SALE 50%</span>
              </Link>
            </nav>
            <div className="mt-16 space-y-6 pt-8 border-t border-zinc-200">
              <Link
                href="/login"
                className="flex items-center space-x-3 text-[10px] font-semibold tracking-widest uppercase opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Đăng nhập / Đăng ký</span>
              </Link>
            </div>
          </div>
        </>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-100 p-10 flex flex-col items-center justify-start animate-fade-in shadow-2xl">
          <button
            className="absolute top-10 right-10 p-2 hover:bg-zinc-100 rounded-full"
            onClick={() => setIsSearchOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-full max-w-4xl mt-24">
            <h2 className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-12 text-center opacity-50">
              BẠN ĐANG TÌM GÌ?
            </h2>
            <input
              type="text"
              placeholder="TÌM KIẾM SẢN PHẨM..."
              className="w-full text-3xl md:text-5xl font-black tracking-[-0.04em] uppercase border-b border-black pb-5 focus:outline-none"
              autoFocus
            />
            <div className="mt-12 flex flex-wrap gap-8 justify-center">
              {["ÁO SƠ MI", "ÁO POLO", "QUẦN TÂY", "PHỤ KIỆN"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-widest text-zinc-500 cursor-pointer hover:text-black"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
