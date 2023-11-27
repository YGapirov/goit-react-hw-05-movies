import { getTrendingMovies } from '../services/api';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrending() {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page!</p>
      )}
      {isLoading && <p>Loading...</p>}
      {movies.length > 0 && <MoviesList films={movies} />}
    </div>
  );
}
