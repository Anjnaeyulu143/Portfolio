import React from "react";
import projects from "../../utils/projects";
import ProjectCard from "../ProjectCard";

const Projects = ({ myProjectSection }) => {
  return (
    <div ref={myProjectSection}>
      <div className="flex gap-3 items-center flex-col p-5">
        <h1 className="text-3xl text-blue-600 font-bold">Portfolio</h1>
        <h2 className="text-2xl font-bold text-gray-500">
          Projects I have worked on
        </h2>
      </div>
      <div>
        {projects.map((projectInfo, index) => {
          return (
            <div key={index} className="mt-8">
              <ProjectCard data={projectInfo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
