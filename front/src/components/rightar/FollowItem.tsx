import { FC, useState } from 'react';
import Button from '../ui/Button';

interface FollowItemProps {
  isFollow?: boolean;
  name: string;
  username: string;
}

const FollowItem: FC<FollowItemProps> = ({ name, username }) => {
  const [isFoll, setFoll] = useState(true);
  const handleFollow = () => {
    setFoll((prev) => !prev);
  };

  return (
    <div className="px-6 py-3 flex flex-row justify-between items-center cursor-pointer hover:bg-neutral-300 hover:opacity-60">
      <div className="flex flex-row items-center">
        <img
          src="asa.jpg"
          alt="profile pic"
          className="w-11 h-11 mr-3 rounded-full hover:opacity-70"
        />
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold hover:underline hover:text-gray-500">
            {name}
          </h1>
          <h3 className="text-base">@{username}</h3>
        </div>
      </div>
      {isFoll ? (
        <Button actionLabel="Unfollow" onClick={handleFollow} rounded />
      ) : (
        <Button actionLabel="Follow" onClick={handleFollow} outline rounded />
      )}
    </div>
  );
};

export default FollowItem;
