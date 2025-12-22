import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-3xl shadow-sm">
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl animate-pulse"></div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            {/* Title Skeleton */}
            <div className="h-10 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            {/* ID Skeleton */}
            <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
          </div>

          <div className="border-y border-gray-100 py-6">
            {/* Price Skeleton */}
            <div className="h-10 bg-gray-200 rounded-md w-1/3 animate-pulse"></div>
          </div>

          <div className="space-y-3">
            {/* Description Lines */}
            <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-2/3 animate-pulse"></div>

            {/* Badges Skeleton */}
            <div className="flex gap-4 pt-4">
              <div className="h-6 bg-gray-200 rounded-md w-20 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-md w-20 animate-pulse"></div>
            </div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-14 bg-gray-200 rounded-xl flex-1 animate-pulse"></div>
            <div className="h-14 bg-gray-200 rounded-xl flex-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
