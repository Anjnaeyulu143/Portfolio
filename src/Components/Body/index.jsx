import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineArrowDownward } from "react-icons/md";
import { LINKEDIN_URL } from "../../utils/urls";

import "./index.css";
import Skills from "../Skills";
import Projects from "../Projects";

const Body = ({ scrollToProjects, myProjectSection, aboutSection }) => {
  return (
    <>
      <div
        className="h-[700px] md:h-[500px]  w-full flex flex-col gap-4 items-center justify-center text-center"
        ref={aboutSection}
      >
        <h3 className="text-indigo-500 font-bold text-3xl">Hi, I'am Azax</h3>

        <h1 className="text-5xl font-bold text-gray-800">
          Full Stack Web Developer
        </h1>

        <p className="w-3/4 text-md font-bold text-gray-500">
          I design and develop web applications with a focus on functionality.
          Explore my projects to get more info about my skills or connect with
          me.
        </p>

        <div className="btn-container flex flex-col md:flex-row gap-4 mt-3">
          <div
            className="btn bg-blue-600 w-48 pl-5 p-2 pr-5 text-white flex justify-around cursor-pointer "
            onClick={scrollToProjects}
          >
            <button>My Projects</button>
            <MdOutlineArrowDownward size={30} />
          </div>

          <div
            className="btn w-48 bg-blue-600 p-2 pl-5 pr-5 text-white flex justify-around cursor-pointer"
            onClick={() => window.open(LINKEDIN_URL, "_blank")}
          >
            <button>Lets Connect</button>
            <FaTelegramPlane size={30} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-indigo-500">
          SELF LEARNER,CONSTANT WORKER
        </h3>
      </div>

      <Skills />
      <Projects myProjectSection={myProjectSection} />
    </>
  );
};

export default Body;
