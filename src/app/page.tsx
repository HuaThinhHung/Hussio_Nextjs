import type { Metadata } from "next";
import HeroSlider from "@/sections/home/HeroSlider";
import CategoryGrid from "@/sections/home/CategoryGrid";
import CollectionBanners from "@/sections/home/CollectionBanners";
import ProductSection from "@/sections/home/ProductSection";
import BannerSection from "@/sections/home/BannerSection";
import TrustBadge from "@/components/common/TrustBadge";
import BusinessCta from "@/components/common/BusinessCta";
import { seoConfig, siteConfig } from "@/config/site";
import { getProducts } from "@/lib/shopify";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
};

export default async function Home() {
  const products = await getProducts(20);
  const bestSellers = products.slice(0, 16);
  const newArrivals = products.slice(0, 16);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSlider />
      <CategoryGrid />
      <CollectionBanners />

      <div className="animate-fade-in">
        <ProductSection title="SẢN PHẨM BÁN CHẠY" products={bestSellers} />
      </div>

      <div className="animate-fade-in">
        <BannerSection
          title="HUSSIO OFFICE COLLECTION"
          subtitle="Phong cách là cách bạn thể hiện bản thân mà không cần lên tiếng."
          image="/images/banner/4.jpg"
          buttonText="XEM TẤT CẢ"
          link="/products"
        />
      </div>

      <div className="animate-fade-in">
        <ProductSection title="SẢN PHẨM MỚI" products={newArrivals} />
      </div>

      <section className="container mx-auto px-4 py-16 border-t border-zinc-200 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-black font-semibold tracking-[0.28em] uppercase opacity-70">
            Feedback khách hàng
          </h2>
        </div>
        <div className="relative overflow-hidden border-y border-zinc-200 bg-white py-4 md:py-6">
          <div className="flex w-fit gap-4 md:gap-6 animate-marquee hover:[animation-play-state:paused]">
            <div className="flex gap-4 md:gap-6 px-2">
              {[...Array(12)].map((_, idx) => (
                <div
                  key={`fb-a-${idx}`}
                  className="h-[140px] w-[220px] md:h-[180px] md:w-[280px] lg:h-[220px] lg:w-[340px] shrink-0 bg-zinc-50 overflow-hidden rounded-sm transition-all duration-500 shadow-sm border border-zinc-100"
                >
                  <img
                    src={`/images/feeback/${idx + 1}.jpg`}
                    alt={`feedback ${idx + 1}`}
                    className="h-full w-full object-cover brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 px-2">
              {[...Array(12)].map((_, idx) => (
                <div
                  key={`fb-b-${idx}`}
                  className="h-[140px] w-[220px] md:h-[180px] md:w-[280px] lg:h-[220px] lg:w-[340px] shrink-0 bg-zinc-50 overflow-hidden rounded-sm transition-all duration-500 shadow-sm border border-zinc-100"
                >
                  <img
                    src={`/images/feeback/${idx + 1}.jpg`}
                    alt={`feedback ${idx + 1}`}
                    className="h-full w-full object-cover brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBadge />
    </div>
  );
}
