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

// Montserrat - Heading font (Bold, SemiBold, Medium, Regular)
const montserrat = localFont({
  src: [
    {
      path: "../../public/font/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Montserrat/static/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Montserrat/static/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Montserrat/static/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  fallback: ["system-ui", "sans-serif"],
});

// Be Vietnam Pro - Body font (Light, Regular, Medium, SemiBold, Bold)
const beVietnamPro = localFont({
  src: [
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
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
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-body",
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
      className={`${montserrat.variable} ${beVietnamPro.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
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
