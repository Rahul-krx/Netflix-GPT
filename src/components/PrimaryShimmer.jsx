import React from "react";

export const PrimaryShimmer = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-700 animate-pulse flex flex-col justify-end p-10 space-y-4">
      {/* Title */}
      <div className="h-12 w-3/5 bg-gray-500 rounded-md"></div>
      {/* Description */}
      <div className="h-6 w-4/5 bg-gray-500 rounded-md"></div>
      <div className="h-6 w-2/3 bg-gray-500 rounded-md"></div>
      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <div className="h-10 w-28 bg-gray-500 rounded-md"></div>
        <div className="h-10 w-28 bg-gray-500 rounded-md"></div>
      </div>
    </div>
  );
};
