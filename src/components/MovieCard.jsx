import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title, overview }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-72 p-3 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Wrapper */}
      <div
        className={`relative rounded-md overflow-hidden shadow-md transition-transform duration-300 ease-in-out ${
          hovered ? "scale-125 z-30" : "scale-100 z-10"
        }`}
        style={{ transformOrigin: "center center" }}
      >
        {/* Background Poster */}
        <img
          className={`w-full h-full object-cover transition-all duration-300 ${
            hovered ? "brightness-75 blur-[1px]" : "brightness-100 blur-0"
          }`}
          src={IMG_CDN_URL + posterPath}
          alt={title || "movie-img"}
        />

        {/* Hover Details (Bottom 80%) */}
        {hovered && (
          <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-b from-transparent via-black/70 to-black text-white p-3 flex flex-col justify-end rounded-b-md transition-all duration-300">
            <div className="mb-3">
              <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                {title || "Untitled"}
              </h3>
              {overview && (
                <p className="text-xs opacity-90 line-clamp-2 mb-2">
                  {overview}
                </p>
              )}
              <div className="flex gap-2">
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs transition">
                  ▶ Play
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded text-xs transition">
                  + My List
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
