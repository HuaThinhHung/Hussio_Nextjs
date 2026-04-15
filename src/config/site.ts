export const siteConfig = {
  brandName: "HUSSIO",
  industry: "Thời trang nam (Công sở)",
  style: "Tối giản, hiện đại, nam tính",
  description:
    "HUSSIO là thương hiệu thời trang nam hiện đại, tập trung vào trang phục công sở tối giản và chỉn chu cho người Việt.",
  address: {
    street: "318/6 Truong Thi Hoa",
    ward: "Phường Tân Thới Hiệp",
    district: "Quận 12",
    city: "TP. Hồ Chí Minh",
    country: "Việt Nam",
    full: "318/6 Trương Thị Hoa, Phường Tân Thới Hiệp, Quận 12, TP. Hồ Chí Minh, Việt Nam",
  },
  social: {
    facebook: "https://www.facebook.com/HUSSIO.vn",
    instagram: "https://www.instagram.com/hussio.official",
    shopee: "https://shopee.vn/hussio",
    tiktok: "https://www.tiktok.com/@hussio.official",
    zalo: "https://zalo.me/yourid",
    threads: "https://www.threads.net/@hussio.official",
    youtube: "https://www.youtube.com/@hussio.official",
  },
  navigation: [
    { name: "NEW-IN", href: "/new-in" },
    { name: "SẢN PHẨM MỚI", href: "/products" },
    { name: "BỘ SƯU TẬP MỚI", href: "/collections" },
    { name: "LIÊN HỆ", href: "/contact" },
    { name: "SALE 50%", href: "/sale" },
  ],
  trustBadges: [
    "Miễn phí vận chuyển",
    "Trả hàng dễ dàng",
    "Cửa hàng chính thức",
    "Mua sắm an toàn",
  ],
} as const;

export const seoConfig = {
  home: {
    title: "HUSSIO | Thời trang công sở nam",
    description:
      "HUSSIO mang đến thời trang công sở nam tối giản và hiện đại. Khám phá thông tin thương hiệu, sản phẩm nổi bật và các kênh chính thức.",
  },
  newIn: {
    title: "Hàng mới về | HUSSIO",
    description:
      "Khám phá các sản phẩm mới nhất từ HUSSIO. Tối giản, hiện đại, dễ mặc mỗi ngày.",
  },
  collections: {
    title: "Bộ sưu tập | HUSSIO",
    description:
      "Khám phá các bộ sưu tập được tuyển chọn cho tủ đồ công sở chỉn chu và tự tin.",
  },
  sale: {
    title: "Khuyến mãi | HUSSIO",
    description:
      "Ưu đãi có thời hạn từ HUSSIO. Mua sắm các sản phẩm chọn lọc với mức giá tốt.",
  },
  about: {
    title: "Về HUSSIO | Thời trang công sở nam hiện đại",
    description:
      "Tìm hiểu về HUSSIO, sứ mệnh và triết lý thời trang tối giản, chỉn chu cho cuộc sống công sở hiện đại.",
  },
  contact: {
    title: "Liên hệ HUSSIO | Thông tin cửa hàng chính thức",
    description:
      "Liên hệ HUSSIO qua địa chỉ, Facebook, Shopee và TikTok chính thức để tăng độ tin cậy và hỗ trợ nhanh chóng.",
  },
  login: {
    title: "Đăng nhập | HUSSIO",
    description: "Đăng nhập tài khoản HUSSIO để quản lý thông tin và hoạt động mua sắm.",
  },
  register: {
    title: "Đăng ký | HUSSIO",
    description: "Tạo tài khoản HUSSIO để mua sắm nhanh hơn và theo dõi đơn hàng.",
  },
} as const;
