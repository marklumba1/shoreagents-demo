import NavbarInterface from "./NavbarInterface";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar: React.FC<NavbarInterface> = ({ brand, options }) => {
  const [showOption, setShowOption] = useState(0);
  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <p className="font-mono font-extrabold text-green-700">{brand}</p>
      <div>
        <ul className="flex gap-2">
          {options.map((option, index) => {
            return (
              <li
                className="flex gap-1 relative items-center hover:cursor-pointer hover:text-green-500 transition-colors"
                key={index}
                onMouseEnter={() => setShowOption(index)}
                onMouseLeave={() => setShowOption(0)}
              >
                {option.title} {option.subTitles && <AiFillCaretDown />}
                {showOption === index && (
                  <ul className="absolute top-[100%] fade-in left-0 flex flex-col gap-2">
                    {option.subTitles?.map((subTitle, index) => {
                      return (
                        <li className="whitespace-nowrap" key={index}>
                          {subTitle}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
          <li>
            <button className="btn btn-primary">GET STARTED</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
