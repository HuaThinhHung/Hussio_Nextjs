export const siteConfig = {
  brandName: "HUSSIO",
  industry: "Men's Fashion (Office Wear)",
  style: "Minimal, modern, masculine",
  description:
    "HUSSIO is a modern menswear brand focused on clean and confident office wear for Vietnamese professionals.",
  address: {
    street: "318/6 Truong Thi Hoa",
    ward: "Tan Thoi Hiep Ward",
    district: "District 12",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    full: "318/6 Truong Thi Hoa, Tan Thoi Hiep Ward, District 12, Ho Chi Minh City, Vietnam",
  },
  social: {
    facebook: "https://www.facebook.com/HUSSIO.vn",
    shopee: "https://shopee.vn/hussio",
    tiktok: "https://www.tiktok.com/@hussio.official",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  trustBadges: [
    "Free shipping",
    "Easy returns",
    "Official store",
    "Secure shopping",
  ],
} as const;

export const seoConfig = {
  home: {
    title: "HUSSIO | Men's Office Wear Vietnam",
    description:
      "HUSSIO delivers modern and minimal office wear for men. Explore trusted brand information, product highlights, and official social channels.",
  },
  about: {
    title: "About HUSSIO | Modern Office Fashion For Men",
    description:
      "Learn who HUSSIO is, our mission, and our clean and confident menswear philosophy for modern office life.",
  },
  contact: {
    title: "Contact HUSSIO | Official Store Information",
    description:
      "Contact HUSSIO through our official address, Facebook, Shopee, and TikTok. Build trust with verified business information.",
  },
  login: {
    title: "Login | HUSSIO",
    description: "Sign in to your HUSSIO account to manage your profile and shopping activity.",
  },
  register: {
    title: "Register | HUSSIO",
    description: "Create a HUSSIO account for faster checkout and order updates.",
  },
} as const;
