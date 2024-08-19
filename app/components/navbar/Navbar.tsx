// Navbar.tsx
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CartCount from "./CartCount";
import Logo from "./Logo";

import User from "./User";

const Navbar = async () => {
  const currentUser: any = await getCurrentUser()
  return (
  
    <div className="flex md:px-14  py-1 items-center justify-between gap-6 bg-yellow-600/90 p-3">
      <Logo />
      <div
        className="flex py-4 items-center justify-between gap-5">
        <CartCount />
        <User currentUser={currentUser} /></div>

    </div>
  );
};

export default Navbar;
