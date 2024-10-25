import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./index.css";
import { LINKEDIN_URL, GITHUB_URL } from "../../utils/urls";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ scrollToProjects, scrollToAboutSection }) => {
  const [showMenubar, setShowMenubar] = useState(true);

  console.log(showMenubar);

  const handleProjectLink = () => {
    setShowMenubar(true);
    scrollToProjects();
  };

  const handleAboutSection = () => {
    setShowMenubar(true);
    scrollToAboutSection();
  };

  return (
    <div className="w-full fixed h-20 bg-indigo-600 flex justify-between items-center text-white z-50">
      {/* Increased z-index */}
      <div className="logo-container ml-2">
        <h1 className="font-bold text-2xl">AZAX</h1>
      </div>
      <div className="link-container md:flex gap-2 cursor-pointer hidden text-xl">
        <h1 onClick={handleProjectLink}>Projects</h1>
        <h1 onClick={handleAboutSection}>About</h1>
      </div>
      <div className="media-icons gap-2 mr-2 cursor-pointer hidden md:flex">
        <h1 onClick={() => window.open(LINKEDIN_URL, "_blank")}>
          <FaLinkedin size={32} />
        </h1>
        <h1 onClick={() => window.open(GITHUB_URL, "_blank")}>
          <FaGithub size={32} />
        </h1>
      </div>
      {showMenubar && (
        <FaAlignRight
          className="md:hidden cursor-pointer"
          size={30}
          onClick={() => setShowMenubar(!showMenubar)}
        />
      )}
      {!showMenubar && (
        <div className="md:hidden">
          <div>
            <AiOutlineCloseCircle
              size={40}
              className="md:hidden"
              onClick={() => setShowMenubar(!showMenubar)}
            />
          </div>
          <div className="absolute top-20 left-0 w-full bg-indigo-600 h-[500px] text-white flex flex-col justify-center items-center nav-container z-50">
            {/* Increased z-index */}
            <div className="link-container flex flex-col items-center gap-2 cursor-pointer">
              <h1 onClick={handleProjectLink}>Projects</h1>
              <h1 onClick={handleAboutSection}>About</h1>
            </div>
            <div className="media-icons flex flex-col items-center gap-2 mt-2 cursor-pointer">
              <h1
                onClick={() => {
                  setShowMenubar(!showMenubar); //
                  window.open(LINKEDIN_URL, "_blank");
                }}
              >
                LinkedIn
              </h1>
              <h1
                onClick={() => {
                  setShowMenubar(!showMenubar); //
                  window.open(GITHUB_URL, "_blank");
                }}
              >
                Github
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
