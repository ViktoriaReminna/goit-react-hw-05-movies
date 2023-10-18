import { Suspense, useEffect, useState } from 'react';

import { BsArrowLeft } from 'react-icons/bs';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import noPhoto from 'image/noImage.png';

import { getMovieById } from '../../service/movies-service';

import {
  Image,
  InfoWrap,
  InfoTitle,
  MainStyles,
  MoreInfoList,
  Overview,
  Text,
  Title,
  Wrap,
  InfoLink,
} from './MoviesDetails.styled';
import { Loader } from '../../components/Loader/Loader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMovieById(movieId);
        const movieInfo = response.data;
        setMovieInfo(movieInfo);
        setGenres(movieInfo.genres);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  if (!movieInfo) {
    return <Loader />;
  }

  const { original_title, release_date, vote_average, poster_path, overview } =
    movieInfo;

  return (
    <MainStyles>
      <Link to={location.state?.from || '/'}>
        <BsArrowLeft style={{ marginRight: '10px' }} />
        Go back
      </Link>
      {movieInfo && (
        <InfoWrap>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noPhoto
            }
            alt={original_title}
          />
          <Wrap>
            <Title>
              {original_title}{' '}
              <span>({new Date(release_date).getFullYear()})</span>
            </Title>
            <Text>
              User Score: <span>{Math.round(vote_average) * 10}%</span>
            </Text>
            <Overview> {overview}</Overview>
            <InfoTitle>Overview</InfoTitle>
            {genres.length !== 0 && <InfoTitle>Genres</InfoTitle>}
            {genres.map(genre => {
              return <span key={genre.id}>{genre.name}</span>;
            })}
          </Wrap>
        </InfoWrap>
      )}
      <MoreInfoList>
        <li>
          <InfoLink to={`cast`}>Cast</InfoLink>
        </li>
        <li>
          <InfoLink to={`reviews`}>Reviews</InfoLink>
        </li>
      </MoreInfoList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainStyles>
  );
};

export default MoviesDetails;
