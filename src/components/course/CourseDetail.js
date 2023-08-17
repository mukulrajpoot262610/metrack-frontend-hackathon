import React, { useState } from "react";
import Discussions from "./tabs/discussions";

import { MdVideoLibrary, MdOutlineDescription } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineSaveAs, HiChatAlt2 } from "react-icons/hi";
import Video from "./tabs/Video";
import About from "./tabs/About";
import { useDispatch, useSelector } from "react-redux";
import LoginCard from "components/card/LoginCard";
import { enrollCourse } from "services/api";
import toast from "react-hot-toast";
import Projects from "./tabs/project";
import { setAuth } from "redux/authSlice";

const CourseDetail = ({ course }) => {
  const [tabs, setTabs] = useState(0);
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const handleEnroll = async () => {
    try {
      const { data } = await enrollCourse(course._id);
      toast.success("Enrolled 🎉");
      dispatch(setAuth(data));
    } catch (err) {
      toast.error(err?.response?.data?.msg);
    }
  };

  return (
    <>
      <div className="min-h-screen pb-10">
        <header className="fixed left-0 z-40 w-full top-16 h-fit bg-blue-50">
          <div className="flex flex-col items-center justify-between w-10/12 gap-4 py-6 mx-auto lg:flex-row">
            <div className="w-full lg:w-2/3">
              <h2 className="mt-3 text-xl font-bold capitalize line-clamp-2 lg:text-3xl">
                {truncateString(course?.name, 60)}
              </h2>
              <div className="flex items-center gap-1 mt-1">
                <div className="-space-x-4 avatar-group ring-0">
                  <div className="avatar">
                    <div className="w-6">
                      <img
                        alt="avatar"
                        src="/profile.png"
                        className="object-top"
                      />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img
                        alt="avatar"
                        src="/profile.png"
                        className="object-top"
                      />
                    </div>
                  </div>
                  <div className="avatar">
                    <div alt="avatar" className="w-6">
                      <img
                        alt="avatar"
                        src="/profile.png"
                        className="object-top"
                      />
                    </div>
                  </div>
                  {course?.students?.length > 20 && (
                    <div className="avatar placeholder">
                      <div className="w-6 bg-neutral-focus text-neutral-content">
                        <span className="text-xs">+20</span>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-xs">
                  <span className="font-bold">{course?.students?.length}</span>{" "}
                  developers have joined this course.
                </h2>
              </div>
            </div>

            {isAuth ? (
              <div className="flex justify-start w-full gap-2 lg:w-1/3 lg:justify-end">
                {user?.courseEnrolled?.includes(course._id) ? (
                  ""
                ) : (
                  <>
                    <button
                      className="bg-blue-500 border-0 btn btn-sm hover:bg-blue-400"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                    </button>
                    <button className="flex items-center gap-1 btn btn-sm btn-ghost hover:bg-transparent">
                      <HiOutlineSaveAs className="text-xl" /> Save
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="hidden lg:block">
                <LoginCard />{" "}
              </div>
            )}
          </div>

          <div className="h-5">
          </div>

          <div className="absolute bottom-0 left-0 flex w-full mx-auto overflow-auto lg:w-10/12 lg:left-32">
            <div className="flex">
              <a
                onClick={() => setTabs(0)}
                className={`${tabs === 0 && "tab-active font-bold"
                  } tab tab-lifted gap-1 w-28`}
              >
                <MdVideoLibrary /> Video
              </a>
              <a
                onClick={() => setTabs(1)}
                className={`${tabs === 1 && "tab-active font-bold"
                  } tab tab-lifted gap-1 w-28`}
              >
                <MdOutlineDescription /> About
              </a>
              <a
                onClick={() => setTabs(2)}
                className={`${tabs === 2 && "tab-active font-bold"
                  } tab tab-lifted gap-1 w-36`}
              >
                <HiChatAlt2 /> Discussion
              </a>
              <a
                onClick={() => setTabs(3)}
                className={`${tabs === 3 && "tab-active font-bold"
                  } tab tab-lifted gap-1 w-28`}
              >
                <FaLaptopCode /> Projects
              </a>
            </div>
          </div>
        </header>


        <div className="flex justify-between">
          <div className="w-full mt-60 lg:w-4/6">
            {tabs === 0 && <Video course={course} />}
            {tabs === 1 && <About course={course} />}
            {tabs === 2 && <Discussions id={course?.discussionId} />}
            {tabs === 3 && <Projects course={course} />}
          </div>
          <div className="z-30 hidden pl-10 lg:block lg:w-2/6 mt-80">
            <div className="sticky p-6 border top-80 rounded-xl">
              <h1 className="font-bold tracking-tight">
                Follow these steps to get started
              </h1>
              <ul className="steps steps-vertical">
                <li className="step">Enroll Course</li>
                <li className="step">Watch Video</li>
                <li className="step">Start Building Project</li>
                <li className="step">Create a GitHub repository</li>
                <li className="step">Deploy your project</li>
                <li className="step">Submit your project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
