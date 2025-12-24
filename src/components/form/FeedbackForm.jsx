"use client";
import React from "react";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    if (data.insertedId) {
      alert("success");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center p-3">
        <textarea
          required
          name="message"
          id=""
          cols="50"
          rows="10"
          className="border border-dashed p-3"></textarea>{" "}
        <hr />
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
