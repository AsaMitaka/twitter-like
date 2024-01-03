import CreateTweet from '../components/CreateTweet';
import Header from '../components/Header';
import Tweet from '../components/Tweet';
import Layout from '../components/Layout';

const MainPage = () => {
  return (
    <Layout>
      <>
        <Header title="Main" />
        <CreateTweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </>
    </Layout>
  );
};

export default MainPage;
