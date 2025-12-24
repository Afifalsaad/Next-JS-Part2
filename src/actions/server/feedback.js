"use server";

import { connect } from "@/lib/DBConnect";

export const postFeedback = async (message) => {
  const result = await connect("feedbacks").insertOne({
    message,
    date: new Date(),
  });
  return {
    ...result,
    insertedId: result.insertedId.toString(),
  };
};

export const getFeedbacks = async () => {
  const feedbacks = await connect("feedbacks").find().toArray();
  return feedbacks;
};
