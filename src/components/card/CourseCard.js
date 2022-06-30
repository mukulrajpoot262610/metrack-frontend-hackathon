import React from "react";

const CourseCard = ({ data }) => {
  return (
    <div className="max-w-sm duration-200 shadow-xl cursor-pointer card bg-base-100 hover:-translate-y-3">
      <figure>
        <img src={data?.thumbnail} alt="image" />
      </figure>
      <div className="p-6 card-body">
        <h2 className="font-bold card-title">{data?.name}</h2>
        <div className="flex items-center gap-2">
          <img src={data?.image} className="h-10 border rounded-full" />
          <h1 className="font-medium text-gray-500">{data?.channel}</h1>
        </div>
        <div className="flex justify-between card-actions">
          <div className="flex items-center gap-1">
            <img src="/like.png" className="h-10" />
            <p className="font-semibold">{data?.respect}</p>
          </div>
          <button className="border border-blue-200 btn btn-ghost hover:bg-blue-50">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
