import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.register.title,
  description: seoConfig.register.description,
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto max-w-md px-4 py-14 md:py-20">
        <h1 className="text-3xl font-black uppercase tracking-tight">Register</h1>
        <p className="mt-3 text-sm text-zinc-600">
          Create your {siteConfig.brandName} account for faster checkout and order tracking.
        </p>

        <form className="mt-8 space-y-4 border border-zinc-200 p-6">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              className="h-11 w-full border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none"
              placeholder="Your full name"
            />
          </div>

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
              Password
            </label>
            <input
              id="password"
              type="password"
              className="h-11 w-full border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none"
              placeholder="Create password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center border border-black bg-black text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-zinc-800"
          >
            Create account
          </button>
        </form>

        <p className="mt-5 text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-black underline underline-offset-4">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
