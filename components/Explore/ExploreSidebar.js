import Link from "next/link";
import React from "react";
import { MdComputer } from "react-icons/md";
import { TbDeviceMobile } from "react-icons/tb";


export default function ExploreSidebar({ selected, setSelected, courses }) {
    return (
        <>
            <section className="hidden lg:block lg:col-span-3">
                <ul className="space-y-2 bg-base-100 sticky top-20 text-base-content">
                    {
                        courses && courses?.map(e => <li onClick={() => setSelected(e.id)} key={e.id} className="">
                            <a className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${selected === e.id ? "bg-blue-50 border border-blue-400 font-bold" : "hover:border-blue-400 hover:border"}`}>
                                {e.logo}
                                {e.name} Courses
                            </a>
                        </li>)
                    }
                </ul>
            </section>

            <section className="fixed lg:hidden z-40 bottom-0 w-full h-16 left-0 bg-white border flex justify-around items-center ">
                <div className="dropdown dropdown-top">
                    <label tabIndex="0" className="font-bold uppercase flex flex-col items-center">
                        {courses[selected].logo}
                        <p className="text-xs mt-1">
                            {courses[selected].name}
                        </p>
                    </label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56">
                        {
                            courses && courses.map(e => <li onClick={() => setSelected(e.id)} key={e.id}><a className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${selected === e.id ? "bg-blue-50 border border-blue-400 font-bold" : "hover:border-blue-400 hover:border"}`}>
                                {e.logo}
                                {e.name} Courses
                            </a></li>)
                        }
                    </ul>
                </div>
                <div className="dropdown dropdown-top dropdown-left">
                    <label tabIndex="0" className="font-bold uppercase flex flex-col items-center">
                        <MdComputer className="text-2xl" />
                        <p className="text-xs">
                            Web
                        </p>
                    </label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56">
                        <li><a className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${"selected === e.id " ? "bg-blue-50 border border-blue-400 font-bold" : "hover:border-blue-400 hover:border"}`}>
                            <MdComputer className="text-xl" />
                            Web Development
                        </a></li>
                        <li><a className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${"selected === e.id " ? "bg-blue-50 border border-blue-400 font-bold" : "hover:border-blue-400 hover:border"}`}>
                            <TbDeviceMobile className="text-xl" />
                            Mobile Development
                        </a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
