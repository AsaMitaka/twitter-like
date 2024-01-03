import { COLORS } from '../services/color';
import Button from './ui/Button';
import Input from './ui/Input';
import { MdGifBox, MdOutlinePhoto } from 'react-icons/md';

const CreateTweet = () => {
  return (
    <div className="w-full px-2 py-5  flex flex-row border-b-[1px] border-black">
      <img
        className="w-12 h-12 rounded-full border-[1px] border-black"
        src="asa.jpg"
        alt="profile pic"
      />
      <div className="w-full flex flex-col">
        <div className="w-full px-4">
          <Input onChange={() => {}} placeholder="What's happening" value="" />
        </div>
        <div className="mt-4 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3 px-1 py-1 cursor-pointer rounded-full hover:bg-gray-200 hover:opacity-65">
              <MdOutlinePhoto size={24} color={COLORS.BLUE} />
            </div>
            <div className="mr-3 px-1 py-1 cursor-pointer rounded-full hover:bg-gray-200 hover:opacity-65">
              <MdGifBox size={24} color={COLORS.BLUE} />
            </div>
          </div>
          <Button actionLabel="Tweet" rounded />
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
