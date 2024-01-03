import { IoMdHome } from 'react-icons/io';
import { FaHashtag, FaRegBell, FaRegUser } from 'react-icons/fa';
import NavItem from './NavItem';
import Button from '../ui/Button';
import NavLogo from './NavLogo';

const Sidebar = () => {
  const navitems = [
    {
      icon: IoMdHome,
      title: 'Home',
      href: '/',
    },
    {
      icon: FaHashtag,
      title: 'Explore',
      href: '/explore',
    },
    {
      icon: FaRegBell,
      title: 'Notifications',
      href: '/notifications',
    },
    {
      icon: FaRegUser,
      title: 'Profile',
      href: '/profile/1',
    },
  ];

  return (
    <div className="w-[275px] w-2/5">
      <div className="sticky top-0 border-neutral-900 flex flex-col px-10">
        <NavLogo />
        {navitems &&
          navitems.map((item, index) => (
            <NavItem
              icon={item.icon}
              key={`${index}_${item.title}`}
              href={item.href}
              title={item.title}
            />
          ))}
        <Button actionLabel="Tweet" big rounded />
      </div>
    </div>
  );
};

export default Sidebar;
