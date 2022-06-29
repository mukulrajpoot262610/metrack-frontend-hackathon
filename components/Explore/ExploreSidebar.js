import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

export default function ExploreSidebar({ selected, setSelected, courses }) {

  return (
    <>
      <section className="hidden lg:block lg:col-span-3">
        <ul className="sticky space-y-2 bg-base-100 top-20 text-base-content">
          {courses &&
            courses?.map((e) => (
              <li onClick={() => setSelected(e.id)} key={e.id} className="">
                <a
                  className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${selected === e.id
                    ? "bg-blue-50 border-blue-400 font-bold"
                    : "hover:bg-blue-50"
                    }`}
                >
                  {e.logo}
                  {e.name} Courses
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section className="fixed bottom-0 left-0 z-40 flex items-center justify-around w-full h-16 bg-white border lg:hidden ">
        <div className="dropdown dropdown-top">
          <label
            tabIndex="0"
            className="flex flex-col items-center font-bold uppercase"
          >
            {courses[selected].logo}
            <p className="mt-1 text-xs">{courses[selected].name}</p>
          </label>
          <ul
            tabIndex="0"
            className="w-56 p-2 shadow dropdown-content menu bg-base-100 rounded-box"
          >
            {courses &&
              courses.map((e) => (
                <li onClick={() => setSelected(e.id)} key={e.id}>
                  <a
                    className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${selected === e.id
                      ? "bg-blue-50 border border-blue-400 font-bold"
                      : "hover:border-blue-400 hover:border"
                      }`}
                  >
                    {e.logo}
                    {e.name} Courses
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="">
          <Link href="/dashboard">
            <label
              tabIndex="0"
              className="flex flex-col items-center font-bold uppercase"
            >
              <MdOutlineDashboard className="text-2xl" />
              <p className="text-xs">Home</p>
            </label>
          </Link>
        </div>
      </section>
    </>
  );
}
