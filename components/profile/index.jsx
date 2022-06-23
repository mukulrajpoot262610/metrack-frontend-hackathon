import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { useSelector } from "react-redux";
import Timeline from "./Timeline";

export default function Profile() {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <div>
      <section id="hero" className="relative">
        <div
          id="cover"
          className="w-full border-4 border-opacity-50 aspect-w-4 aspect-h-1 bg-accent bg-opacity-20 border-accent rounded-2xl"
        ></div>
        <div
          id="avatar"
          className="absolute bottom-0 w-40 h-40 overflow-hidden transform -translate-x-1/2 translate-y-1/2 rounded-full left-1/2 ring-8 bg-accent ring-gray-200 ring-opacity-40 ring-offset-4"
        >
          <div className="relative w-full h-full">
            <Image src="/avatar.svg" layout="fill" />
          </div>
        </div>
      </section>
      <section className="pt-28" id="introduction">
        <h2 className="text-4xl font-extrabold text-center text-blue-500">
          {user?.name}
        </h2>
        <p className="max-w-xl py-10 mx-auto text-sm text-center">
          Freelance Web Developer @upwork
        </p>
      </section>
      {isAuth && (
        <section
          id="actions"
          className="grid max-w-2xl grid-cols-2 gap-4 mx-auto my-10 h-36 md:grid-cols-3"
        >
          <div className="flex flex-col items-center justify-center h-full bg-orange-500 cursor-pointer gap-y-4 bg-opacity-20 rounded-xl">
            <p className="flex items-center justify-center w-12 h-12 rounded-full bg-base-100">
              <AiOutlineUser className="text-2xl font-bold" />
            </p>
            <h2 className="font-bold">Social Profiles</h2>
          </div>
          <div className="flex flex-col items-center justify-center h-full bg-blue-500 cursor-pointer gap-y-4 bg-opacity-20 rounded-xl">
            <p className="flex items-center justify-center w-12 h-12 rounded-full bg-base-100">
              <AiOutlineUser className="text-2xl font-bold" />
            </p>
            <h2 className="font-bold">Update profile</h2>
          </div>
          <div className="flex flex-col items-center justify-center h-full cursor-pointer gap-y-4 bg-emerald-500 bg-opacity-20 rounded-xl">
            <p className="flex items-center justify-center w-12 h-12 rounded-full bg-base-100">
              <BiCog className="text-2xl font-bold" />
            </p>
            <h2 className="font-bold">Go to Settings</h2>
          </div>
        </section>
      )}
      <section className="py-10" id="stats">
        <div className="flex w-full max-w-4xl mx-auto shadow bg-base-200 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-blue-500"
              >
                <path
                  strokLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Courses</div>
            <div className="stat-value">54</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-blue-500"
              >
                <path
                  strokLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Completed</div>
            <div className="stat-value">26</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-blue-500"
              >
                <path
                  strokLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Projects</div>
            <div className="stat-value">12</div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <Timeline />
      </section>
    </div>
  );
}
