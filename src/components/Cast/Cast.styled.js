import { styled } from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  max-width: 150px;
  max-height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;

export const InfoContainer = styled.div`
  padding: 14px;
`;

export const StyledCharacter = styled.p`
  font-size: 12px;
  font-style: italic;
  color: gray;
`;
