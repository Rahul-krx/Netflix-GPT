import MovieList from './MovieList';
import { useSelector } from 'react-redux';

 const SecondaryContainer = () => {
  
  const movies = useSelector((store) =>store.movies);
  // console.log(movies)
  return (
    <div className='bg-black'>
      <div className='-mt-50 relative z-20'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Most Popular"} movies={movies.nowPopularMovies}/>
    <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies}/>
    <MovieList title={"Popular TV Series"} movies={movies.nowPopularTvSeries}/>
    <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies}/>
    </div>
    </div>
  )
};
export default SecondaryContainer;
