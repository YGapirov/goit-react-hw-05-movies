import { Searchbar } from 'components/Searchbar/SearchBar';
import { useState } from 'react';
// useSearchParams, useEffect;
import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { StyleErrorMsg, StyledNotFound } from './MoviesPage.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // const [params, setParams] = useSearchParams();
  // const movieParam = params.get('movie') ?? '';

  const handleSearch = async query => {
    // setParams({ movie: query });
    try {
      setIsLoading(true);
      const fetchedMovies = await searchMovies(query);
      setMovies(fetchedMovies.results);
      if (fetchedMovies.results.length === 0) {
        setError('notFound');
      } else {
        setError(null);
      }
      setSearchQuery(query);
      // Оновлення параметрів URL після пошуку
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <Loader isLoading={isLoading} />

      {error && error !== 'notFound' && (
        <StyleErrorMsg>
          Oops! Something went wrong. Please try again later.
        </StyleErrorMsg>
      )}
      {movies.length > 0 && <MoviesList films={movies} />}
      {error === 'notFound' && (
        <StyledNotFound>Movie "{searchQuery}" not found.</StyledNotFound>
      )}
    </div>
  );
}
