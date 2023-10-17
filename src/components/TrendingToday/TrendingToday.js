import { useState, useEffect } from 'react';

import { getTrendMovies } from '../../service/movies-service';

import { MoviesList } from 'components/MovieList/MovieList';

export const TrendingToday = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTrendMovies();
        setMoviesData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <MoviesList moviesData={moviesData} />;
};
