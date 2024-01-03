import { FC, useCallback } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { COLORS } from '../services/color';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  returnBack?: boolean;
  title: string;
}

const Header: FC<HeaderProps> = ({ returnBack, title }) => {
  const router = useNavigate();

  const handleBack = useCallback(() => {
    router(-1);
  }, [router]);

  return (
    <div className="px-4 py-3 border-b-[1px] border-neutral-800 flex items-center">
      {returnBack && (
        <div className="mr-5 hover:opacity-50 cursor-pointer" onClick={handleBack}>
          <IoArrowBack size={24} color={COLORS.BLACK} />
        </div>
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};
export default Header;
