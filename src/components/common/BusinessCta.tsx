import Link from "next/link";
import { siteConfig } from "@/config/site";

const ctas = [
  { label: "Shop on Shopee", href: siteConfig.social.shopee, primary: true },
  { label: "Chat on Facebook", href: siteConfig.social.facebook, primary: false },
];

export default function BusinessCta() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {ctas.map((cta) => (
        <Link
          key={cta.label}
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            cta.primary
              ? "inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-zinc-800"
              : "inline-flex items-center justify-center border border-black bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black hover:bg-zinc-100"
          }
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
}
