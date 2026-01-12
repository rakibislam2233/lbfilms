"use client";

import VideoShowcase from "@/components/shared/VideoShowcase";

const VideosPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <VideoShowcase
        title="Cinematic Video Work"
        subtitle="Video Portfolio"
        description="Watch our stunning cinematic films capturing the most precious moments"
        maxItems={Infinity}
        showViewAllButton={false}
        isHomePage={false}
      />
    </main>
  );
};

export default VideosPage;
