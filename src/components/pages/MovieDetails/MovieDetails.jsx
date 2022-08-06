import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById, getGenres } from "components/services/getMoviesAndInfo";
import Loader from "components/Loader";

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";


    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState('');
    useEffect(() => {
        async function getMovie() {
            try {
                const movie = await getMovieById(movieId);
                const genres = await getGenres(movie.genre_ids);
                setMovie(movie);
                setGenres(genres);
            } catch (error) {
                console.log(error)
            }
        };
        getMovie()
    }, [movieId]);

    const { backdrop_path, title, release_date, vote_average, overview } = movie;
    const MOVIE_AVAILABLE = Object.keys(movie).length > 0;
    
    return (
        <>
            {MOVIE_AVAILABLE ? <>
                <Link to={backLinkHref}>Back to movies</Link>
                <div className="info">
                    <div className="img">
                        <img src={IMG_PATH + backdrop_path} alt={title} />
                    </div>
                    <div className="main-info">
                        <h2>{title} ({release_date.slice(0, 4)})</h2>
                        <p>Vote - {Math.round(vote_average * 10) / 10}</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genres.length === 0 ? 'No genres for this movie' : genres}</p>
                    </div>
                </div>
                <div className="additional-info">
                    <h3>Additional information</h3>
                    <ul>
                        <Link to='cast'>Cast</Link>
                        <Link to='reviews'>Reviews</Link>
                    </ul>
                    <Outlet />
                </div>
            </> : <>
                <Loader/>
                <b>Sorry, there are no details for the movie.</b>
                <Link to='/'>Go home</Link></>}
        </>
    );
};

export default MovieDetails;