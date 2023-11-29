import NavbarInterface from "./NavbarInterface";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar: React.FC<NavbarInterface> = ({ brand, options }) => {
  const [showOption, setShowOption] = useState(0);
  const [showMobile, setShowMobile] = useState(false);
  const { pathname } = useLocation();
  const isMobileClass = showMobile
    ? "flex flex-col bg-white absolute top-[100%] left-0 right-0 entrance-top"
    : "hidden";
  return (
    <div
      className={`relative p-3 shadow flex justify-between items-center z-50 ${
        pathname === "/login" && "hidden"
      }`}
    >
      <Link to="/" className="text-lg font-bold text-lime-500">
        {brand}
      </Link>
      <div className="flex gap-4 items-center">
        <ul className={`gap-2 ${isMobileClass} lg:flex`}>
          {options.map((option, index) => {
            return (
              <li
                className="grid grid-cols-2 text-gray-500 hover:cursor-pointer  hover:text-lime-500 transition-colors border-b lg:border-none lg:flex lg:items-center lg:relative"
                key={index}
                onMouseEnter={() => setShowOption(index)}
                onMouseLeave={() => setShowOption(0)}
              >
                <span className="p-2">{option.menu}</span>{" "}
                {option.subMenus && (
                  <AiOutlineDown className="mt-1 text-2xl lg:text-base lg:m-0  mr-2 justify-self-end" />
                )}
                {showOption === index && (
                  <ul className="col-span-2 lg:absolute lg:top-[100%] ">
                    {option.subMenus?.map((subMenu, index) => {
                      return (
                        <li
                          className="whitespace-nowrap border-t bg-white p-4 text-gray-500 hover:bg-lime-700 hover:text-white transition-colors duration-[500ms]"
                          key={index}
                        >
                          {subMenu}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        {!showMobile ? (
          <AiOutlineMenu
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setShowMobile(true)}
          />
        ) : (
          <AiOutlineClose
            className={`text-2xl cursor-pointer lg:${!showMobile && "hidden"}`}
            onClick={() => setShowMobile(false)}
          />
        )}

        <Link to="/login" className="btn btn-primary">
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
