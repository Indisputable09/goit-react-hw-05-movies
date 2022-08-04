import { useParams } from "react-router-dom";
import { getMovieById } from "components/services/getTrendingToday";

import Cast from "../Cast";
import Reviews from "../Reviews";

const MovieDetails = () => {

    const { movieId } = useParams();
    const movie = getMovieById(movieId);
    console.log("~ movie", movie)
    return (
        <>
            <p>Here is an ID - {movieId}</p>
            {/* <p>Here is a movie - {movie}</p> */}
            {/* <Cast />
            <Reviews/> */}
        </>
    )
};

export default MovieDetails;