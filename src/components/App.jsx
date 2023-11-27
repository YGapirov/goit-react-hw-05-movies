import { Routes, Route, NavLink } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <GlobalStyle />
    </div>
  );
};
