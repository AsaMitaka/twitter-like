import { FC } from 'react';
import { IconType } from 'react-icons';

interface NavItemProps {
  icon: IconType;
  href?: string;
  onClick?: () => void;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ icon: Icon, title }) => {
  return (
    <div className="w-full mb-2 px-4 py-3 rounded-md hover:bg-gray-300 cursor-pointer flex flex-row items-center">
      <div className="h-14 w-14 p-4 hover:bg-opacity-50 cursor-pointer lg:hidden">
        <Icon size={32} color="black" />
      </div>
      <div className="hidden lg:flex  flex-row items-center">
        <div className="mr-2">
          <Icon size={24} color="black" />
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default NavItem;
