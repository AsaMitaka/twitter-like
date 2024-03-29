import Input from '../ui/Input';
import FollowItem from './FollowItem';

const RightBar = () => {
  const peopleItems = [
    {
      isFollow: true,
      name: 'aqxWWIII',
      username: 'aqwiii',
    },
    {
      isFollow: false,
      name: 'Olga Honcharenko',
      username: 'olga_pp98',
    },
    {
      isFollow: false,
      name: 'laugh&pain',
      username: 'laugh_in_pain',
    },
  ];

  return (
    <div className="lg:w-2/5 lg:w-[350px]">
      <div className="sticky top-0 hidden lg:flex border-neutral-800 flex flex-col px-4">
        <div className="mt-3">
          <Input onChange={() => {}} placeholder="Search" value="" isRounded />
        </div>
        <div className="bg-neutral-200 rounded-lg  mt-3">
          <h1 className="text-xl font-bold px-4 py-2">Who to follow</h1>
          {peopleItems &&
            peopleItems.map((item, index) => (
              <FollowItem
                key={`${index}__${item.name}`}
                isFollow={item.isFollow}
                name={item.name}
                username={item.username}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;

// import TrendItem from './TrendItem';
// const trendItems = [
//   {
//     trending: 'Trending in Ukraine',
//     title: 'Donbass',
//     stat: 20000,
//   },
//   {
//     trending: 'Trending in Ukraine',
//     title: 'Kyiv',
//   },
//   {
//     title: 'Evie',
//     stat: 12000,
//   },
// ];
/* <div className="bg-neutral-200 rounded-lg mt-3">
        <h1 className="text-2xl font-bold px-4 py-2 ">Trends for you</h1>
        {trendItems &&
          trendItems.map((item, index) => (
            <TrendItem
              key={`${index}__${item.title}`}
              trending={item.trending}
              title={item.title}
              stat={item.stat}
            />
          ))}
      </div> */
