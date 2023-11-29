import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 8px;
`;

export const MovieInfo = styled.div`
  padding-left: 20px;
`;

export const Overview = styled.p`
  font-style: italic;
`;

export const AdditionalInfo = styled.div`
  margin-top: 30px;

  gap: 20px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AddList = styled.li`
  padding-top: 8px;
`;
