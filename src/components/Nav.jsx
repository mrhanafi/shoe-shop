import React, { useState } from "react";
import NikeLogo from "../assets/images/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* burger btn */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* menu list */}
      <div
        className={`w-full lg:w-auto lg:block ${!isMobileMenuShown && "hidden"}`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-500 py-2 px-3 cursor-pointer ${i === 0 ? "bg-blue-500 text-white rounded-md lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* cart btn */}
      <div className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
