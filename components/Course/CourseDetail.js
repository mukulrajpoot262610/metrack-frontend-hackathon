import React from "react";
import Discussions from "./Discussions";

const CourseDetail = ({ course }) => {
  console.log(course);

  return (
    <>
      <div className="flex flex-col items-start justify-center min-h-screen pb-10">
        <div className="flex w-full">
          <div className="w-3/4">
            <div className="video-container">
              <iframe
                src={course?.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="text-xl font-bold">{course?.name}</h1>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={course?.channelImage}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-medium text-gray-500">
                  {course?.channel}
                </h1>
                <button className="border border-red-300 btn btn-sm btn-ghost hover:bg-red-200">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full my-4 mb-0 border-gray-200" />

        <div className="flex items-center justify-between w-full h-16 px-4">
          <div className="flex items-center justify-center gap-6">
            <h3 className="text-sm font-bold text-red-300 uppercase border-b border-red-300 cursor-pointer bg-red-50">
              About
            </h3>
            <h3
              className={`font-bold  border-red-300 cursor-pointer hover:border-b text-sm uppercase`}
            >
              Discussions
            </h3>
            <h3
              className={`font-bold border-red-300 cursor-pointer hover:border-b text-sm uppercase`}
            >
              Projects & Resources
            </h3>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button className="border border-red-300 btn btn-sm btn-ghost hover:bg-red-200">
              Enroll Now
            </button>
            <button className="border border-red-300 btn btn-sm btn-ghost hover:bg-red-200">
              Save for later
            </button>
            <button className="border border-red-300 btn btn-sm btn-ghost hover:bg-red-200">
              Share
            </button>
          </div>
        </div>

        <hr className="w-full my-4 mt-0 border-gray-200" />

        <div className="p-6">
          <h2 className="font-bold">About this Course</h2>
          <p>
            Become the singer you’ve always wanted to be with the vocal coach to
            the stars—Valerie Morehouse.
          </p>
        </div>
      </div>
      <div className="py-10">
        <Discussions id={course?.discussionId} />
      </div>
    </>
  );
};

export default CourseDetail;
