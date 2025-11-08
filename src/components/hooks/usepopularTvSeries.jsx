import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addnowPopularTvSeries } from "../../utils/moviesSlice";
import { useEffect } from "react";



const usePopularTvSeries = ()=>{

    const dispatch = useDispatch();

const getNowPopularTvSeries = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS);

  const json =await data.json();
  // console.log(json.results);

dispatch(addnowPopularTvSeries(json.results))

}
useEffect(() =>{
  getNowPopularTvSeries();

}, [])


}
export default usePopularTvSeries;