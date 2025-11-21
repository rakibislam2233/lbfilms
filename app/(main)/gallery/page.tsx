import type { Metadata } from "next";
import GalleryPage from "@/components/pages/main/Gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our stunning portfolio of wedding photography, corporate events, portraits, and more. Professional photography by LB Films.",
};

export default function Page() {
  return <GalleryPage />;
}
