export interface StoreCartLine {
  id: string;
  quantity: number;
  merchandiseId: string;
  title: string;
  image?: string;
  price: number;
  compareAtPrice?: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

export interface StoreCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotalAmount: number;
  currencyCode: string;
  lines: StoreCartLine[];
}

