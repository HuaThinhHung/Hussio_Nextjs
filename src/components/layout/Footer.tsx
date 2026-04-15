"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Newsletter Section */}
      <section className="border-b border-white/5">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-4">
              Kết nối với HUSSIO
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 tracking-wide">
              Đăng ký để nhận thông tin về bộ sưu tập mới và các ưu đãi đặc
              quyền sớm nhất.
            </p>
            <form
              className="relative max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="ĐỊA CHỈ EMAIL CỦA BẠN"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-[11px] font-bold tracking-[0.2em] focus:outline-none focus:border-white transition-colors uppercase"
              />
              <button className="absolute right-0 bottom-4 text-[10px] font-black uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors">
                GỬI NGAY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link
                href="/"
                className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity"
              >
                HUSSIO
              </Link>
              <p className="mt-6 text-zinc-400 text-sm leading-relaxed max-w-sm">
                Thương hiệu thời trang nam hiện đại, tập trung vào sự tối giản
                và chỉn chu trong từng chi tiết. Mang lại sự tự tin cho phái
                mạnh Việt.
              </p>
            </div>

            <div className="space-y-4 text-xs tracking-wider">
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 uppercase font-bold min-w-[70px]">
                  Địa chỉ:
                </span>
                <span className="text-zinc-300">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 uppercase font-bold min-w-[70px]">
                  Hotline:
                </span>
                <span className="text-zinc-300">
                  087.774.7777 (8:30 - 22:30)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 uppercase font-bold min-w-[70px]">
                  Email:
                </span>
                <span className="text-zinc-300">hussio.official@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/50">
              Mua sắm
            </h3>
            <nav className="flex flex-col space-y-4 text-xs font-semibold uppercase tracking-widest">
              <Link
                href="/products"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Sản phẩm mới
              </Link>
              <Link
                href="/collections"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Bộ sưu tập
              </Link>
              <Link
                href="/products?category=ao"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Áo sơ mi/Polo
              </Link>
              <Link
                href="/products?category=quan"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Quần tây/Kaki
              </Link>
              <Link
                href="/sale"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Flash Sale
              </Link>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/50">
              Hỗ trợ khách hàng
            </h3>
            <nav className="flex flex-col space-y-4 text-xs font-semibold uppercase tracking-widest">
              <Link
                href="/pages/chinh-sach-doi-tra"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Đổi trả & Hoàn tiền
              </Link>
              <Link
                href="/pages/chinh-sach-bao-hanh"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Chính sách bảo hành
              </Link>
              <Link
                href="/pages/huong-dan-chon-size"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Hướng dẫn chọn size
              </Link>
              <Link
                href="/pages/chinh-sach-bao-mat"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/pages/lien-he"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Liên hệ chúng tôi
              </Link>
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/50">
                Theo dõi chúng tôi
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {/* Facebook */}
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </Link>
                {/* Instagram */}
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                {/* TikTok */}
                <Link
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-3.3 2.97-6.07 6.26-6.02 1.13.01 2.24.34 3.18.96.02-1.28 0-2.57.01-3.85-1-.53-2.15-.79-3.3-.81-1.92-.09-3.82.72-5.18 2.08-1.36 1.36-2.17 3.27-2.08 5.18.09 1.93.9 3.83 2.26 5.19 1.36 1.37 3.27 2.17 5.18 2.08 1.92-.09 3.82-.72 5.18-2.08 1.15-1.16 1.91-2.67 2.1-4.28.18-1.5-.15-3.03-.92-4.36z" />
                  </svg>
                </Link>
                {/* Zalo */}
                <Link
                  href={siteConfig.social.zalo}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#0068ff] hover:border-[#0068ff] transition-all duration-300"
                >
                  <span className="text-[10px] font-black">Zalo</span>
                </Link>
                {/* Threads */}
                <Link
                  href={siteConfig.social.threads}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-15c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                  </svg>
                </Link>
                {/* YouTube */}
                <Link
                  href={siteConfig.social.youtube}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                {/* Shopee */}
                <Link
                  href={siteConfig.social.shopee}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#ee4d2d] hover:border-[#ee4d2d] transition-all duration-300"
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
                      strokeWidth="1.7"
                      d="M7 9V7a5 5 0 0 1 10 0v2M6 9h12l1 12H5L6 9z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="w-full text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
                Thanh toán an toàn
              </span>
              {["VISA", "MASTER", "MOMO", "COD"].map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 border border-white/10 rounded text-[9px] font-bold tracking-widest text-zinc-400"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="bg-black py-8 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.brandName}. POWERED BY
            HUSSIO TEAM.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/pages/dieu-khoan-dich-vu"
              className="text-[10px] text-zinc-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              Điều khoản
            </Link>
            <Link
              href="/pages/chinh-sach-bao-mat"
              className="text-[10px] text-zinc-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              Bảo mật
            </Link>
            <div className="h-8 w-24 bg-zinc-800 rounded opacity-50 grayscale flex items-center justify-center text-[8px] font-bold text-zinc-600 border border-zinc-700">
              BỘ CÔNG THƯƠNG
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
