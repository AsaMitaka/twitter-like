import { FC } from 'react';

interface TrendItemProps {
  trending?: string;
  title: string;
  stat?: number;
}

const TrendItem: FC<TrendItemProps> = ({ trending, title, stat }) => {
  return (
    <div className="w-full flex flex-col px-4 py-2 cursor-pointer hover:bg-neutral-300 hover:opacity-60">
      {trending && <div className="text-sm text-gray-500">{trending}</div>}
      <div className="mt-1 text-2xl text-black font-bold">{title}</div>
      {stat && <div className="mt-1 text-sm text-gray-500">{stat} posts</div>}
    </div>
  );
};

export default TrendItem;
