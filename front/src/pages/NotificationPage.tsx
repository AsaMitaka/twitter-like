import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../components/Layout';

const NotificationPage = () => {
  return (
    <Layout>
      <>
        <Header returnBack title="Notification" />
        <div className="px-2 py-3 flex flex-col border-b-[1px] border-neutral-300 cursor-pointer hover:opacity-50">
          <Link to={'/tweet/1'}>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">Nickname liked your tweet</h1>
              <p className="text-sm font-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod libero omnis vitae
                neque laborum recusandae explicabo saepe ab similique deserunt ipsa, est consectetur
                porro repudiandae quos dicta numquam aut aliquam.
              </p>
            </div>
          </Link>
        </div>
      </>
    </Layout>
  );
};

export default NotificationPage;
