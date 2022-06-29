import React from "react";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaStackOverflow,
  FaGlobe,
  FaFacebookF,
  FaMediumM,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export default function User({ user, profile }) {
  return (
    <div className="flex flex-col p-4 py-12 custom-overlay">
      <section className="flex justify-center">
        <div
          id="profile-pic"
          className="w-32 h-32 overflow-hidden bg-white rounded-full ring-2 ring-blue-500 ring-offset-4"
        >
          <img src={user?.avatar ? user?.avatar : "/profile.png"} />
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-xl font-bold text-center">{user?.name}</h2>
        <p className="text-xs font-medium text-center mt-1">{user?.tagline || "Your Tagline Appear here"}</p>
      </section>

      <section className="flex flex-wrap justify-center gap-2">
        {
          profile?.github && <div className="flex items-center">
            <a target="_blan" href={profile?.github} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.hashnode && <div className="flex items-center">
            <a target="_blan" href={profile?.hashnode} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <SiHashnode className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.linkedin && <div className="flex items-center">
            <a target="_blan" href={profile?.linkedin} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.mail && <div className="flex items-center">
            <a target="_blan" href={profile?.mail} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <ImMail4 className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.website && <div className="flex items-center">
            <a target="_blan" href={profile?.website} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <FaGlobe className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.stackoverflow && <div className="flex items-center">
            <a target="_blan" href={profile?.stackoverflow} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <FaStackOverflow className="text-2xl" />
            </a>
          </div>
        }
        {
          profile?.twitter && <div className="flex items-center">
            <a target="_blan" href={profile?.twitter} className="font-semibold border p-2 rounded-full hover:border-blue-500 cursor-pointer">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        }
      </section>
    </div>
  );
}
