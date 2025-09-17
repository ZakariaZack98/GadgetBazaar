// components/sections/skeletons/featuredProductsSkeleton.tsx

import React from "react";

const FeaturedProductLoadingSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
      {/* Skeleton for each product card */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className="w-full">
          <div className="w-full aspect-[4/3] bg-gray-200 r"></div>
          <div className="space-y-2 py-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductLoadingSkeleton;