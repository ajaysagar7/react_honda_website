import React from 'react';
import Logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const menuList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About us", path: "/about" },
    { id: 3, name: "Bikes", path: "/bikes" },
    { id: 4, name: "Cars", path: "/cars" },
  ];

  return (
    <nav className="absolute z-[20] top-0 left-0 right-0 grid grid-cols-1 md:grid-cols-3 place-items-between py-8 px-4 text-white container">
      {/* LOGO - Hidden on small screens */}
      <div className="hidden md:flex justify-start items-start place-items-start">
        <img src={Logo} alt="Logo" className="h-[50px] invert place-items-start" />
      </div>

      {/* MENU ITEMS - Centered on medium screens */}
      <div className="hidden md:block">
      <div className="flex justify-end md:justify-center md:col-span-1">
        <ul className="flex space-x-3 text-md lg:text-xl lg:space-x-6 text-white lg:font-semibold">
          {menuList.map((data) => (
            <li key={data.id}>
              <a
                className="uppercase px-1 py-1 lg:p-2 rounded-lg border border-transparent hover:outline-none hover:shadow-[0px_0px_20px_8px_#d2e6ff] hover:border-gray-100 hover:text-gray-100 transition duration-200 ease-in-out"
                href={data.path}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* MENU ICONS - Right aligned */}
      <div className="flex justify-end md:col-span-1">
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <div className="bg-white/10 rounded-full p-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in">
            <CiSearch className="font-semibold" />
          </div>
          <div className="bg-white/10 rounded-full p-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in">
            <CiMenuBurger className="font-semibold" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
