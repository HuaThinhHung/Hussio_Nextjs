export type MoneyAmount = number;

export interface StoreProduct {
  id: string;
  handle: string;
  title: string;
  productType?: string;
  vendor?: string;
  price: MoneyAmount;
  compareAtPrice?: MoneyAmount;
  image?: string;
  hoverImage?: string;
  colors?: string[];
}

