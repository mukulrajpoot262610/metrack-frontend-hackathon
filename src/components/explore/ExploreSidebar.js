import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ExploreSidebar({ selected, setSelected, courses }) {
  return (
    <>
      <section className="hidden lg:block lg:col-span-3">
        <ul className="sticky space-y-2 bg-base-100 top-20 text-base-content">
          {courses &&
            courses?.map((e) => (
              <li onClick={() => setSelected(e.id)} key={e.id} className="">
                <a
                  className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                    selected === e.id
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

      <section className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around w-full h-16 bg-white border lg:hidden ">
        <Menu as="div" className="relative inline-block text-left">
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bottom-0 left-0 w-56 mb-2 origin-bottom-left bg-white rounded-md shadow-lg">
              {courses &&
                courses.map((e) => (
                  <>
                    <Menu.Item key={e.id}>
                      <a
                        onClick={() => setSelected(e.id)}
                        className={`relative flex border border-white items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                          selected === e.id
                            ? "bg-blue-50 border border-blue-400 font-bold"
                            : "hover:border-blue-400 hover:border"
                        }`}
                      >
                        {e.logo}
                        {e.name} Courses
                      </a>
                    </Menu.Item>
                  </>
                ))}
            </Menu.Items>
          </Transition>
          <Menu.Button className="flex items-center justify-center gap-2">
            <label
              tabIndex="0"
              className="flex flex-col items-center font-bold uppercase"
            >
              {courses[selected].logo}
              <p className="mt-1 text-xs">{courses[selected].name}</p>
            </label>
          </Menu.Button>
        </Menu>
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
