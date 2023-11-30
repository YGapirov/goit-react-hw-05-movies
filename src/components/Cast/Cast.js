import { getActorsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import placeholder from 'services/placeholder.png';

import { ErrorMessage, LoadingMessage } from 'pages/Homepage/HomePage.styled';
import {
  CastList,
  CastItem,
  StyledCharacter,
  InfoContainer,
  StyledName,
  StyledInfo,
} from './Cast.styled';

export default function Cast() {
  const params = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchedCast = await getActorsMovies(params.movieId);

        // console.log(fetchedCast);

        setCast(fetchedCast.cast);
      } catch (error) {
        setError(true);
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
      {cast && cast.length > 0 && (
        <InfoContainer>
          <CastList>
            {cast.map(actor => (
              <CastItem key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img
                    style={{ width: '150px', height: '225px' }}
                    src={placeholder}
                    alt={actor.name}
                  />
                )}
                <StyledInfo>
                  <StyledName>{actor.name}</StyledName>
                  <StyledCharacter>
                    Character: {actor.character}
                  </StyledCharacter>
                </StyledInfo>
              </CastItem>
            ))}
          </CastList>
        </InfoContainer>
      )}
    </>
  );
}
