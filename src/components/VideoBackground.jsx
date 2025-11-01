import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

 const VideoBackground = ({movieId}) => {

  const getMoviesVideo = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/507244/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    console.log(json);

  
   const filteredData = json.results.filter((video) => video.type === "Trailer");
   const trailer = filteredData.length ? filteredData[0] : json.results[0];
   console.log(trailer);
  }

  useEffect(() =>{

    getMoviesVideo();
  }, [])
  return (
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ZkEjle729tI?si=5dCPcLG8-PP28F4A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
  )
}
export default VideoBackground;
