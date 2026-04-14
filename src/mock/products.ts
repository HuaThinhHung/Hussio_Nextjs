export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  category: string;
  handle: string;
  colors: string[];
  discount?: string;
}

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"; // Minimal White Tee
const PLACEHOLDER_HOVER = "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop"; // Minimal Black Tee

export const products: Product[] = [
  {
    id: "1",
    title: "Áo Polo Symbol HUSSIO",
    price: 390000,
    originalPrice: 500000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Áo",
    handle: "ao-polo-symbol",
    colors: ["#ffffff", "#000000", "#cccccc"],
    discount: "30%"
  },
  {
    id: "2",
    title: "Áo Polo Basic Diamond",
    price: 420000,
    originalPrice: 650000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Áo",
    handle: "ao-polo-basic-diamond",
    colors: ["#000000", "#1a2a4c"],
    discount: "35%"
  },
  {
    id: "3",
    title: "Áo Sơ Mi Oxford Premium",
    price: 490000,
    originalPrice: 600000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Áo",
    handle: "ao-so-mi-oxford",
    colors: ["#ffffff", "#1a2a4c"],
    discount: "20%"
  },
  {
    id: "4",
    title: "Quán Shorts Nam Kaki",
    price: 390000,
    originalPrice: 550000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Quần",
    handle: "quan-shorts-nam-kaki",
    colors: ["#f5f5dc", "#000000"],
    discount: "25%"
  },
  {
    id: "5",
    title: "Áo Thun Galor HUSSIO",
    price: 290000,
    originalPrice: 450000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Áo",
    handle: "ao-thun-galor",
    colors: ["#800000", "#000000"],
    discount: "35%"
  },
  {
    id: "6",
    title: "Nón Lưỡi Trai Stallion",
    price: 170000,
    originalPrice: 250000,
    image: PLACEHOLDER_IMAGE,
    hoverImage: PLACEHOLDER_HOVER,
    category: "Phụ kiện",
    handle: "non-luoi-trai-stallion",
    colors: ["#800000"],
    discount: "30%"
  }
];

export const categories = [
  { title: "ÁO", image: PLACEHOLDER_IMAGE, link: "/products?category=ao" },
  { title: "QUẦN", image: PLACEHOLDER_IMAGE, link: "/products?category=quan" },
  { title: "PHỤ KIỆN", image: PLACEHOLDER_IMAGE, link: "/products?category=phu-kien" }
];
