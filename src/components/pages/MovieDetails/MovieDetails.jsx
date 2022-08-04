import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById, getGenres, getCast } from "components/services/getMoviesAndInfo";

// import Cast from "../Cast";
// import Reviews from "../Reviews";

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState('');

    useEffect(() => {
        // if (!movie) {
        //     console.log('Nooooo')
        //     return
        // }
        (async function getMovie() {
            const movie = await getMovieById(movieId);
            const genres = await getGenres(movie.genre_ids);
            setMovie(movie);
            setGenres(genres);
        })();
    }, [movieId]);

    // const releaseYear = movie.release_date.slice(0, 4);

    const { backdrop_path, title, release_date, vote_average, overview} = movie;
    return (
        <>
            <div className="info">
                <div className="img">
                    <img src={IMG_PATH + backdrop_path} alt={title} />
                </div>
                <div className="main-info">
                    <h2>{title} ({release_date})</h2>
                    <p>Vote - {Math.round(vote_average * 10) / 10}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                </div>
            </div>
            <div className="additional-info">
                <h3>Additional information</h3>
                <ul>
                    <Link to='cast'>Cast</Link>
                    <Link to='reviews'>Reviews</Link>
                </ul>
                <Outlet/>
            </div>

            {/* <Cast />
            <Reviews/> */}
        </>
    );
};

export default MovieDetails;