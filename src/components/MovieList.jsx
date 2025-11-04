import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);

  if (!movies || movies.length === 0) {
    // You can return null or a loader here if you prefer
    return null;
  }

  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-4 px-8 text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3 hide-scrollbar">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
