import styled from 'styled-components';

export const MovieItems = styled.li`
  position: relative;
  border: solid 1px #560206;
  border-radius: 6px;
  overflow: hidden;
  max-width: 300px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 15px 2px #00ced1;
    transform: scale(1.05);
  }
`;

export const RatingWrap = styled.div`
  position: inherit;

  text-align: center;
  width: 40px;
  height: 40px;
`;

export const Image = styled.img`
  height: 400px;
  width: 300px;
  margin-bottom: 15px;
`;

export const InfoWrap = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  min-height: 50px;
  margin-bottom: 20px;
`;
