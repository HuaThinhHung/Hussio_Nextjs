import type { Metadata } from 'next';
import HeroSlider from '@/sections/home/HeroSlider';
import CategoryGrid from '@/sections/home/CategoryGrid';
import ProductSection from '@/sections/home/ProductSection';
import BannerSection from '@/sections/home/BannerSection';
import { products } from '@/mock/products';
import TrustBadge from '@/components/common/TrustBadge';
import BusinessCta from '@/components/common/BusinessCta';
import { seoConfig, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
};

export default function Home() {
  const bestSellers = products.slice(0, 4);
  const newArrivals = products.slice(0, 8);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSlider />
      <section className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Official brand</p>
            <h1 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-4xl">
              {siteConfig.brandName} Men's Office Wear
            </h1>
          </div>
          <BusinessCta />
        </div>
      </section>
      <TrustBadge />
      <CategoryGrid />

      <div className="container mx-auto px-4 pt-2 pb-2 md:pt-4">
        <div className="relative h-20 md:h-28 flex items-center justify-center overflow-hidden border-y border-zinc-200">
           <span className="text-4xl md:text-7xl font-black text-zinc-100 absolute tracking-tight uppercase select-none">
             Best Seller
           </span>
           <h2 className="relative text-sm md:text-xl font-black tracking-[0.2em] text-black uppercase">
             San pham ban chay
           </h2>
        </div>
      </div>

      <div className="animate-fade-in">
        <ProductSection 
          title="SẢN PHẨM BÁN CHẠY" 
          products={bestSellers} 
        />
      </div>

      <div className="animate-fade-in">
        <BannerSection 
          title="HUSSIO OFFICE COLLECTION"
          subtitle="Trang phuc cong so toi gian, de phoi do va de su dung moi ngay."
          image="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2200&auto=format&fit=crop"
          buttonText="XEM TẤT CẢ"
          link="/products"
        />
      </div>

      <div className="animate-fade-in">
        <ProductSection 
          title="SẢN PHẨM MỚI" 
          products={newArrivals} 
        />
      </div>

      <section className="container mx-auto px-4 py-16 border-t border-zinc-200 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-[11px] font-semibold tracking-[0.28em] uppercase opacity-60">LOOKBOOK KHÁCH HÀNG</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square bg-zinc-100 overflow-hidden grayscale hover:grayscale-0 border border-zinc-200 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" 
                alt="feedback"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <TrustBadge />
    </div>
  );
}
