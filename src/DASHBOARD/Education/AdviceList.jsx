//Collection of Advice Cards
/*
What it is

A container component that:

Holds an array of advice

Loops through the array

Renders multiple AdviceCards

What it contains

Advice data (array)

.map() logic

Layout for multiple cards
*/ 

/*import AdviceCard from "./AdviceCard";

const AdviceList = () => {
  const adviceTips = [
    "Drink enough water daily.",
    "Reduce salt intake.",
    "Take medication at the same time every day.",
  ];

  return (
    <div className="advice-list">
      {adviceTips.map((tip, index) => (
        <AdviceCard key={index} advice={tip} />
      ))}
    </div>
  );
};

export default AdviceList;
 */

//array and mapping logic.

import React, { useState } from "react";
import AdviceCard from "./AdviceCard";
import { adviceData } from "./Advice/data";

const AdviceList = () => {
  const [category, setCategory] = useState("All");

  const filteredAdvice =
    category === "All"
      ? adviceData
      : adviceData.filter((advice) => advice.category === category);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex gap-2 mb-4 justify-center">
        {["All", "Diabetes", "Hypertension"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Advice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
