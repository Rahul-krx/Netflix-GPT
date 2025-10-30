
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

export const Browse = () => {

  const dispatch = useDispatch();

const getNowPlayingMovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

  const json =await data.json();
  console.log(json.results);
dispatch(addNowPlayingMovies(json.results))

}
useEffect(() =>{
  getNowPlayingMovies();

}, [])

  return (
    <div>
      <Header/>
      <p className='absolute mt-24 font-bold'>browse Page!!</p>
      </div>
  )
}
export default Browse;
