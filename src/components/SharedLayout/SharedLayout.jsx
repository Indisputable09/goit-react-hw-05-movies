import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader';
import { Box } from 'components/Box';

const SharedLayout = () => {
  const location = useLocation();
  console.log('~ location', location);
  const backToMovieSearch = location.state?.from ?? '/movies';
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        px="4"
        bg="white"
        boxShadow="main"
        as="header"
      >
        <Navigation>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to={backToMovieSearch} state={{ from: location }}>
            Movies
          </Link>
        </Navigation>
      </Box>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
