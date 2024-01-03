import CreateTweet from '../components/CreateTweet';
import Header from '../components/Header';
import Tweet from '../components/Tweet';
import RightBar from '../components/rightar/RightBar';
import Sidebar from '../components/nav/Sidebar';
const Main = () => {
  return (
    <div className="mx-auto max-w-screen-2xl md:max-screen-sm h-screen flex">
      <Sidebar />
      <div className="w-3/5">
        <Header title="Main" />
        <CreateTweet />
        <Tweet />
      </div>
      <RightBar />
    </div>
  );
};

export default Main;
