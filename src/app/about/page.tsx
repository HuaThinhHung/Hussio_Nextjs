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
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">VỀ HUSSIO</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
          {siteConfig.brandName} là thương hiệu thời trang nam Việt Nam tập trung vào trang phục công sở. Phong cách tối giản, hiện đại và nam tính, phù hợp cho người đi làm muốn một tủ đồ gọn gàng, dễ phối và dùng mỗi ngày.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Sứ mệnh</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Xây dựng thời trang công sở nam hiện đại với form mặc thực tế, dễ phối đồ và bền bỉ theo thời gian.
            </p>
          </article>
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Tinh thần thương hiệu</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Tự tin, gọn gàng và tối giản. Mọi lựa chọn thiết kế đều hướng đến vẻ ngoài chỉn chu và chuyên nghiệp.
            </p>
          </article>
          <article className="border border-zinc-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Mô hình bán hàng</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Kênh mua sắm chính là sàn TMĐT và mạng xã hội chính thức. Website này giúp tăng nhận diện thương hiệu, độ tin cậy và SEO.
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
