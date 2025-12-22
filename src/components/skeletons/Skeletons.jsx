const SkeletonCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden w-full">
      {/* Image Skeleton */}
      <div className="h-52 w-full bg-gray-200 animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>

        {/* Price */}
        <div className="h-8 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>

        {/* Buttons Skeleton */}
        <div className="space-y-3 pt-2">
          <div className="h-10 bg-gray-200 rounded-xl w-full animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-xl w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
