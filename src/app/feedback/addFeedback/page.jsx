import FeedbackForm from "@/components/form/FeedbackForm";
import React from "react";

const AddFeedbackPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Add Feedback</h2>

      <div className="my-8">
        <FeedbackForm></FeedbackForm>
      </div>
    </div>
  );
};

export default AddFeedbackPage;
