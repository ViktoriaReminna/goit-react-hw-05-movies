import { AiOutlineLike } from 'react-icons/ai';

import { NavLink, useLocation } from 'react-router-dom';

import { MoviesListStyles } from '../MovieList/MovieList.styled';

import noPhoto from '../../image/noImage.png';

import { Image, InfoWrap, RatingWrap, Title } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, poster_path, release_date } = movie;
  return (
    <MoviesListStyles key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <RatingWrap>
          <AiOutlineLike /> <span>{Math.round(vote_average) * 10}%</span>
        </RatingWrap>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPhoto
          }
          alt={title}
        />
        <InfoWrap>
          <Title>{title}</Title>
          <p>
            Release date: <span>{release_date}</span>
          </p>
        </InfoWrap>
      </NavLink>
    </MoviesListStyles>
  );
};
