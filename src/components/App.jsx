import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SharedLayout from "./SharedLayout";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
