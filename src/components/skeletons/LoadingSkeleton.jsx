import React from "react";

const LoadingSkeleton = () => {
  return (
    <div>
      <div className="max-w-md bg-white border border-gray-50 rounded-2xl p-6 shadow-sm w-full animate-pulse">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-3 bg-gray-100 rounded w-16"></div>
          </div>
        </div>

        {/* Stars Skeleton */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-100 rounded"></div>
          ))}
        </div>

        {/* Text Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-gray-100 rounded w-full"></div>
          <div className="h-3 bg-gray-100 rounded w-full"></div>
          <div className="h-3 bg-gray-100 rounded w-3/4"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <div className="h-8 bg-gray-100 rounded-full w-20"></div>
          <div className="h-3 bg-gray-50 rounded w-10"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
