import { getActorsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdNoPhotography } from 'react-icons/md';

import { ErrorMessage, LoadingMessage } from 'pages/Homepage/HomePage.styled';
import {
  CastList,
  CastItem,
  StyledCharacter,
  InfoContainer,
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

        console.log(fetchedCast);

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
                    width="150px"
                    height="300px"
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <MdNoPhotography
                    style={{ width: '100px', height: '150px' }}
                  />
                )}
                <p>{actor.name}</p>
                <StyledCharacter>Character: {actor.character}</StyledCharacter>
              </CastItem>
            ))}
          </CastList>
        </InfoContainer>
      )}
    </>
  );
}
