import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
    manifest: "/manifest.json",
  title: {
    default: "SOVARA REALTY | Exceptional Properties. Trusted Connections.",
    template: "%s | SOVARA REALTY",
  },
  description:
    "SOVARA REALTY connects selected property opportunities with developers, property owners, independent brokers and buyers across India.",
  keywords: [
    "SOVARA REALTY",
    "real estate India",
    "properties India",
    "property brokers",
    "developers",
    "property owners",
  ],
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
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
