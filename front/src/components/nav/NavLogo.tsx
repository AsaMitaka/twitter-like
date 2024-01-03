import { FaTwitter } from 'react-icons/fa';
import { COLORS } from '../../services/color';

const NavLogo = () => {
  return (
    <div className="w-fit my-3 px-3 py-2 cursor-pointer hover:opacity-80">
      <FaTwitter size={36} color={COLORS.BLUE} />
    </div>
  );
};

export default NavLogo;
