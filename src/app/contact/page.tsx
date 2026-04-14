import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig, siteConfig } from "@/config/site";
import BusinessCta from "@/components/common/BusinessCta";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
};

const contacts = [
  { label: "Address", value: siteConfig.address.full, href: null },
  { label: "Facebook", value: siteConfig.social.facebook, href: siteConfig.social.facebook },
  { label: "Shopee", value: siteConfig.social.shopee, href: siteConfig.social.shopee },
  { label: "TikTok", value: siteConfig.social.tiktok, href: siteConfig.social.tiktok },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">Contact HUSSIO</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-600 md:text-base">
          We use this website for branding, SEO visibility, and customer trust. Main sales channels remain official marketplaces and social platforms.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Company Information</h2>
            <ul className="mt-6 space-y-5">
              {contacts.map((item) => (
                <li key={item.label} className="flex items-start gap-3 border-b border-zinc-200 pb-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.4}
                      d={
                        item.label === "Address"
                          ? "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          : item.label === "Facebook"
                            ? "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            : item.label === "Shopee"
                              ? "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              : "M9 12a3 3 0 006 0V7a3 3 0 00-6 0v5zm-3 0a6 6 0 0012 0m-7 9h2"
                      }
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
                    {item.href ? (
                      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm hover:underline underline-offset-4">
                        {item.value}
                      </Link>
                    ) : (
                      <address className="mt-1 not-italic text-sm leading-relaxed">{item.value}</address>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BusinessCta />
            </div>
          </section>

          <section className="lg:col-span-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Send Us A Message</h2>
            <form className="mt-6 space-y-4 border border-zinc-200 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input className="h-11 border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none" placeholder="Your name" />
                <input className="h-11 border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none" placeholder="Phone number" />
              </div>
              <input className="h-11 w-full border border-zinc-300 px-3 text-sm focus:border-black focus:outline-none" placeholder="Email" />
              <textarea className="min-h-32 w-full border border-zinc-300 p-3 text-sm focus:border-black focus:outline-none" placeholder="Tell us how we can help" />
              <button type="submit" className="inline-flex h-11 items-center justify-center border border-black bg-black px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-zinc-800">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}
