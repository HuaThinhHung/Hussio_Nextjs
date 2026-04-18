import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import BackToTopButton from "@/components/common/BackToTopButton";
import FloatingChatButton from "@/components/common/FloatingChatButton";
import { seoConfig, siteConfig } from "@/config/site";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import Toast from "@/components/common/Toast";

// Prevent FOUC with FontAwesome
config.autoAddCss = false;

// Be Vietnam Pro - Main font for both body and headings
const beVietnamPro = localFont({
  src: [
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-be-vietnam-pro",
  fallback: ["system-ui", "sans-serif"],
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
      className={`${beVietnamPro.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-be-vietnam-pro">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
          {/* Floating buttons container - FCB trên, B2T dưới */}
          <div className="fixed bottom-6 right-4 z-100 flex flex-col items-end gap-3">
            <FloatingChatButton />
            <BackToTopButton />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
