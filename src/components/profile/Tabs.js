import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import About from "./About";
import ProjectContent from "components/common/ProjectContent";
import { useSelector } from "react-redux";
import Edit from "./Edit";
import Timeline from "./Timeline";

export default function Tabs({ courses, projects, profile }) {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="flex justify-center border border-blue-300 bg-gray-50 rounded-xl border-opacity-10 md:gap-x-5">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs md:text-base text-base-content ${
                selected ? "border-b-4 border-blue-500 text-blue-500" : ""
              }`}
            >
              About
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs md:text-base text-base-content ${
                selected ? "border-b-4 border-blue-500 text-blue-500" : ""
              }`}
            >
              Timeline
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs md:text-base text-base-content ${
                selected ? "border-b-4 border-blue-500 text-blue-500" : ""
              }`}
            >
              Submissions
            </button>
          )}
        </Tab>
        {isAuth ? (
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`px-4 outline-none p-2 text-xs md:text-base text-base-content ${
                  selected ? "border-b-4 border-blue-500 text-blue-500" : ""
                }`}
              >
                Edit
              </button>
            )}
          </Tab>
        ) : null}
      </Tab.List>

      <Tab.Panels className="mt-4">
        <Tab.Panel>
          <About profile={profile} />
        </Tab.Panel>
        <Tab.Panel>
          <Timeline projects={projects} courses={courses} />
        </Tab.Panel>
        <Tab.Panel>
          <ProjectContent projects={projects} cols={2} />
        </Tab.Panel>
        {isAuth ? (
          <Tab.Panel>
            <Edit profile={profile} />
          </Tab.Panel>
        ) : null}
      </Tab.Panels>
    </Tab.Group>
  );
}
