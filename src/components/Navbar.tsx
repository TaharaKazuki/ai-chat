import MobileSidebar from './MobileSidebar';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="flex w-full justify-end">
        {/* <UserIcon /> */}
        UserIcon
      </div>
    </div>
  );
};

export default Navbar;
