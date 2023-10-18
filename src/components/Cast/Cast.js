import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import noImage from '../../image/noImage.png';

import { getCast } from '../../service/movies-service';

import {
  CastBox,
  CastWrap,
  Character,
  Name,
  Photo,
  ErrorText,
} from './Cast.styled.js';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchData() {
      try {
        const response = await getCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <ErrorText>
        We don't have any information about casts for this movie
      </ErrorText>
    );
  }

  return (
    <CastWrap>
      {cast.map(castMember => (
        <CastBox key={castMember.id}>
          <Photo
            src={
              castMember.profile_path
                ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                : noImage
            }
            alt={castMember.name}
          />
          <Name>{castMember.name}</Name>
          <Character>Character: {castMember.character}</Character>
        </CastBox>
      ))}
    </CastWrap>
  );
};

export default Cast;
