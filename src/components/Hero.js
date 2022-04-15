import React from "react";
import { FaArrowRight } from "react-icons/fa";
import videosrc from "../assets/video.mp4";

function Hero() {
  return (
    <div id="home" className="w-full px-4 md:px-0 h-[90vh] bg-[#1A1A40]">
      {/* <video className="h-full w-full absolute " src={videosrc} autoPlay loop muted /> */}
      <div className="max-w-[1000px] mx-auto w-full h-full flex text-white flex-col md:px-8 px-3 justify-center">
        <p className="md:text-xl font-semibold text-red-500">Hi, My name is</p>
        <h1 className="md:text-7xl text-5xl py-2 font-bold">REYNALDO</h1>
        <h2 className="md:text-3xl text-xl py-2 font-semibold">I'm a Front End Developer</h2>
        <p className="md:text-l py-2 max-w-[600px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, nemo aperiam aut dolore natus amet vero esse similique molestiae, quidem mollitia doloribus.</p>
        <a href="#skills">
          <button className="group px-3 py-2 mt-3 border-2 flex items-center w-max ">
            View Work
            <FaArrowRight className="ml-3 group-hover:rotate-90 duration-300" />{" "}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
