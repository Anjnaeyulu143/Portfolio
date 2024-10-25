import React from "react";
import { IMAGES_ARR } from "../../utils/constants";

const Skills = () => {
  return (
    <div className="text-center -mt-10  mx-auto pb-4">
      {/* Added padding instead of negative margin */}
      <div className="border-b-4 border-blue-400 w-[70%] md:w-[35%] mx-auto p-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Tech Stack I Know and I'm Learning
        </h1>
      </div>
      <p className="mt-4 text-md mx-auto text-gray-800 md:text-[18px] font-normal p-2 pb-10">
        I have a strong grasp of React.js, JavaScript, HTML, CSS, Tailwind CSS,
        and Redux. Currently, I’m diving deeper into Node.js and MongoDB to
        enhance my full-stack development skills.
      </p>
      <div className="flex flex-row flex-wrap w-full  justify-center gap-6 bg-white">
        {IMAGES_ARR.map((image, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="h-[60px] w-[60px] cursor-pointer ">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-md font-normal mt-2 text-gray-800">
              {image.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
