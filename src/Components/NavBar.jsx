import { Link, useLocation } from "react-router-dom";

const NavBar = ({ cartItems }) => {
  const location = useLocation();
  return (
    <div className="bg-[#add8e6] sticky top-0 z-10">
      <div className="max-w-[1440px] mx-auto p-4 flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/476/381/non_2x/shop-cart-and-shop-building-cartoon-icon-illustration-building-business-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
            alt="NowMart Icon"
            className="w-12 h-12 rounded-full "
          />
          <p className="text-2xl font-bold text-[#4169e1]">NowMart</p>
        </div>
        <div className="flex justify-self-end gap-4">
          <NavLink label="Home" url="/" isActive={location.pathname === "/"} />
          <div className="relative">
            <NavLink
              label="Cart"
              url="/cart"
              isActive={location.pathname === "/cart"}
            />
            {cartItems.length > 0 && (
              <div className="flex justify-center items-center absolute -top-4 -right-3 px-2 py-0.5 rounded-full bg-blue text-sm text-center font-bold">
                {cartItems.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ url, isActive, label, isDisabled }) => {
  return (
    <Link
      to={url}
      className={
        isActive
          ? "text-lg font-bold text-[#FBFBFB] underline underline-offset-4 cursor-pointer"
          : "text-lg font-normal text-[#FBFBFB] no-underline  cursor-pointer"
      }
    >
      {label}
    </Link>
  );
};

export default NavBar;
