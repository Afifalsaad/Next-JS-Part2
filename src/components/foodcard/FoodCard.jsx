import Link from "next/link";
import React from "react";
import AddToCart from "../butttons/AddToCart";
import Image from "next/image";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Food Image */}
      <div className="relative h-52 w-full">
        {/* <img src={foodImg} alt={title} className="w-full h-full object-cover" /> */}
        <Image
          src={foodImg}
          alt={title}
          width={300}
          height={120}
          className="w-full h-full object-cover"></Image>
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate mb-2">
          {title}
        </h3>
        <p className="text-2xl font-extrabold text-orange-600 mb-5">৳{price}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <AddToCart food={food}></AddToCart>

          <Link
            href={`/foods/${id}`}
            className="w-full btn text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors duration-200 active:scale-95">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
