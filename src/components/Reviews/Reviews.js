import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getReviews } from '../../service/movies-service';

import { FaUserCircle } from 'react-icons/fa';

import { ErrorText, ReviewWrap, UserName } from './Reviews.styled';

import { ReadMore } from 'components/ReadMore/ReadMore';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const reviewsData = await getReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => (
        <ReviewWrap key={review.id}>
          <UserName>
            <FaUserCircle
              style={{
                fill: '#4169E1',
                marginRight: '10px',
                width: '30px',
                height: '30px',
              }}
            />
            {review.author}
          </UserName>
          <ReadMore>{review.content}</ReadMore>
        </ReviewWrap>
      ))}
    </ul>
  ) : (
    <ErrorText>We don't have any reviews for this movie</ErrorText>
  );
};


