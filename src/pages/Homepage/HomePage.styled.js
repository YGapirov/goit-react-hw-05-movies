import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
`;

export const TrendingTitle = styled.h1`
  font-size: 35px;
  margin: 25px;
  text-align: center;
  animation: ${changeColor} 5s linear infinite;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const LoadingMessage = styled.p`
  color: #888;
  font-size: 18px;
  text-align: center;
`;
