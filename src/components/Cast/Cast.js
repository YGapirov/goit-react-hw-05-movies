import { getActorsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorMessage, LoadingMessage } from 'pages/Homepage/HomePage.styled';

export default function Cast() {
  const params = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchedCast = await getActorsMovies(params.movieId);

        console.log(fetchedCast);

        setCast(fetchedCast);
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
        <div>
          <ul>
            {cast.map(actors => (
              <li key={actors.id}>
                <img
                  width="200px"
                  src={
                    actors.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actors.profile_path}`
                      : ''
                  }
                  alt={actors.name}
                />
                <p>{actors.name}</p>
                <p>Character: {actors.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
