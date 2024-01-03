import { FC, useState } from 'react';
import { SlUserFollow, SlUserFollowing } from 'react-icons/sl';
import { COLORS } from '../../services/color';
import { Link } from 'react-router-dom';
import asa from '../../../public/asa.jpg';

interface FollowItemProps {
  isFollow?: boolean;
  name: string;
  username: string;
}

const FollowItem: FC<FollowItemProps> = ({ name, username }) => {
  const [isFoll, setFoll] = useState(true);
  const handleFollow = (e) => {
    e.preventDefault();

    setFoll((prev) => !prev);
  };

  const Follow = isFoll ? SlUserFollow : SlUserFollowing;

  return (
    <Link to={`/profile/${username}`}>
      <div className="px-4 py-3 flex flex-row justify-between items-center cursor-pointer hover:bg-neutral-300">
        <div className="flex flex-row items-center">
          <img
            src={asa}
            alt="profile pic"
            className="w-11 h-11 mr-2 rounded-full hover:opacity-70"
          />
          <div className="flex flex-col">
            <h1 className="text-xl text-black font-bold hover:underline hover:text-gray-500">
              {name}
            </h1>
            <h3 className="text-base">@{username}</h3>
          </div>
        </div>
        <div className="p-2 rounded-full hover:opacity-50" onClick={handleFollow}>
          <Follow size={22} color={COLORS.BLUE} />
        </div>
      </div>
    </Link>
  );
};

export default FollowItem;
