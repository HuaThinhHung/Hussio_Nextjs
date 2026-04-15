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
  const bestSellers = products.slice(0, 4);
  const newArrivals = products.slice(0, 8);

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
        <div className="relative overflow-hidden border border-zinc-200 bg-white">
          <div className="flex gap-2 md:gap-3 py-2 md:py-3 animate-marquee [animation-duration:55s] hover:[animation-play-state:paused]">
            {[...Array(12)].map((_, idx) => {
              const i = idx + 1;
              return (
                <div
                  key={`fb-a-${i}`}
                  className="h-[130px] w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[300px] shrink-0 bg-zinc-100 overflow-hidden transition-all duration-500"
                >
                  <img
                    src={`/images/feeback/${i}.jpg`}
                    alt={`feedback ${i}`}
                    className="h-full w-full object-cover brightness-[1.06] contrast-[1.04] transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              );
            })}
            {[...Array(12)].map((_, idx) => {
              const i = idx + 1;
              return (
                <div
                  key={`fb-b-${i}`}
                  className="h-[130px] w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[300px] shrink-0 bg-zinc-100 overflow-hidden transition-all duration-500"
                >
                  <img
                    src={`/images/feeback/${i}.jpg`}
                    alt={`feedback ${i}`}
                    className="h-full w-full object-cover brightness-[1.06] contrast-[1.04] transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustBadge />
    </div>
  );
}
