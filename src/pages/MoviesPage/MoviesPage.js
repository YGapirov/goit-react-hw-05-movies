import { Searchbar } from 'components/Searchbar/SearchBar';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async query => {
    try {
      setIsLoading(true);
      const fetchedMovies = await searchMovies(query);
      setMovies(fetchedMovies.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops! Something went wrong. Please try again later.</p>}
      {movies.length > 0 && <MoviesList films={movies} />}
    </div>
  );
}
