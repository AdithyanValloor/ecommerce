import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  User2,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showHam, setShowHam] = useState(false);
  const [showHamCategory, setShowHamCategory] = useState(false);

  const handleSearchBox = () => setShowSearch((prev) => !prev);
  const handleHam = () => setShowHam((prev) => !prev);

  return (
    <header>
      <nav className="bg-white h-20 shadow-md flex items-center lg:justify-between justify-center">
        {/* HAmburger menu */}
        <button
          className="lg:hidden md:block p-2 absolute left-0 mx-3"
          onClick={handleHam}
        >
          <Menu strokeWidth={1} />
        </button>
        <div
          className={`lg:hidden bg-white shadow-md w-full md:w-1/2 h-full fixed top-0 left-0 transition-transform duration-500 z-50 
                ${
                  showHam
                    ? "translate-x-0"
                    : "-translate-x-full pointer-events-none"
                }`}
        >
          <button
            onClick={handleHam}
            className="p-2 rounded-full m-3 absolute scale-125 transition-all duration-500 hover:rotate-180"
          >
            <X strokeWidth={1} />
          </button>
          <ul className="flex flex-col text-lg font-light h-full mx-5 my-16">
            {["Home", "All Products", "Categories"].map((item, index) => (
              <li
                key={index}
                className={`flex items-center border-t border-gray-400 first:border-t-0 ${
                  item === "Categories" && "relative"
                }`}
              >
                <NavLink
                  to={
                    item === "Categories" || item === "Home"
                      ? "#"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="block p-2 w-full"
                  {...(item === "Categories"
                    ? {
                        onClick: (e) => {
                          e.preventDefault();
                          setShowHamCategory((prev) => !prev);
                        },
                      }
                    : {})}
                >
                  <span className="flex items-center hover:text-emerald-500 transition-colors duration-200">
                    {item}
                    {item === "Categories" &&
                      (showHamCategory ? (
                        <Minus
                          strokeWidth={1}
                          className={`absolute right-0 transition-all duration-300`}
                        />
                      ) : (
                        <Plus
                          strokeWidth={1}
                          className={`absolute right-0 transition-all duration-300`}
                        />
                      ))}
                  </span>
                </NavLink>
              </li>
            ))}
            <li>
              <div
                className={`border-t border-gray-400 first:border-t-0 bg-gray-200 w-full overflow-hidden transition-all duration-300 ${
                  showHamCategory ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul>
                  {["Electronics", "Kids", "Men", "Women"].map((category) => (
                    <li
                      key={category}
                      className="hover:text-emerald-500 hover:bg-gray-100 p-1 px-2 transition-all duration-200 cursor-pointer"
                    >
                      <NavLink
                        to={`/category/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className={'w-full block'}
                      >
                        {category}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="flex items-center">
              <NavLink
                className={
                  "border-t border-gray-400 w-full flex gap-2 p-2 transition-all duration-300 hover:text-emerald-500"
                }
                to={`/wish-list`}
              >
                <Heart strokeWidth={1} />
                Wish list
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  "border-t border-gray-400 w-full flex gap-2 p-2 transition-all duration-300 hover:text-emerald-500"
                }
                to={`/cart`}
              >
                <ShoppingCart strokeWidth={1} />
                Cart
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  "border-t border-gray-400 w-full flex gap-2 p-2 transition-all duration-300 hover:text-emerald-500"
                }
                to={`/user-profile`}
              >
                <User2 strokeWidth={1} />
                Username
              </NavLink>
            </li>
            <li
              onClick={handleSearchBox}
              className="flex gap-2 items-center border-t border-gray-400  cursor-pointer p-2 transition-all duration-300 hover:text-emerald-500"
            >
              <Search strokeWidth={1} />
              Search
            </li>
          </ul>
        </div>
        {/* LOGO / TItle */}
        <NavLink to={"/"}>
          <h1 className="font-silkscreen text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-6">
            Virtumart
          </h1>
        </NavLink>

        {/* NavLinks */}
        <ul className="hidden lg:flex gap-10 text-lg font-light h-full">
          {["Home", "All Products", "Categories"].map((item, index) => (
            <li
              key={index}
              className={`h-full flex items-center ${
                item === "Categories" && "relative"
              }`}
            >
              <NavLink
                to={
                  item === "Categories" || item === "Home"
                    ? "#"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="block h-full"
                {...(item === "Categories"
                  ? {
                      onMouseEnter: () => setShowCategoryDropDown(true),
                      onMouseLeave: () => setShowCategoryDropDown(false),
                    }
                  : {})}
              >
                <span className="h-full flex items-center hover:text-emerald-500 transition-colors duration-200">
                  {item}
                  {item === "Categories" && (
                    <ChevronDown
                      strokeWidth={1}
                      className={`${
                        showCategoryDropDown ? "rotate-180" : "rotate-0"
                      } transition-all duration-300`}
                    />
                  )}
                </span>
              </NavLink>
              {item === "Categories" && (
                <div
                  className={`bg-gray-50 shadow-md absolute top-full transition-all duration-300 py-2 px-9 z-20
                                ${
                                  showCategoryDropDown
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-1 pointer-events-none"
                                }`}
                  onMouseEnter={() => setShowCategoryDropDown(true)}
                  onMouseLeave={() => setShowCategoryDropDown(false)}
                >
                  <ul>
                    {["Electronics", "Kids", "Men", "Women"].map((category) => (
                      <li
                        key={category}
                        className="hover:text-emerald-500 hover:bg-gray-100 p-1 pr-8 transition-all duration-200 "
                      >
                        <NavLink
                          to={`/category/${category
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {category}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Nav Buttons */}
        <div className="mx-3 absolute flex lg:static right-0 ">
          <button
            onClick={handleSearchBox}
            className="p-2 transition-all duration-300 hover:text-emerald-500 hover:scale-110"
          >
            <Search strokeWidth={1} />
          </button>
          <NavLink
            to={"/cart"}
            className=" p-2 transition-all duration-300 hover:text-emerald-500 hover:scale-110 relative"
          >
            <ShoppingCart strokeWidth={1} />
            <p className="bg-black text-white text-[8px] w-4 h-4 shadow-lg p-1 rounded-full absolute top-2 right-0 flex items-center justify-center">
              99+
            </p>
          </NavLink>
          <NavLink
            to={"/wish-list"}
            className="hidden lg:inline-block p-2 transition-all duration-300 hover:text-emerald-500 relative hover:scale-110"
          >
            <Heart strokeWidth={1} />
            <p className="bg-black text-white text-[8px] w-4 h-4 shadow-lg p-1 rounded-full absolute top-2 right-0 flex items-center justify-center">
              99+
            </p>
          </NavLink>
          
          <NavLink
            to={"/wish-list"}
            className="hidden lg:inline-block p-2 transition-all duration-300 hover:text-emerald-500 relative hover:scale-110"
          >
            <Bell strokeWidth={1} />
            <p className="bg-black text-white text-[8px] w-4 h-4 shadow-lg p-1 rounded-full absolute top-2 right-0 flex items-center justify-center">
              99+
            </p>
          </NavLink>
          <NavLink
            to={"/user-profile"}
            className="hidden lg:inline-block p-2 transition-all duration-300 hover:text-emerald-500 hover:scale-110"
          >
            <User2 strokeWidth={1} />
          </NavLink>
        </div>

        {/* Background Dark */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
            showSearch || showHam
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            if (showSearch) setShowSearch(false);
            if (showHam) setShowHam(false);
          }}
        />

        {/* Search Slide */}
        <div
          className={`bg-white shadow-md w-full md:w-1/2 lg:w-1/4 h-full fixed top-0 right-0 transition-transform duration-500 z-50 
                ${
                  showSearch
                    ? "translate-x-0"
                    : "translate-x-full pointer-events-none"
                }`}
        >
          <button
            onClick={handleSearchBox}
            className="p-2 rounded-full m-3 absolute right-0 scale-125 transition-all duration-500 hover:rotate-180"
          >
            <X strokeWidth={1} />
          </button>

          <p className="b w-full p-5 text-lg border border-b-gray-400">
            SEARCH OUR SITE
          </p>
          <div className="w-full p-5 flex flex-col gap-5">
            <div className="relative flex items-center">
              <ChevronDown
                strokeWidth={1}
                className="absolute right-3 pointer-events-none"
              />
              <select
                name="categories"
                id="categories"
                className={`cursor-pointer p-2 font-light w-full rounded-full pl-4 appearance-none border border-gray-300 border-solid focus:outline-none`}
              >
                { ["All Categories", "Electronics", "Kids", "Men", "Women"].map((category) => (
                  <option className="font-light" value={`${category
                          .toLowerCase()
                          .replace(" ", "-")}`}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex items-center">
              <button className="absolute right-1 text-gray-700 rounded-full p-2">
                <Search strokeWidth={1} />
              </button>
              <input
                name="search-box"
                id="search-box"
                type="text"
                placeholder="Search"
                className=" text-black font-light placeholder:text-black p-2 pl-4 w-full rounded-full border border-gray-300 border-solid focus:outline-none"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
