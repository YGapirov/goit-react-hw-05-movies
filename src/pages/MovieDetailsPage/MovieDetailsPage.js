import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsMovies } from 'services/api';

export default function MovieDetailsPage() {
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
    <div>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page!</p>
      )}
      {isLoading && <p>Loading...</p>}
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '150px', height: '200px' }}
          />
          <h1>{movie.title}</h1>
          <p>User score: {getUserScore}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          {movie.genres.map(
            (
              { name },
              index //перебираємо масив мар жанрів, витягуємо назву жанрів та індекс поточного елемента
            ) => (
              <span key={index}>{name} </span> //відмальовуємо унікальний ключ "індекс" і рендерим нейм жанру
            )
          )}
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
