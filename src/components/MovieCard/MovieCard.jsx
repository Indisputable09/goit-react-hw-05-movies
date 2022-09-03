import { Box } from 'components/Box';
import { DEFAULT_IMG, IMG_PATH } from 'constants/constants';
import { Img } from 'pages/MovieDetails/MovieDetails.styled';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <>
      <Img
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />
      <Box as="h2" textAlign={'center'} fontSize="l" color="orangered" mb="4">
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
    </>
  );
};

export default MovieCard;
