
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import  SecondaryContainer  from './SecondaryContainer';
import usePopularMovies from './hooks/usePopularMovies';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';
import usePopularTvSeries from './hooks/usepopularTvSeries';

export const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  usePopularTvSeries();
  useUpcomingMovies();


  return (
    <div>
      <Header/>

      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}
export default Browse;
