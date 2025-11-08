import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { PrimaryShimmer } from "./PrimaryShimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <PrimaryShimmer/>;
  const mainMovie = movies[0] ;
  console.log(mainMovie);

  const { original_title, overview, id, name} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title || name} overview={overview} />
      <VideoBackground  movieId={id}/>
    </div>
  );
};

export default MainContainer;
