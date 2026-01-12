"use client";

import VideoShowcaseComponent from "@/components/shared/VideoShowcase";

const VideoShowcase = () => {
  return (
    <VideoShowcaseComponent
      title="Cinematic Video Work"
      subtitle="Video Portfolio"
      description="Watch our stunning cinematic films capturing the most precious moments of life"
      maxItems={6}
      showViewAllButton={true}
      viewAllLink="/videos"
      isHomePage={true}
    />
  );
};

export default VideoShowcase;
