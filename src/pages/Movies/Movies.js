import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { getMoviesByName } from '../../service/movies-service';

import { MainStyles } from '../Movies/Movies.styled';

import { SearchBar } from '../../components/SearchBar/SearchBar';

import { MoviesList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const fromQueryString = searchParams.get('query');

  const getQuery = searchName => {
    if (searchName === '') {
      toast.error('Please enter the name of the movie');
    } else {
      setSearchParams({ query: searchName });
    }
  };

  useEffect(() => {
    if (!fromQueryString) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMoviesByName(fromQueryString);
        const data = response.data.results;

        data.length === response.data.results
          ? toast.error(`Sorry, we can't find any ${fromQueryString}`)
          : setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fromQueryString]);

  return (
    <MainStyles>
      <SearchBar onSubmit={getQuery} />
      {movies && <MoviesList movies={movies} />}
    </MainStyles>
  );
};

export default Movies;
