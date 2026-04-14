import type { Metadata } from "next";
import { seoConfig, siteConfig } from "@/config/site";
import BusinessCta from "@/components/common/BusinessCta";

export const metadata: Metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">Who Is HUSSIO</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
          {siteConfig.brandName} is a Vietnamese men's fashion brand focused on office wear. Our style is minimal, modern, and masculine, made for professionals who want a clean wardrobe that works every day.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Mission</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Build modern office fashion for men with practical fit, easy styling, and long-term wear confidence.
            </p>
          </article>
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Brand Tone</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Confident, clean, and minimal. Every design choice keeps focus on clarity and professional look.
            </p>
          </article>
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Business Model</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Main transactions are on official marketplaces and social channels. This website strengthens branding, trust, and SEO presence.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <BusinessCta />
        </div>
      </section>
    </div>
  );
}
