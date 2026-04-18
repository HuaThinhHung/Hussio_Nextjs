"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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
                href="/contact"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Liên hệ chúng tôi
              </Link>
              <Link
                href="/careers"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Tuyển dụng
              </Link>
            </nav>
          </div>

          {/* Column 4: Connect & CSKH */}
          <div className="lg:col-span-3 space-y-8">
            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/50">
                Theo dõi chúng tôi
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {/* Facebook */}
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </Link>
                {/* Instagram */}
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </Link>
                {/* TikTok */}
                <Link
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                </Link>
                {/* YouTube */}
                <Link
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
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
