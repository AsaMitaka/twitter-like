import { FC } from 'react';
import Sidebar from './nav/Sidebar';
import RightBar from './rightbar/RightBar';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto relative max-w-screen-xl md:max-screen-sm min-h-screen flex">
      <Sidebar />
      <div className="w-2/5 border-slate-300 border-l-[1px] border-r-[1px]">
        <>{children}</>
      </div>
      <RightBar />
    </div>
  );
};

export default Layout;
