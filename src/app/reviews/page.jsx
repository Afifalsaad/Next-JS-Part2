import React from "react";
import ReviewsPage from "./ReviewsPage";

export const metadata = {
  // title: "All Reviews",
  title: {
    absolute: "Satisfied Customer",
  },
  description: "Bet fast food in town",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;
