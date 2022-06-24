import React, { useState } from "react";
import Discussions from "./Tabs/Discussions";

import { MdVideoLibrary, MdOutlineDescription } from 'react-icons/md'
import { SiHtml5, SiJavascript, SiReact, SiAngular, SiDjango, SiFlutter } from 'react-icons/si'
import { FaVuejs, FaNodeJs, FaPython, FaLaptopCode } from 'react-icons/fa'
import { HiOutlineSaveAs, HiChatAlt2 } from 'react-icons/hi'
import Video from "./Tabs/Video";
import About from "./Tabs/About";
import { useSelector } from "react-redux";
import LoginCard from "../Card/LoginCard";

const CourseDetail = ({ course }) => {

  const [tabs, setTabs] = useState(0)
  const { isAuth } = useSelector(state => state.auth)

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <>
      <div className="min-h-screen pb-10">
        <header className="fixed left-0 top-16 z-40 w-full h-fit bg-blue-50">
          <div className="w-10/12 mx-auto py-6 flex-col lg:flex-row flex items-center justify-between gap-4">
            <div className="w-full lg:w-2/3">
              <h2 className="mt-3 text-xl lg:text-3xl font-bold capitalize">{truncateString(course?.name, 60)}</h2>
              <div className="flex items-center gap-1 mt-1">
                <div className="avatar-group -space-x-4 ring-0">
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://api.lorem.space/image/face?hash=4818" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://api.lorem.space/image/face?hash=40311" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://api.lorem.space/image/face?hash=84348" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-6 bg-neutral-focus text-neutral-content">
                      <span className="text-xs">+99</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-xs"><span className="font-bold">23</span> developers have joined this project.</h2>
              </div>
            </div>

            {
              isAuth ? <div className="w-full lg:w-1/3 flex justify-start lg:justify-end gap-2">
                <button className="btn btn-sm bg-blue-500 border-0 hover:bg-blue-400">Enroll Now</button>
                <button className="btn btn-sm btn-ghost hover:bg-transparent flex items-center gap-1"><HiOutlineSaveAs className="text-xl" /> Save</button>
              </div> : <div className="hidden lg:block"><LoginCard /> </div>
            }
          </div>

          <div className="h-10"></div>

          <div className="w-full lg:w-10/12 mx-auto bottom-0 absolute left-0 lg:left-32 overflow-auto flex">
            <div className="flex">
              <a onClick={() => setTabs(0)} className={`${tabs === 0 && "tab-active font-bold"} tab tab-lifted gap-1 w-28`}><MdVideoLibrary /> Video</a>
              <a onClick={() => setTabs(1)} className={`${tabs === 1 && "tab-active font-bold"} tab tab-lifted gap-1 w-28`}><MdOutlineDescription /> About</a>
              <a onClick={() => setTabs(2)} className={`${tabs === 2 && "tab-active font-bold"} tab tab-lifted gap-1 w-36`}><HiChatAlt2 /> Discussion</a>
              <a onClick={() => setTabs(3)} className={`${tabs === 3 && "tab-active font-bold"} tab tab-lifted gap-1 w-28`}><FaLaptopCode /> Projects</a>
            </div>
          </div>
        </header>

        <div className="flex justify-between">
          <div className="mt-80 w-full lg:w-4/6">
            {
              tabs === 2 && <Discussions id={course?.discussionId} />
            }
            {
              tabs === 0 && <Video course={course} />
            }
            {
              tabs === 1 && <About course={course} />
            }
          </div>
          <div className="hidden lg:block lg:w-2/6 mt-80 z-30 pl-10">
            <div className="sticky top-80 border p-6 rounded-xl">
              <h1 className="font-bold tracking-tight">Follow these steps to get started</h1>
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
