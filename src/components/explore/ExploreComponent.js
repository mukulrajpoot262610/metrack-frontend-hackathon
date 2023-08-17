import React from "react";
import CourseContent from "components/common/CourseContent";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiAngular,
  SiDjango,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaVuejs, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";

const COURSES = [
  {
    id: 0,
    name: "HTML/CSS",
    logo: <SiHtml5 className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 1,
    name: "Javascript",
    logo: <SiJavascript className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 2,
    name: "React",
    logo: <SiReact className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 3,
    name: "Vue.js",
    logo: <FaVuejs className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 4,
    name: "Angular",
    logo: <SiAngular className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 5,
    name: "Node.js",
    logo: <FaNodeJs className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 6,
    name: "Python",
    logo: <FaPython className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 7,
    name: "Django",
    logo: <SiDjango className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 8,
    name: "Flutter",
    logo: <SiFlutter className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 9,
    name: "SQL",
    logo: <SiPostgresql className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 10,
    name: "Docker",
    logo: <FaDocker className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
  {
    id: 11,
    name: "MongoDB",
    logo: <SiMongodb className="z-30 text-6xl text-blue-400 sm:text-9xl" />,
  },
];

const ExploreComponent = ({ response, selected }) => {
  return (
    <section className="col-span-12 mt-4 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="relative flex items-center justify-end gap-4 p-8 overflow-hidden bg-blue-50 rounded-3xl">
          <h1 className="absolute text-4xl font-black text-blue-200 uppercase sm:text-7xl lg:text-8xl left-8">
            {COURSES[selected].name}
          </h1>
          {COURSES[selected].logo}
        </div>

        {/* <div className="flex items-center justify-end p-3">
                    <p className="text-xs font-bold text-gray-400 uppercase">Sort by:</p>
                    <select className="w-64 ml-4 select select-sm select-bordered">
                        <option disabled selected>
                            Who shot first?
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div> */}
        <hr />

        <CourseContent courses={response} />
      </div>
    </section>
  );
};

export default ExploreComponent;
