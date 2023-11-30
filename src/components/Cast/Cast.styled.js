import { styled } from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const CastItem = styled.li`
  max-width: 150px;
  max-height: 400px;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const StyledCharacter = styled.p`
  font-size: 12px;
  font-style: italic;
  color: gray;
  text-align: center;
`;

export const StyledName = styled.p`
  text-align: center;
`;

export const StyledInfo = styled.div`
  margin-top: 20px;
`;
