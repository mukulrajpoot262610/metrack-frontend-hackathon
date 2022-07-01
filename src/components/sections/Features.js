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

      <div className="flex flex-col items-center justify-center w-full mt-10 lg:mt-0 lg:flex-row">
        <div className="flex flex-col w-full gap-4 lg:w-1/2 lg:p-10">
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              Real-time discussion panel with markdown support.
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-blue-100">
              <p>
                You can discuss your doubts in real-time on MeTrack. So, no
                stopping after you encounter an error while following a
                tutorial. You can even post code snippets in the discussions as
                it is markdown supported.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              See what others are building.
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-blue-100">
              <p>
                View all the project submissions by others enrolled in the same
                course or tutorial. You can submit your own project as well.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-3xl">
            <input type="checkbox" className="peer" />
            <div className="text-xl font-medium collapse-title peer-checked:bg-blue-100 ">
              Build in public and Proof of Work
            </div>
            <div className="pt-4 bg-white collapse-content peer-checked:bg-blue-100">
              <p>
                Show your potential clients and recruiters that you&apos;ve
                learnt and built something useful. Those who view your project
                can add a feedback. This will help you improve your project over
                time. Your project can be an inspiration for others!
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-10 lg:w-1/2">
          <img
            alt="features"
            src="https://cdn.discordapp.com/attachments/987256512118399026/991307617249021992/insta.png"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
