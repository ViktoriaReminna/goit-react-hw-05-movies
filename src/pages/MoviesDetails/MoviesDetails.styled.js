import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainStyles = styled.main`
  min-height: calc(100vh - 64px);
  padding: 20px;
`;

export const BtnGoBack = styled.button`
  width: 100px;
  padding: 8px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: solid 1px #a9a9a9;
  border-radius: 4px;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: inherit;
  color: inherit;

  &:hover,
  &:focus {
    box-shadow: 0 0 13px 3px #a9a9a9;
  }
`;

export const InfoWrap = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 780px) {
    display: flex;
    padding: 20px;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  width: 100%;
  border: solid 1px #a9a9a9;

  @media screen and (min-width: 780px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 779px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

export const Overview = styled.p`
  max-width: 700px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Wrap = styled.div`
  @media screen and (max-width: 779px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    text-align: center;
  }
`;

export const MoreInfoList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InfoLink = styled(Link)`
  padding: 8px 5px;
  text-align: center;
  border: solid 1px #a9a9a9;
  width: 100px;
  display: block;

  &:hover,
  &:focus {
    box-shadow: 0 0 13px 3px #a9a9a9;
  }
`;
