import { COLORS } from '../services/color';
import Button from './ui/Button';
import { MdGifBox, MdOutlinePhoto } from 'react-icons/md';
import Textarea from './ui/Textarea';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateTweet = () => {
  const [text, setText] = useState('');

  return (
    <div className="w-full px-2 py-5  flex flex-row border-b-[1px] border-black">
      <Link to={'/profile/1'}>
        <img
          className="w-12 h-12 rounded-full border-[1px] border-black hover:opacity-70"
          src="asa.jpg"
          alt="profile pic"
        />
      </Link>
      <div className="w-full flex flex-col">
        <div className="w-full px-4">
          <Textarea
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening "
            value={text}
          />
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
