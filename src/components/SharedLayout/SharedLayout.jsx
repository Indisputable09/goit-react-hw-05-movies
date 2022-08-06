import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader';
import { Box } from 'components/Box';

const SharedLayout = () => {
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
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
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
