import { FaTwitter } from 'react-icons/fa';
import { COLORS } from '../../services/color';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link to="/">
      <div className="w-fit my-3 px-3 py-2 cursor-pointer hover:opacity-80">
        <FaTwitter size={36} color={COLORS.BLUE} />
      </div>
    </Link>
  );
};

export default NavLogo;
