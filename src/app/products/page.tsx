import ProductListingClient from './ProductListingClient';
import { getProducts } from '@/lib/shopify';

export default async function ProductListingPage() {
  const products = await getProducts(100);
  return <ProductListingClient products={products} />;
}
