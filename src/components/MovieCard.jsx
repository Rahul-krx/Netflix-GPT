import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4  ">
        <img className="rounded-md " src={IMG_CDN_URL + posterPath} alt="movie-img" />
       
    </div>
  )
}

export default MovieCard;