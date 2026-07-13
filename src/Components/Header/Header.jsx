import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kid Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const Dropdownlist = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
];

const Header = ({ handleOrderPopUp }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-xl flex items-center gap-2"
            >
              <FiShoppingBag size={30} />
              ShopQuick
            </a>
          </div>

          {/* Search + Order + DarkMode */}
          <div className="flex items-center gap-4">
            {/* Search Box */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              />

              <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-700 dark:text-white group-hover:text-primary" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopUp}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="hidden group-hover:block duration-200">
                Order
              </span>

              <FaCartShopping className="text-xl cursor-pointer" />
            </button>

            {/* Dark Mode */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 py-3">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-1 py-2">
              Trending Products

              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-slate-800 dark:text-white p-2 shadow-lg">
              <ul>
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;