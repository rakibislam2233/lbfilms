"use client";

import GallerySection from "@/components/shared/GallerySection";

const Gallery = () => {
  return (
    <GallerySection
      title="Recent Projects"
      subtitle="Our Portfolio"
      description="Explore our latest photography work capturing beautiful moments across different occasions"
      maxItems={9}
      showViewAllButton={true}
      viewAllLink="/gallery"
      isHomePage={true}
    />
  );
};

export default Gallery;
