import Footer from "@/components/pages/common/Footer";
import Navbar from "@/components/pages/common/Navbar";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | LB Films",
    default: "LB Films - Professional Photography & Videography",
  },
  description:
    "Premium photography and videography services in Bangladesh. Wedding, corporate events, portraits, and more.",
  keywords: [
    "photography",
    "videography",
    "wedding photography",
    "Bangladesh",
    "LB Films",
    "event photography",
  ],
  authors: [{ name: "LB Films" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LB Films",
  },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
};

export default MainLayout;
