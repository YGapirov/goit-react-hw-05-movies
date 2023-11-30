import { Link } from 'react-router-dom';

import { ErrorMessage } from './Homepage/HomePage.styled';

export default function NotFoundPage() {
  return (
    <ErrorMessage>
      Sorry! page not found! Please use this <Link to="/">link</Link> to
      navigate to our home page!
    </ErrorMessage>
  );
}
