import { Routes, Route, Navigate } from 'react-router-dom';

// import { lazy } from 'react';

import { Layout } from './Layout/Layout';

import { ToastContainer } from 'react-toastify';

import { Reviews } from './Reviews/Reviews';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MoviesDetails = lazy(() =>
//   import('../pages/MoviesDetails/MoviesDetails')
// );
// const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
