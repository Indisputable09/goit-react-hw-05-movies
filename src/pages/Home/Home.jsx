import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingToday } from 'services/getMoviesAndInfo';
import { Box } from 'components/Box';
import { IMG_PATH } from '../MovieDetails/MovieDetails';
import { Container, Img, ImgTitle, List, ListItem, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async function getMovies() {
      const response = await fetchTrendingToday();
      setMovies(response);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Title>Trending today</Title>
        <List>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <ListItem key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  <Img
                    src={
                      poster_path
                        ? IMG_PATH + poster_path
                        : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
                    }
                    alt={title}
                    loading="lazy"
                  />
                  <ImgTitle>{title.toUpperCase()}</ImgTitle>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default Home;
