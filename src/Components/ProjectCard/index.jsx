import React from "react";
import { IMAGES_ARR } from "../../utils/constants";

const ProjectCard = ({ data }) => {
  console.log("Data:", data);
  const {
    projectName,
    description,
    techStack,
    features,
    imageUrl,
    websiteUrl,
    githubUrl,
  } = data;

  const renderTechImage = (techName) => {
    const techImgObj = IMAGES_ARR.filter(
      (i) => i.name.toLowerCase() === techName.toLowerCase()
    );
    return techImgObj;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-2">
      <div className="project-features pr-6 pl-6 flex flex-col gap-2 md:w-1/2 flex-grow basis-0">
        <h1 className="text-2xl text-blue-600 font-bold">{projectName}</h1>
        <p className="text-lg font-bold text-gray-500">{description}</p>
        <h1 className="text-xl text-blue-600 font-bold">Features</h1>
        <ul className="list-decimal pl-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-800">
              {feature}
            </li>
          ))}
        </ul>
        <h1 className="text-xl text-blue-600 font-bold">Tech Stack</h1>
        <div className="flex gap-5 flex-wrap justify-center md:justify-center">
          {techStack.map((eachTechName, index) => {
            const techImg = renderTechImage(eachTechName);
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="h-[50px] w-[50px]">
                  <img
                    src={techImg[0].url}
                    alt={techImg[0].name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-md font-normal mt-2 text-gray-800">
                  {techImg[0].name}
                </h2>
              </div>
            );
          })}
        </div>
        <div className="btn-container flex gap-5 justify-center lg:justify-start mt-2">
          <button
            className="lg:p-3 p-2 bg-indigo-600 w-36 lg:w-48 text-lg text-white lg:font-medium lg:text-xl"
            onClick={() => window.open(websiteUrl, "_blank")}
          >
            See Live
          </button>
          <button
            className="lg:p-3 p-2 bg-indigo-600 text-lg w-36 lg:w-48 text-white lg:font-medium lg:text-xl"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            View Code
          </button>
        </div>
      </div>
      <div className="live-project-image p-1 md:p-2 bg-blue-600 rounded-sm md:rounded-lg m-2 md:w-1/2 flex-grow basis-0 lg:mt-10">
        <div className="img-container shadow-2xl">
          <img
            src={imageUrl}
            alt={projectName}
            className="rounded-sm md:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
