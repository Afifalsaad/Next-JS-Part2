import FoodCard from "@/components/foodcard/FoodCard";
import React, { use } from "react";
import CartItems from "./CartItems";
import Search from "@/components/Search";
import next from "next";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods;
};

export const metadata = {
  title: "All Foods",
  description: "Bet fast food in town",
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length}</span> foods
        found
      </h2>
      <div className="my-4">
        <Search></Search>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 grid my-5 grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-[250px] rounded-xl border-2 p-3">
          <h2 className="font-bold">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
