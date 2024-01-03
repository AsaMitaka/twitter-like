import Header from '../components/Header';
import Layout from '../components/Layout';
import Input from '../components/ui/Input';

const ExplorePage = () => {
  return (
    <Layout>
      <>
        <Header returnBack title="Search" />
        <div className="px-2 py-3">
          <Input onChange={() => {}} placeholder="Seach" value="" />
        </div>
      </>
    </Layout>
  );
};

export default ExplorePage;
