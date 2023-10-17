import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';

import { ToastContainer } from 'react-toastify';
import Footer from './Footer/Footer';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const Cast = lazy(() => import('./components/Cast'));
// const Reviews = lazy(() => import('./components/Reviews'));

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
    </div>
  );
};
