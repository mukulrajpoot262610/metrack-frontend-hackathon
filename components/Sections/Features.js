import React from "react";

const Features = () => {
  return (
    <div className="relative  gap-4 w-full min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        The Only “Platform” You Need To Learn
      </h1>
      <p className="font-medium text-lg text-center">
        Here are the possible scenarios to get the most out of this platform
      </p>

      <div className="flex items-center flex-col lg:flex-row justify-center w-full mt-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:p-10">
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium peer-checked:bg-red-100 ">
              Specially Built for Generalists
            </div>
            <div className="collapse-content bg-white peer-checked:bg-red-100">
              <p>tabindex= attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium peer-checked:bg-red-100 ">
              Specially Built for Generalists
            </div>
            <div className="collapse-content bg-white peer-checked:bg-red-100">
              <p>tabindex= attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium peer-checked:bg-red-100 ">
              Specially Built for Generalists
            </div>
            <div className="collapse-content bg-white peer-checked:bg-red-100">
              <p>tabindex= attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
          <img
            src="https://fueler.io/images/fueler/main/fueler-internship-externship.webp"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
