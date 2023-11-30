import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovies } from 'services/api';

import { ErrorMessage, LoadingMessage } from 'pages/Homepage/HomePage.styled';
import {
  StyledAuthor,
  ReviewList,
  StyledContent,
  StyledInfoMsg,
} from './Reviews.styled';

export default function Reviews() {
  const params = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchedReviews = await getReviewsMovies(params.movieId);

        // console.log(fetchedReviews);

        setReviews(fetchedReviews.results);
        // console.log(fetchedReviews.reviews);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {reviews && reviews.length > 0 && (
        <div>
          <ReviewList>
            {reviews.map(review => (
              <li key={review.id}>
                <StyledAuthor>{review.author}</StyledAuthor>
                <StyledContent>{review.content}</StyledContent>
              </li>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && (
        <StyledInfoMsg>
          We don't have any reviews for this movie yet.
        </StyledInfoMsg>
      )}
    </>
  );
}
