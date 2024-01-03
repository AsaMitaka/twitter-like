import Header from '../components/Header';
import Tweet from '../components/Tweet';
import Layout from '../components/Layout';

const TweetPage = () => {
  return (
    <Layout>
      <>
        <Header returnBack title="Main" />
        <Tweet />
      </>
    </Layout>
  );
};

export default TweetPage;
