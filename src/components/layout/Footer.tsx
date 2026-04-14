import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import BusinessCta from '@/components/common/BusinessCta';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2 md:gap-20 md:py-16">
        <section>
          <h2 className="text-3xl font-black tracking-tight">{siteConfig.brandName}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600">
            Minimal office fashion for men. Built for confident daily wear and professional style.
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-zinc-700">
            {siteConfig.address.full}
          </address>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Connect with HUSSIO</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link className="underline-offset-4 hover:underline" href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href={siteConfig.social.shopee} target="_blank" rel="noopener noreferrer">
                Shopee
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <BusinessCta />
          </div>
        </section>
      </div>
      <div className="border-t border-zinc-200 py-4">
        <p className="text-center text-xs text-zinc-500">© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
