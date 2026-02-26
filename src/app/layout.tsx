import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { CustomCursor } from "@/components/CustomCursor";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display-alt",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MONÉT Beauty Lounge | Luxury Hair, Skin & Bridal in Lahore",
  description:
    "Lahore's premier luxury beauty lounge. Expert bridal makeup, hair treatments, skincare & aesthetics. Book your transformation today.",
  keywords:
    "bridal makeup lahore, luxury salon lahore, hair treatment lahore, hydrafacial lahore",
  openGraph: {
    title: "MONÉT Beauty Lounge | Luxury Hair, Skin & Bridal in Lahore",
    description:
      "Lahore's premier luxury beauty lounge. Expert bridal makeup, hair treatments, skincare & aesthetics. Book your transformation today.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-cream text-obsidian font-body antialiased min-h-screen relative">
        <Navbar />
        <CustomCursor />
        
        <main>
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            {children}
          </div>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#F4F0E6",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              borderRadius: "4px",
              border: "1px solid rgba(244,240,230,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
