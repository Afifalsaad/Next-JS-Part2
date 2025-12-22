import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <LoadingSkeleton key={index}></LoadingSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
