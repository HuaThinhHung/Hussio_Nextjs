import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      {/* Support policies bar */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-black">
            Chính sách hỗ trợ
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div className="flex flex-col items-center text-center">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7m16 0-8 5-8-5m16 0-8-5-8 5" />
              </svg>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em]">Đóng gói miễn phí</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 4v5h.6m14.8 2A8 8 0 0 0 4.6 9m0 0H9m11 11v-5h-.6m0 0A8 8 0 0 1 4.6 15m0 0H9" />
              </svg>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em]">Đổi trả 30 ngày</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 7h12v10H3V7zm12 3h3l3 3v4h-6v-7zM7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em]">Freeship đơn 500K</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="bg-black text-white">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-12 md:gap-8 md:py-14">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-black tracking-tight">{siteConfig.brandName}</h2>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5h2l3 7-1.5 3A2 2 0 0 0 8.3 18H19" />
                  </svg>
                </span>
                <span>{siteConfig.address.full}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5h18M3 12h18M3 19h18" />
                  </svg>
                </span>
                <span>Hotline: 087.774.7777 (8:30 - 22:30)</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-9 6L3 8m18 0-9-6-9 6" />
                  </svg>
                </span>
                <span>Email: hussio.official@gmail.com</span>
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Phương thức thanh toán</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["VISA", "MASTER", "MOMO", "COD"].map((m) => (
                  <span key={m} className="inline-flex items-center justify-center rounded-sm border border-white/20 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-white/85">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Giới thiệu</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link className="hover:text-white" href="/about">Về chúng tôi</Link></li>
              <li><Link className="hover:text-white" href="/blog">Tin tức</Link></li>
              <li><Link className="hover:text-white" href="/contact">Liên hệ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Chính sách</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><span className="hover:text-white cursor-default">Chính sách bảo hành</span></li>
              <li><span className="hover:text-white cursor-default">Chính sách bảo mật</span></li>
              <li><span className="hover:text-white cursor-default">Chính sách kiểm hàng</span></li>
              <li><span className="hover:text-white cursor-default">Chính sách đổi / hoàn trả</span></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Kết nối với chúng tôi</h3>
            <div className="mt-4 flex items-center gap-3 text-white/90">
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/0 transition hover:bg-white/10 hover:border-white/25"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </Link>

              <Link
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/0 transition hover:bg-white/10 hover:border-white/25"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.6 5.82a4.82 4.82 0 0 0 3.58 1.55V4.9a8.3 8.3 0 0 1-2.28-.37 6.9 6.9 0 0 1-2.02-1.15A6.85 6.85 0 0 1 14.07.75h-2.6v13.9a3.03 3.03 0 1 1-2.57-3 3.2 3.2 0 0 1 .74.07V9.08a6.03 6.03 0 0 0-1.48-.04 5.64 5.64 0 0 0-2.35.75 5.7 5.7 0 0 0-1.74 1.59A5.67 5.67 0 0 0 3 14.65a5.66 5.66 0 0 0 1.18 3.5 5.7 5.7 0 0 0 4.5 2.2 5.86 5.86 0 0 0 2.9-.74 5.68 5.68 0 0 0 2.06-2.01 5.77 5.77 0 0 0 .83-3V8.78c.63.45 1.33.8 2.07 1.02.83.25 1.69.38 2.56.38V7.7c-1.78 0-3.39-.73-4.56-1.88z" />
                </svg>
              </Link>

              <Link
                href={siteConfig.social.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/0 transition hover:bg-white/10 hover:border-white/25"
                aria-label="Shopee"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M7 9V7a5 5 0 0 1 10 0v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M6 9h12l1 12H5L6 9z" />
                </svg>
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={siteConfig.social.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 bg-white px-5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-zinc-100"
              >
                Mua hàng trên Shopee
              </Link>
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 bg-transparent px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                Chat Facebook
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <p className="text-center text-xs text-white/60">© {new Date().getFullYear()} {siteConfig.brandName}. Bảo lưu mọi quyền.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
