import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import RenderIcon from "./renderIcon";

function Skills() {
  return (
    <div id="skills" className="w-full p-4 h-full md:h-screen text-white bg-[#1A1A40] flex flex-col items-center justify-center">
      <div className="w-full px-4 max-w-[1200px] mx-auto mt-10 md:mt-20">
        <h1 className="text-2xl md:text-3xl border-b-4 inline pb-3 border-red-500 font-semibold">My Experience</h1>
        <p className="text-xl md:text-2xl mt-8">// These are technologies I've worked with</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        <RenderIcon name="HTML" image={HTML} />
        <RenderIcon name="CSS" image={CSS} />
        <RenderIcon name="JavaScript" image={javascript} />
        <RenderIcon name="Github" image={github} />
        <RenderIcon name="Mongo" image={mongo} />
        <RenderIcon name="React" image={react} />
        <RenderIcon name="Tailwind" image={tailwind} />
        <RenderIcon name="Node" image={node} />
      </div>
    </div>
  );
}

export default Skills;
