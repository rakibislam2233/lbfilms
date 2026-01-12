"use client";

import PackagesSection from "@/components/shared/PackagesSection";

const Packages = () => {
  return (
    <PackagesSection
      title="Choose Your Perfect Package"
      subtitle="Photography Packages"
      description="Professional photography packages tailored for every occasion. From intimate portraits to grand celebrations."
      showViewAllButton={true}
      viewAllLink="/packages"
      isHomePage={true}
    />
  );
};

export default Packages;
