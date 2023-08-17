import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ExploreComponent from "components/explore/ExploreComponent";
import ExploreSidebar from "components/explore/ExploreSidebar";
import { getPublishedCourses } from "services/api";

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

import { FaVuejs, FaNodeJs, FaPython, FaGolang, FaDocker } from "react-icons/fa";

const COURSES = [
  {
    id: 0,
    name: "HTMLCSS",
    logo: <SiHtml5 className="text-xl" />,
  },
  {
    id: 1,
    name: "Javascript",
    logo: <SiJavascript className="text-xl" />,
  },
  {
    id: 2,
    name: "React",
    logo: <SiReact className="text-xl" />,
  },
  {
    id: 3,
    name: "Vue",
    logo: <FaVuejs className="text-xl" />,
  },
  {
    id: 4,
    name: "Angular",
    logo: <SiAngular className="text-xl" />,
  },
  {
    id: 5,
    name: "Node",
    logo: <FaNodeJs className="text-xl" />,
  },
  {
    id: 6,
    name: "Python",
    logo: <FaPython className="text-xl" />,
  },
  {
    id: 7,
    name: "Django",
    logo: <SiDjango className="text-xl" />,
  },
  {
    id: 8,
    name: "Flutter",
    logo: <SiFlutter className="text-xl" />,
  },
  {
    id: 9,
    name: "SQL",
    logo: <SiPostgresql className="text-xl" />,
  },
  {
    id: 10,
    name: "Docker",
    logo: <FaDocker className="text-xl" />,
  },
  {
    id: 11,
    name: "MongoDB",
    logo: <SiMongodb className="text-xl" />,
  },
];

const Explore = () => {
  const [selected, setSelected] = useState(0);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getPublishedCourses(COURSES[selected].name);
        setResponse(data.data);
      } catch (err) {
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, [selected]);

  return (
    <div className="grid grid-cols-12 gap-4 pt-16 pb-10">
      <ExploreSidebar
        selected={selected}
        setSelected={setSelected}
        courses={COURSES}
      />
      {
        <ExploreComponent
          courses={COURSES}
          response={response}
          selected={selected}
        />
      }
    </div>
  );
};

export default Explore;
