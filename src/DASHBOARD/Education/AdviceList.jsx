//Collection of Advice Cards
/*
What it is
A container component that:
1.Holds an array of advice
2.Loops through the array
3.Renders multiple AdviceCards
4.What it contains

Advice data (array)

.map() logic

Layout for multiple cards
*/ 



//array and mapping logic.

import React, { useState } from "react";
import AdviceCard from "./AdviceCard";
import { adviceData } from "./data";

const AdviceList = () => {
  const [category, setCategory] = useState("All");

  // Get unique categories from data dynamically
  const categories = [
    "All",
    ...new Set(adviceData.map((advice) => advice.category)),
  ];

  // Filter advice based on selected category
  const filteredAdvice =
    category === "All"
      ? adviceData
      : adviceData.filter((advice) => advice.category === category);

  return (
    <div className="p-4">
      {/* Category Filter */}
      <div className="flex gap-2 mb-4 justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Advice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAdvice.map((advice, index) => (
          <AdviceCard
            key={index}
            title={advice.title}
            description={advice.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AdviceList;
