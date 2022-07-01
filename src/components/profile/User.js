import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

export default function User({ user, profile }) {
  return (
    <div className="flex flex-col p-4 py-12 custom-overlay">
      <section className="flex justify-center">
        <div
          id="profile-pic"
          className="w-32 h-32 overflow-hidden bg-white rounded-full ring-2 ring-blue-500 ring-offset-4"
        >
          <img
            alt="avatar"
            src={user?.avatar ? user?.avatar : "/profile.png"}
          />
        </div>
      </section>
      <section className="py-6">
        <h2 className="text-xl font-bold text-center">{user?.name}</h2>
      </section>
      <section className="px-8 py-4 space-y-4 border-t border-blue-500 text-opacity-80 border-opacity-5">
        <div className="flex items-center">
          <BsGithub className="w-6 h-6 text-base-content" />
          <a className="pl-4 text-sm font-semibold">
            @{profile?.github || "username"}
          </a>
        </div>
        <div className="flex items-center">
          <BsLinkedin className="w-6 h-6 text-blue-400 text-opacity-80" />
          <a className="pl-4 text-sm font-semibold">
            @{profile?.linkedin || "username"}
          </a>
        </div>
        <div className="flex items-center">
          <SiHashnode className="w-6 h-6 text-blue-500 text-opacity-80" />
          <a className="pl-4 text-sm font-semibold">
            @{profile?.hashnode || "username"}
          </a>
        </div>
      </section>
    </div>
  );
}
