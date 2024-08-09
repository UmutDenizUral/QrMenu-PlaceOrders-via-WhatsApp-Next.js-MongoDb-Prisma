// Navbar.tsx
import CartCount from "./CartCount";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <div className="flex py-4 items-center justify-between gap-6 bg-gray-800 p-3">
      <Logo />
      <Search />
      <div 
      className="flex py-4 items-center justify-between gap-5">  
        <CartCount />
        <User /></div>

    </div>
  );
};

export default Navbar;
