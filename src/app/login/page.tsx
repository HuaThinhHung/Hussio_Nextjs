import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.login.title,
  description: seoConfig.login.description,
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto max-w-md px-4 py-14 md:py-20">
        <h1 className="text-3xl font-black uppercase tracking-tight">Đăng nhập</h1>
        <p className="mt-3 text-sm text-zinc-600">
          Chào mừng bạn quay lại {siteConfig.brandName}. Đăng nhập để tiếp tục mua sắm.
        </p>

        <form className="mt-8 space-y-4 border border-zinc-200 p-6">
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="h-11 w-full border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              className="h-11 w-full border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center border border-black bg-black text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-zinc-800"
          >
            Đăng nhập
          </button>
        </form>

        <p className="mt-5 text-sm text-zinc-600">
          Bạn chưa có tài khoản?{" "}
          <Link href="/register" className="font-semibold text-black underline underline-offset-4">
            Đăng ký
          </Link>
        </p>
      </section>
    </div>
  );
}
