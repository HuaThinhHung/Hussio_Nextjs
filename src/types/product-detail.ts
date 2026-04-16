export type MoneyAmount = number;

export type ProductOptionName = 'Color' | 'Size' | string;

export interface StoreProductVariant {
  id: string;
  title: string;
  sku?: string;
  availableForSale: boolean;
  price: MoneyAmount;
  compareAtPrice?: MoneyAmount;
  quantityAvailable?: number;
  selectedOptions: Array<{ name: ProductOptionName; value: string }>;
}

export interface StoreProductDetail {
  id: string;
  handle: string;
  title: string;
  vendor?: string;
  productType?: string;
  description?: string;
  descriptionHtml?: string;
  images: string[];
  options: Array<{ name: ProductOptionName; values: string[] }>;
  variants: StoreProductVariant[];
  warranty?: string;
}

