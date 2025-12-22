import SkeletonCard from "@/components/skeletons/Skeletons";
import React from "react";

const loading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <SkeletonCard key={index}></SkeletonCard>
      ))}
    </div>
  );
};

export default loading;
