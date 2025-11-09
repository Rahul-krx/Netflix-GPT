import React from "react";

export const SecondaryShimmer = ({ items = 8, cardWidth = 220, cardHeight = 280 }) => {
  return (
    <div className="px-10 mb-10">
      <div className="h-6 mt-24 w-1/4 bg-gray-500 rounded-md mb-4 animate-pulse"></div>
      <div className="flex overflow-x-scroll space-x-4">
        {Array(items)
          .fill("")
          .map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-lg bg-gray-700 animate-pulse"
              style={{ width: cardWidth, height: cardHeight }}
            ></div>
          ))}
      </div>
    </div>
  );
};
