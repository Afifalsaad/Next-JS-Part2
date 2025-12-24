import { connect } from "@/lib/DBConnect";
import FeedbackForm from "@/components/form/FeedbackForm";
import React from "react";
import { postFeedback } from "@/actions/server/feedback";

const AddFeedbackPage = () => {

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Add Feedback</h2>

      <div className="my-8">
        <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
      </div>
    </div>
  );
};

export default AddFeedbackPage;
