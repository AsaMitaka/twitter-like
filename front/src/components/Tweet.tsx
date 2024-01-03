import { FC, useState } from 'react';
import { FaBookmark, FaRegBookmark, FaRegComment, FaRetweet } from 'react-icons/fa';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { COLORS } from '../services/color';
import { Link } from 'react-router-dom';
import asa from '../../public/asa.jpg';

interface TweetProps {
  id: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  text?: string;
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
}

const Tweet: FC<TweetProps> = ({ text, id = 1 }) => {
  const [isLiked, setLike] = useState(false);
  const [isBookmarked, setBookmark] = useState(false);
  const Like = isLiked ? IoHeartSharp : IoHeartOutline;
  const Bookmark = isBookmarked ? FaBookmark : FaRegBookmark;

  const handleLike = (e) => {
    e.preventDefault();
    setLike((prev) => !prev);
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    setBookmark((prev) => !prev);
  };

  return (
    <Link to={`/tweet/${id}`}>
      <div className="w-full px-2 py-5 border-b-[1px] border-slate-300 flex flex-row cursor-pointer">
        <Link to={`/profile/1`}>
          <img
            className="w-12 h-12 rounded-full border-[1px] border-black hover:opacity-70"
            src={asa}
            alt="profile pic"
          />
        </Link>
        <div className="w-full flex flex-col">
          <div className="px-4 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam exercitationem, a
            corrupti expedita voluptatibus molestias error quam repellendus voluptatem rerum cum
            quae ipsum aliquid accusamus natus unde nihil accusantium.
          </div>
          <div className="mt-4 px-4 flex items-center justify-between">
            <div className="flex items-center cursor-pointer hover:opacity-50">
              <FaRegComment size={20} className="mr-1" />
              <span className="text-black">1</span>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-50">
              <FaRetweet size={20} className="mr-1" />
              <span className="text-black">1</span>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-50" onClick={handleLike}>
              <Like size={20} className="mr-1" color={isLiked ? 'red' : 'black'} />
              <span className="text-black">1</span>
            </div>
            <div
              className="flex items-center cursor-pointer hover:opacity-50"
              onClick={handleBookmark}>
              <Bookmark size={20} className="mr-1" color={isBookmarked ? COLORS.BLUE : 'black'} />
              <span className="text-black">1</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
