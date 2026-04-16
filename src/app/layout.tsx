import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import BackToTopButton from "@/components/common/BackToTopButton";
import { seoConfig, siteConfig } from "@/config/site";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import Toast from "@/components/common/Toast";

const roboto = localFont({
  src: [
    {
      path: "../../public/font/Roboto/static/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/Roboto/static/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.home.title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: seoConfig.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${roboto.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
          <BackToTopButton />
        </CartProvider>
      </body>
    </html>
  );
}
