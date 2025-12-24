import { redirect } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return [{ id: "53046" }, { id: "52817" }, { id: "52955" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );
  const { details = {} } = await res.json();
  return { title: details.title };
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food.title) {
    redirect("/foods");
    // return (
    //   <div className="flex justify-center items-center min-h-screen">
    //     <h2 className="text-2xl font-bold text-gray-600">
    //       Food Details Not Found
    //     </h2>
    //   </div>
    // );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-3xl shadow-xl">
        <div className="relative group">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold shadow-md">
              {food.category}
            </span>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-semibold shadow-md">
              {food.area}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {food.title}
            </h1>
            <p className="text-gray-500">Food ID: #{food.id}</p>
          </div>

          <div className="border-y border-gray-100 py-4 flex items-center justify-between">
            <p className="text-3xl font-bold text-orange-600">৳{food.price}</p>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg">
                <span className="text-xl">▶</span> Watch Video
              </a>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Experience the authentic taste of {food.category} with our premium{" "}
              {food.title}. This {food.area} style dish is prepared with fresh
              ingredients to ensure the best quality for our customers.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-700">
              <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
                🚚 Free Delivery
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
                ⏰ 30 min Prep Time
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
              Order Now
            </button>
            <button className="flex-1 border-2 border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-4 rounded-xl transition-all active:scale-95">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
