import React from "react";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen gap-4">
      <h1 className="text-3xl font-bold text-center lg:text-5xl">
        The Only “Platform” You Need To Learn
      </h1>
      <p className="text-lg font-medium text-center">
        Here are the possible scenarios to get the most out of this platform
      </p>

      <div className="flex flex-col items-center justify-center w-full mt-10 lg:flex-row">
        <div className="flex flex-col w-full gap-4 lg:w-1/2 lg:p-10">
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              Specially built for Developers
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-red-100">
              <p>MeTrack provides hand-picked tutorials from youtube. </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              Realtime Discussion Panel.
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-red-100">
              <p>Discuss your doubts with others in real-time.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              Build in public, submit and view projects.
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-red-100">
              <p>
                Upload your project, get feedback from your peers, view projects
                that others have built.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-10 lg:w-1/2">
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
