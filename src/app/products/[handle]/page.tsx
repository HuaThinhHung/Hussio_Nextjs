import React from 'react';
import ProductGrid from '@/components/product/ProductGrid';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import TrustBadge from '@/components/common/TrustBadge';
import BusinessCta from '@/components/common/BusinessCta';
import { getProductDetailByHandle, getProducts } from '@/lib/shopify';

type ParamsLike = { handle?: string } | Promise<{ handle?: string }>;

export default async function ProductDetailPage({ params }: { params: ParamsLike }) {
  const resolved = await params;
  const handle = resolved?.handle;

  if (typeof handle !== 'string' || handle.trim().length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-10 md:py-20">
          <p className="text-center text-sm text-zinc-500">Không tìm thấy sản phẩm.</p>
        </div>
      </div>
    );
  }

  const detail = await getProductDetailByHandle(handle);
  const products = await getProducts(30);

  const fallback = products[0] || null;
  const p = detail
    ? {
        id: detail.id,
        title: detail.title,
        images: detail.images,
        price: detail.variants[0]?.price ?? 0,
        compareAtPrice: detail.variants[0]?.compareAtPrice,
      }
    : fallback;
  if (!p) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-10 md:py-20">
          <p className="text-center text-sm text-zinc-500">Không tìm thấy sản phẩm.</p>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((x) => x.id !== p.id).slice(0, 4);
  const galleryImages = detail?.images?.length ? detail.images : [fallback?.image, fallback?.hoverImage].filter(Boolean) as string[];
  const mainImg = galleryImages[0] || '/images/tee.webp';
  const hoverImg = galleryImages[1] || mainImg;
  const title = detail?.title || fallback?.title || 'SẢN PHẨM';

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-20 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ProductGallery 
            images={{
              main: mainImg,
              hover: hoverImg,
            }} 
            title={title} 
          />

          <div className="lg:col-span-5 space-y-8">
            <ProductInfo 
              title={title} 
              variants={detail?.variants || []}
              warranty={detail?.warranty}
            />
            <ProductAccordions descriptionHtml={detail?.descriptionHtml} warranty={detail?.warranty} />
          </div>
        </div>
        <div className="mt-12">
          <TrustBadge />
          <div className="pt-6">
            <BusinessCta />
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-10">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase opacity-80">SẢN PHẨM LIÊN QUAN</h2>
          </div>
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      </div>
    </div>
  );
};
