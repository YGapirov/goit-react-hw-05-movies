import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getDetailsMovies } from 'services/api';

import { TiArrowBack } from 'react-icons/ti';

import {
  DetailsContainer,
  MovieImage,
  Overview,
  AdditionalInfo,
  MovieInfo,
  AddList,
  StyledNavLink,
  StyledBackLink,
} from './MovieDetailsPage.styled.js';

import { ErrorMessage, LoadingMessage } from '../Homepage/HomePage.styled';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);
  // console.log(location);

  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const fetchedDetails = await getDetailsMovies(params.movieId);
        setMovie(fetchedDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [params.movieId]);

  // Визначення getUserScore всередині області відображення компонентів
  const getUserScore =
    movie && movie.vote_average ? Math.round(movie.vote_average * 10) : 0;

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}

      <StyledBackLink to={backLinkRef.current.state?.from ?? '/'}>
        <TiArrowBack style={{ verticalAlign: 'bottom' }} />
        Go back
      </StyledBackLink>

      {movie && (
        <DetailsContainer>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfo>
            <h1>{movie.title}</h1>
            <p>User score: {getUserScore}%</p>
            <h2>Overview</h2>
            <Overview>{movie.overview}</Overview>
            <h2>Genres</h2>
            {movie.genres.map(
              (
                { name },
                index //перебираємо масив мар жанрів, витягуємо назву жанрів та індекс поточного елемента
              ) => (
                <span key={index}>{name} </span> //відмальовуємо унікальний ключ "індекс" і рендерим нейм жанру
              )
            )}
          </MovieInfo>
        </DetailsContainer>
      )}
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <AddList>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </AddList>
          <AddList>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </AddList>
        </ul>
      </AdditionalInfo>

      <Outlet />
    </>
  );
}
