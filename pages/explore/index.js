import React from "react";
import CourseContent from "../../components/Dashboard/CourseContent";

const Explore = () => {
  return (
    <div className="flex items-start justify-center min-h-screen gap-10 pb-10">
      <div className="w-1/5 p-2 border-r">
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          All Classess
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Trending
        </h2>
        <h3 className="mt-4 text-xs font-bold text-gray-400 uppercase">
          Technologies
        </h3>
        <hr className="mb-4" />
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          React
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Angular
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Vue
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Flutter
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Nodejs
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-red-50 rounded-xl">
          Django
        </h2>
      </div>
      <div className="w-4/5">
        <div className="relative flex justify-end overflow-hidden bg-red-50 h-96 rounded-3xl">
          <h1 className="absolute font-black text-red-200 uppercase -translate-y-1/2 text-9xl left-20 top-1/2">
            React
          </h1>
          <img src="/hero_2.svg" className="w-1/2" />
        </div>

        <div className="flex items-center justify-end p-3">
          <p className="text-xs font-bold text-gray-400 uppercase">Sort by:</p>
          <select className="w-64 ml-4 select select-sm select-bordered">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <hr />

        <CourseContent />

      </div>
    </div>
  );
};

export default Explore;
