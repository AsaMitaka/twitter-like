import Button from '../components/ui/Button';
import { BsChat } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa6';
import { IoPeopleSharp } from 'react-icons/io5';
import { COLORS } from '../services/color';

const Sign = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-6/12 bg-sky-500 flex flex-col justify-center items-center">
        <div className="w-[400px]">
          <p className="flex flex-row items-start text-xl font-semibold text-white">
            <CiSearch color={COLORS.WHITE} size={32} style={{ marginRight: '10px' }} />
            Follow your interests.
          </p>
          <br />
          <p className="flex flex-row items-start text-xl font-semibold text-white">
            <IoPeopleSharp color={COLORS.WHITE} size={32} style={{ marginRight: '10px' }} />
            Hear what people are talking about.
          </p>
          <br />
          <p className="flex flex-row items-start text-xl font-semibold text-white">
            <BsChat color={COLORS.WHITE} size={32} style={{ marginRight: '10px' }} />
            Join the conversation
          </p>
        </div>
      </div>
      <div className="basis-6/12 bg-white flex flex-col justify-center items-center">
        <div className="w-[400px] flex flex-col">
          <FaTwitter color={COLORS.BLUE} size={46} />
          <h1 className="text-3xl font-extrabold mt-1">
            See what's happening in the world right now
          </h1>
          <br />
          <h3 className="text-xl font-bold mb-3">Join Twitter today.</h3>
          <Button actionLabel="Sign Up" big outline rounded />
          <br />
          <Button actionLabel="Log in" big rounded />
        </div>
      </div>
    </div>
  );
};

export default Sign;
