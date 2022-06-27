import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Timeline from "./Timeline";
import { FaGithub, FaLinkedinIn, FaInstagram, FaStackOverflow, FaGlobe, FaFacebookF, FaMediumM, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import { MdEdit } from 'react-icons/md'
import About from "./About";
import Stats from "./Stats";

export default function Profile() {

  const [selected, setSelected] = useState(0)

  return (
    <div className="">

      <section className="relative bg-gray-50  rounded-xl">
        <div className="w-full aspect-w-3 lg:aspect-w-8 aspect-h-1 bg-blue-50 rounded-t-2xl overflow-hidden">
          <img src="/profile.jpg" className="object-cover object-center" />
        </div>

        <div className="flex flex-col md:flex-row py-2 pb-8 relative">
          <div className="absolute -top-10 w-28 h-28 md:w-40 md:h-40 transform rounded-full left-3 md:left-12 lg:left-20 backdrop-blur-lg p-1 border border-blue-400"
          >
            <div className="relative w-full h-full">
              <Image src="/avatar.svg" layout="fill" />
            </div>
          </div>

          <div className="mt-16 md:mt-0 px-3 py-1 md:ml-56 lg:ml-64 w-full">
            <h1 className="text-3xl font-semibold text-blue-500 tracking-tight">Mukul Rajpoot</h1>
            <p className="my-1 text-sm tracking-tight">Full-Stack Developer</p>

            <div className="flex items-center gap-2 my-2 flex-wrap">
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaGithub className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaLinkedinIn className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaStackOverflow className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaGlobe className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaInstagram className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <ImMail4 className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaFacebookF className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaMediumM className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaTwitter className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaYoutube className="text-lg" />
              </div>
              <div className="border border-gray-400 cursor-pointer btn btn-ghost btn-square btn-sm rounded-full">
                <FaPinterest className="text-lg" />
              </div>
            </div>
          </div>



        </div>

        <div className="bg-blue-100 rounded-full absolute -top-2 -right-2 cursor-pointer btn btn-square btn-ghost btn-sm hover:text-blue-100">
          <MdEdit className="text-lg" />
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-start justify-center mt-4 gap-4">
        <div className="w-full lg:w-1/3 flex-col flex gap-4">
          <div className="w-full bg-gray-50 rounded-xl relative">
            <h1 className="px-4 py-2 font-extrabold text-sm uppercase tracking-tight">Skills</h1>
            <hr />
            <div className="px-4 py-2 flex flex-wrap gap-2">
              <span className="border text-sm border-blue-400 bg-blue-50 rounded-xl p-1 px-3">React</span>
            </div>

            <div className="bg-blue-100 rounded-full absolute -top-2 -right-2 cursor-pointer btn btn-square btn-ghost btn-sm hover:text-blue-100">
              <MdEdit className="text-lg" />
            </div>
          </div>

          <div className="w-full bg-gray-50 rounded-xl relative">
            <h1 className="px-4 py-2 font-extrabold text-sm uppercase tracking-tight">Socials</h1>
            <hr />
            <div className="px-4 py-2 flex flex-wrap gap-2">
              <span className="border text-sm border-blue-400 bg-blue-50 rounded-xl p-1 px-3">React</span>
            </div>

            <div className="bg-blue-100 rounded-full absolute -top-2 -right-2 cursor-pointer btn btn-square btn-ghost btn-sm hover:text-blue-100">
              <MdEdit className="text-lg" />
            </div>
          </div>

        </div>

        <div className="w-full lg:w-2/3 relative bg-gray-50 rounded-xl">
          <div className="tabs mt-1">
            <a onClick={(e) => setSelected(0)} className={`tab ${selected === 0 ? "tab-bordered font-bold tab-active" : ""}`}>Background</a>
            <a onClick={(e) => setSelected(1)} className={`tab ${selected === 1 ? "tab-bordered font-bold tab-active" : ""}`}>Projects</a>
            <a onClick={(e) => setSelected(2)} className={`tab ${selected === 2 ? "tab-bordered font-bold tab-active" : ""}`}>Timeline</a>
            <a onClick={(e) => setSelected(3)} className={`tab ${selected === 3 ? "tab-bordered font-bold tab-active" : ""}`}>Stats</a>
          </div>
          <hr />

          {
            selected === 0 && <About />
          }

          {
            selected === 2 && <Timeline />
          }
          {
            selected === 3 && <Stats />
          }

          <div className="bg-blue-100 rounded-full absolute -top-2 -right-2 cursor-pointer btn btn-square btn-ghost btn-sm hover:text-blue-100">
            <MdEdit className="text-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
