
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';

export const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <p className='absolute mt-24 font-bold'>browse Page!!</p>
      </div>
  )
}
export default Browse;
