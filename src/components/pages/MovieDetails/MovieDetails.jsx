import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/getMoviesAndInfo';
import Loader from 'components/Loader';
import { AdditionalLink, BackLink, Img } from './MovieDetails.styled';
import { Box } from 'components/Box';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const Status = {
    idle: 'IDLE',
    pending: 'PENDING',
    resolved: 'RESOLVED',
    rejected: 'REJECTED',
  };
  const { idle, pending, resolved, rejected } = Status;

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState(idle);

  useEffect(() => {
    (async function getMovie() {
      try {
        setStatus(pending);
        const movieDetails = await getMovieById(movieId);
        // const genres = movieDetails.genres.map(item => item.name);
        const genres = movieDetails.genres;
        const MOVIE_DETAILS_AVAILABLE = Object.keys(movieDetails).length !== 0;
        if (!MOVIE_DETAILS_AVAILABLE) {
          setStatus(rejected);
          return;
        }
        setGenres(genres);
        setMovie(movieDetails);
        setStatus(resolved);
      } catch (error) {
        console.log(error);
        setStatus(rejected);
      }
    })();
  }, [movie.genre_ids, movieId, pending, rejected, resolved]);

  const { backdrop_path, title, release_date, vote_average, overview } = movie;

  return (
    <>
      {status === 'RESOLVED' && (
        <Box>
          <Box as="div" p="5">
            <BackLink to={backLinkHref}>Back to movies</BackLink>
            <Img src={IMG_PATH + backdrop_path} alt={title} />
            <Box
              as="h2"
              textAlign={'center'}
              fontSize="l"
              color="orangered"
              mb="4"
            >
              {title} ({release_date.slice(0, 4)})
            </Box>
            <Box as="p" mb="4">
              Vote - {Math.round(vote_average * 10) / 10}
            </Box>
            <Box as="h3" mb="3">
              Overview
            </Box>
            <Box as="p" mb="4">
              {overview}
            </Box>
            <Box as="h3" mb="3">
              Genres
            </Box>
            <Box as="ul" mb="4" color="orangered">
              {genres.length === 0 ? (
                <li>No genres for this movie</li>
              ) : (
                genres.map(({ name }, indx) => {
                  return (
                    <Box as="li" mb="3" key={indx}>
                      {name}
                    </Box>
                  );
                })
              )}
            </Box>
            <div>
              <Box
                as="h2"
                textAlign={'center'}
                fontSize="l"
                color="orangered"
                mb="4"
              >
                Additional information
              </Box>
              <Box as="ul" display="flex" mb="4">
                <li>
                  <AdditionalLink to="cast">Cast</AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to="reviews">Reviews</AdditionalLink>
                </li>
              </Box>
              <Outlet />
            </div>
          </Box>
        </Box>
      )}
      {status === 'PENDING' && <Loader />}
      {status === 'REJECTED' && (
        <Box as="div" p="4" display="flex">
          <BackLink to="/">Go home</BackLink>
          <Box
            as="b"
            textAlign="center"
            mx="auto"
            mt="5"
            fontSize="l"
            color="orangered"
          >
            Sorry, there are no details for the movie.
          </Box>
        </Box>
      )}
    </>
  );
};

export default MovieDetails;
