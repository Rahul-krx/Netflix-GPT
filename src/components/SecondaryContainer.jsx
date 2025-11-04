import MovieList from './MovieList';
import { useSelector } from 'react-redux';

 const SecondaryContainer = () => {
  
  const movies = useSelector((store) =>store.movies);
  // console.log(movies)
  return (
    <div className='bg-black'>
      <div className='-mt-50 relative z-20'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Most Popular"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Latest Released"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending On Netflix"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
};
export default SecondaryContainer;
