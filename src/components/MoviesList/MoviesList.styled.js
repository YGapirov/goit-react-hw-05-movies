import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 14px;
`;

export const MovieItem = styled.li`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  max-height: 500px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 400px;
`;

export const MovieTitle = styled.p`
  margin: 15px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
`;
