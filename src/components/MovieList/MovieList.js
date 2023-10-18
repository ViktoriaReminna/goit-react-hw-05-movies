import { MoviesListStyles } from '../MovieList/MovieList.styled';

import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStyles>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesListStyles>
  );
};
