import { TrendingToday } from 'components/TrendingToday/TrendingToday.js';

import { MainStyles } from './Home.styled.js';

const Home = () => {
  return (
    <MainStyles>
      <h1>Trending Today</h1>
      <TrendingToday />
    </MainStyles>
  );
};

export default Home;
