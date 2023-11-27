import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  console.log(films);
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
              style={{ width: '150px', height: '200px' }}
            />
            <p>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
