import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LINKEDIN_URL, GITHUB_URL } from "../../utils/urls";

export const Footer = () => {
  return (
    <div className="h-24 bg-indigo-500 mt-6 flex flex-col md:flex-row justify-center gap-3 md:justify-around items-center">
      <span className="text-white pl-1">© 2024 AZAX. All rights reserved.</span>
      <div className="flex text-white gap-3 pr-1">
        <FaLinkedin
          size={32}
          className="cursor-pointer"
          onClick={() => window.open(LINKEDIN_URL, "_blank")}
        />
        <FaGithub
          size={32}
          className="cursor-pointer"
          onClick={() => window.open(GITHUB_URL, "_blank")}
        />
      </div>
    </div>
  );
};
