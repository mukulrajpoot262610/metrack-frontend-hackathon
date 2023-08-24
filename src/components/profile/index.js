import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaGithub, FaInstagram, FaFacebook, FaLink, FaTwitter, FaLinkedin } from "react-icons/fa";
import About from "./About";
import Timeline from "./Timeline";
import Edit from "./Edit";

export default function Profile({ data, user }) {

  const router = useRouter()
  const { username } = router.query

  const profileData = useSelector(state => state.auth.user)

  const [showEdit, setShowEdit] = useState(false);
  const [userProfile, setUserProfile] = useState(data.profile)



  return (
    <div>

      <div className="h-64 w-full rounded-2xl bg-blue-50" >
      </div>

      <div className="relative flex justify-center sm:justify-start lg:h-40">
        <img src={userProfile.avatar ? userProfile.avatar : "/profile.png"} className="absolute -top-16 rounded-full h-56 w-56 self-center left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 object-cover" alt="" />

        <div className="mt-44 md:mt-0 md:ml-64 flex flex-col sm:flex-row justify-between items-start w-full px-8">
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="leading-tight font-semibold text-4xl md:text-5xl md:mt-2 text-center">{userProfile.name}</h1>
            <h3 className=" font-medium leading-snug break-words text-center md:text-left my-2">{userProfile?.headline || ""}</h3>

            <section className='text-xl flex gap-2 my-2'>
              {
                userProfile.github ? <a target="_blank" className="cursor-pointer" href={userProfile.github}><FaGithub /></a> : ""
              }
              {
                userProfile.instagram ? <a target="_blank" className="cursor-pointer" href={userProfile.instagram}><FaInstagram /></a> : ""
              }
              {
                userProfile.facebook ? <a target="_blank" className="cursor-pointer" href={userProfile.facebook}><FaFacebook /></a> : ""
              }
              {
                userProfile.website ? <a target="_blank" className="cursor-pointer" href={userProfile.website}><FaLink /></a> : ""
              }
              {
                userProfile.twitter ? <a target="_blank" className="cursor-pointer" href={userProfile.twitter}><FaTwitter /></a> : ""
              }
              {
                userProfile.linkedin ? <a target="_blank" className="cursor-pointer" href={userProfile.linkedin}><FaLinkedin /></a> : ""
              }
            </section>
          </div>

          <div className="flex flex-col justify-between items-center md:items-end my-4 w-full">
            {
              (profileData?.username === username) && <button className="btn w-full md:w-max" onClick={(e) => setShowEdit(true)}>Edit Profile</button>
            }
          </div>

          {
            showEdit && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <Edit profile={userProfile} setShow={setShowEdit} />
            </div>
          }

        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full mt-20">
        <div className="flex flex-col items-center md:items-start w-full gap-4">
          <About profile={userProfile} />
          <Timeline projects={userProfile?.coursesEnrolled} />
        </div>
      </div>

    </div>
  );
}