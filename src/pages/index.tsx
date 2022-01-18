import type { NextPage } from 'next';
import CharRandomContainer from 'src/containers/templates/Random';

const Home: NextPage = () => {
  return <CharRandomContainer testing={false}/>;
};

export default Home;
