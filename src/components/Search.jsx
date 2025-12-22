"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        className="py-1 px-3 border-2 border-white rounded"
        type="text"
        placeholder="Search Food Name"
      />
      <button className="py-1 px-3 ml-2 bg-yellow-500 text-black rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
