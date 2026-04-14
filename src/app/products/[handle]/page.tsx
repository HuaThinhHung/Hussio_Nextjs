"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/mock/products';
import ProductGrid from '@/components/product/ProductGrid';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import TrustBadge from '@/components/common/TrustBadge';
import BusinessCta from '@/components/common/BusinessCta';

const ProductDetailPage = () => {
  const { handle } = useParams();
  const product = products.find(p => p.handle === handle) || products[0];
  
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-20 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ProductGallery 
            images={{ main: product.image, hover: product.hoverImage }} 
            title={product.title} 
          />

          <div className="lg:col-span-5 space-y-8">
            <ProductInfo 
              title={product.title} 
              price={product.price} 
              originalPrice={product.originalPrice} 
            />
            <ProductAccordions />
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

export default ProductDetailPage;
