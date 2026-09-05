import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
