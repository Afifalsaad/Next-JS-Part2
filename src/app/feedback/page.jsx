import FeedbackCard from "@/components/feedbackCard/FeedbackCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Feedback",
};

const getFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
};

const FeedbacksPage = async () => {
  const feedbacks = await getFeedbacks();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        {feedbacks.length} Feedbacks Found
      </h2>

      <div className="my-10 text-center">
        <Link href="/feedback/addFeedback" className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="my-3 space-y-5">
        {feedbacks.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
