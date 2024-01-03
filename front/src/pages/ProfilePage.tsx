import Header from '../components/Header';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Tweet from '../components/Tweet';
import asa from '../../public/asa.jpg';

const ProfilePage = () => {
  return (
    <Layout>
      <>
        <Header returnBack title="Name" />
        <div className="w-full flex flex-col border-b-[1px] border-neutral-300">
          <div className="flex flex-row justify-between items-center px-3 py-2">
            <img src={asa} alt="" className="w-32 h-32" />
            <div>
              <Button actionLabel="Follow" rounded />
            </div>
          </div>
          <div className="flex flex-col px-3 py-2">
            <h1 className="text-xl font-bold text-black">username</h1>
            <h3 className="text-md font-semibold text-black">nickname</h3>
            <p>
              <span className="mr-4 cursor-pointer hover:underline">31 following</span>
              <span className="cursor-pointer hover:underline">32 followers</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </>
    </Layout>
  );
};

export default ProfilePage;
