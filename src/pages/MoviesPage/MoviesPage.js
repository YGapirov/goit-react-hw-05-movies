import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/SearchBar';
import { StyleErrorMsg, StyledNotFound } from './MoviesPage.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  const query = params.get('query');
  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const fetchedMovies = await searchMovies(query);
        setMovies(fetchedMovies.results);
        if (fetchedMovies.results.length === 0) {
          setError('notFound');
        } else {
          setError(null);
        }

        // Оновлення параметрів URL після пошуку
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [query]);

  const handleSubmit = query => {
    setParams({ query });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />

      {error && error !== 'notFound' && (
        <StyleErrorMsg>
          Oops! Something went wrong. Please try again later.
        </StyleErrorMsg>
      )}
      {movies.length > 0 && <MoviesList films={movies} />}
      {error === 'notFound' && (
        <StyledNotFound>Movie "{query}" not found.</StyledNotFound>
      )}
    </div>
  );
}
