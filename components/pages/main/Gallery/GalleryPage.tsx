"use client";

import GallerySection from "@/components/shared/GallerySection";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <GallerySection
        title="Creative Work"
        subtitle="Portfolio Gallery"
        description="Explore our complete portfolio of photography work across weddings, events, portraits, and more"
        maxItems={Infinity}
        showViewAllButton={false}
        isHomePage={false}
      />
    </main>
  );
}
