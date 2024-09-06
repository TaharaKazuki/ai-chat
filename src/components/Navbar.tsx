import MobileSidebar from './MobileSidebar';
import UserIcon from './UserIcon';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserIcon />
      </div>
    </div>
  );
};

export default Navbar;
