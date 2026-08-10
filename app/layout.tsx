import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dryft Cult — Premium Streetwear & Clothing in India",
  description: "Minimalist, high-weight premium streetwear engineered for the unyielding. Heavyweight tees, 500 GSM hoodies, tactical cargo pants and urban fashion silhouettes.",
  keywords: [
    "streetwear India",
    "premium streetwear India",
    "oversized t shirts India",
    "oversized t shirts",
    "streetwear clothing India",
    "premium clothing brand India",
    "urban clothing India",
    "streetwear fashion",
    "men's streetwear India",
    "unisex streetwear India",
    "graphic t shirts India",
    "oversized hoodies India"
  ],
  metadataBase: new URL("https://dryftcult.in"),
  openGraph: {
    title: "Dryft Cult — Built To Dryft. Premium Streetwear India",
    description: "Minimalist fashion editorial storefront. Heavyweight boxy silhouettes and exclusive drop discipline.",
    url: "https://dryftcult.in",
    siteName: "DRYFT CULT",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "DRYFT CULT Drop 001 Editorial Campaign",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryft Cult — Premium Streetwear & Clothing",
    description: "Minimalist, high-weight premium streetwear engineered for the unyielding.",
    images: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
        <OrganizationJsonLd />
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
