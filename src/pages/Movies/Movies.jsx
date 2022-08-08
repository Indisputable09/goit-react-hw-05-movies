import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/getMoviesAndInfo';
import { Button, Form, Input } from './Movies.styled';
import { Container, Img, ImgTitle, List, ListItem } from '../Home/Home.styled';
import { IMG_PATH } from '../MovieDetails/MovieDetails';
import { Box } from 'components/Box';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieTitleQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieTitleQuery !== '') {
      getMovies(movieTitleQuery);
    }
  }, [movieTitleQuery]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getMovies(searchQuery);
  }, [searchQuery]);

  async function getMovies(query) {
    const response = await getMovieBySearch(query);
    setMovies(response);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.query.value;
    setSearchQuery(inputValue);
    updateQueryString(inputValue);
    e.target.reset();
  };

  return (
    <Box>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="query" placeholder="Movie search" />
          <Button type="submit">Search</Button>
        </Form>
        {movies.length !== 0 && (
          <List>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <ListItem key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
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
        )}
      </Container>
    </Box>
  );
};

export default Movies;
