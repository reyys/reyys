import React from "react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { FiDribbble } from "react-icons/fi";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white fixed h-[80px] duration-300 w-full px-8 flex items-center justify-between navbar">
      <div className="text-xl md:text-3xl text-red-500 font-bold">Reynaldo.</div>
      <ul className="hidden md:flex items-center">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden w-[30px] z-10">
        {nav ? <XIcon /> : <MenuAlt3Icon />}
      </div>

      <div className={`${nav ? "block" : "hidden"} md:hidden absolute w-full left-0 top-0`}>
        <ul className="bg-black flex flex-col justify-center items-center text-2xl text-white h-screen">
          <li>
            <a href="#section-2">Home</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] ml-[-95px] bg-pink-500 hover:ml-0 duration-300 h-[70px] justify-between flex items-center">
            <a href="/" className="flex w-full justify-between items-center text-black">
              <div className="text-white font-bold">Dribbble</div> <FiDribbble className="w-[30px] h-[40px]  ml-3 text-white" />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] ml-[-95px] hover:ml-0 duration-300 h-[70px] bg-black justify-between flex items-center">
            <a href="/" className="flex w-full justify-between items-center text-black">
              <div className="text-white font-bold">GitHub</div> <FaGithub className="w-[30px] h-[40px] text-white ml-3" />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] ml-[-95px] bg-blue-600 hover:ml-0 duration-300 h-[70px] justify-between flex items-center">
            <a href="/" className="flex w-full justify-between items-center text-black">
              <div className="text-white font-bold">Facebook</div> <FaFacebook className="w-[30px] text-white h-[40px] ml-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
