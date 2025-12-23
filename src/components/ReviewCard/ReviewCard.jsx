import Image from "next/image";
import React from "react";

const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes, date } = reviewData;

  const formattedDate = new Date(date).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-md bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full border-2 border-orange-100 object-cover"
        /> */}
        <Image
          width={48}
          height={48}
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full border-2 border-orange-100 object-cover"></Image>
        <div>
          <h4 className="font-bold text-gray-800">{user}</h4>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={
              i < rating ? "text-yellow-400 text-lg" : "text-gray-200 text-lg"
            }>
            ★
          </span>
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
        {review}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <button className="flex items-center gap-2 group transition-all active:scale-90">
          <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 group-hover:text-red-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-500 group-hover:text-red-500">
            {likes.length} Likes
          </span>
        </button>

        <button className="text-xs text-blue-500 hover:underline">
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
