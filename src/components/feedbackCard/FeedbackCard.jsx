"use client";
import React from "react";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-6/12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {formattedDate}
          </span>
        </div>

        <p className="mb-6 text-gray-700 text-lg leading-relaxed">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={() => onUpdate(_id)}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Update
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="flex-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
