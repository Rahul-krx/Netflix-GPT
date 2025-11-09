import MovieCard from "./MovieCard";
import { SecondaryShimmer } from "./SecondaryShimmer";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);

  if (!movies || movies.length === 0) {
    // You can return null or a loader here if you prefer
    return <SecondaryShimmer/>;
  }

  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-1 px-8 text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3 hide-scrollbar gap-4 px-8 py-4">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title || movie.name} overview={movie.overview}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
