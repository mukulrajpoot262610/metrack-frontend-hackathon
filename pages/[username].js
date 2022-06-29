import React, { useEffect, useState } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getProfile } from '../services/api';
import { useRouter } from 'next/dist/client/router';
import {
  FaEdit,
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
import ParseMarkdown from '../components/markdown/ParseMarkdown';
import ProjectContent from '../components/Common/ProjectContent';

const Profile = () => {

  const [profile, setProfile] = useState({
    avatar: "/profile.png",
    name: "Mukul Rajpoot",
    headline: "Full-Stack Developer",
    github: "mukulrajpoot262610",
    linkedin: "sifgewi",
    instagram: "sifgewi",
    facebook: "sifgewi",
    twitter: "sifgewi",
    website: "sifgewi",
    skills: ['react', 'nextjs']
  })
  const { user } = useSelector((state) => state.auth);
  const router = useRouter()

  const username = router.query.username
  console.log(username)

  const markdown = `[![GitHub stats](https://github-readme-stats.vercel.app/api?username=${profile.github}&count_private=true&show_icons=true&show_owner=true)](https://github.com/${profile.github})`


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await getProfile(username);
  //       setProfile(data?.data);
  //     } catch (err) {
  //       console.log(err)
  //       toast.error(err?.response?.data?.msg);
  //     }
  //   };
  //   // username && fetchData();
  // }, [username]);

  console.log(profile)

  return (
    <div className="pb-10 mt-20 overflow-hidden">
      <div className="h-32 lg:h-60 bg-blue-100 w-full rounded-2xl" ></div>

      <div className="w-full min-h-screen">
        {
          profile ? (
            <>
              <div className="relative w-full">
                <img src={profile?.avatar ? profile?.avatar : "/profile.png"} className="absolute -top-32 md:-top-20 ring-1 left-4 md:left-8 object-cover rounded-full h-28 w-28 md:h-40 md:w-40 self-center" alt="" />

                <div className="mt-24 md:mt-0 md:ml-48 flex flex-col md:flex-row justify-between items-start w-auto px-4 py-2">
                  <div className="flex flex-col items-start sm:items-start w-full sm:w-max">
                    <h1 className="tracking-tight font-semibold text-3xl">{profile?.name}</h1>
                    <h3 className=" font-semibold text-sm leading-normal">{profile?.headline}</h3>
                    <section className='text-xl flex items-center mt-2 gap-2'>
                      {
                        profile?.github ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.github}><FaGithub /></a> : ""
                      }
                      {
                        profile?.instagram ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.instagram}><FaInstagram /></a> : ""
                      }
                      {
                        profile?.facebook ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.facebook}><FaFacebookF /></a> : ""
                      }
                      {
                        profile?.website ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.website}><FaGlobe /></a> : ""
                      }
                      {
                        profile?.twitter ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.twitter}><FaTwitter /></a> : ""
                      }
                      {
                        profile?.linkedin ? <a target="_blan" className="border p-2  rounded-full hover:border-blue-500" href={profile?.linkedin}><FaLinkedinIn /></a> : ""
                      }
                    </section>
                  </div>
                  <button className='btn gap-2 btn-wide mt-4 lg:mt-0 flex justify-center items-center bg-blue-500 border-0 hover:bg-blue-400'> <FaEdit /> Edit</button>
                </div>
              </div>

              {/* PROFILE */}
              <div className="w-full flex flex-col md:flex-row">

                <div className="h-full w-full md:w-2/3 p-4">
                  {/* LEFT */}
                  <div className="p-2">
                    <h1 className="font-bold text-xl uppercase text-blue-500">About</h1>
                    <hr />
                    <p className="text-2xl my-4">
                      <ParseMarkdown>
                        {profile?.about ||
                          "Describe what you are good at. Update your profile."}
                      </ParseMarkdown>
                    </p>
                  </div>

                  <div className="p-2">
                    <h1 className="font-bold text-xl uppercase text-blue-500">GitHub Stats</h1>
                    <hr />
                    <ParseMarkdown>
                      {markdown}
                    </ParseMarkdown>
                  </div>

                  <div className="p-2">
                    <h1 className="font-bold text-xl uppercase text-blue-500">Projects</h1>
                    <hr />
                    <ProjectContent projects={[]} cols={2} />
                  </div>
                </div>

                <div className=" h-full w-full md:w-1/3 p-4">
                  {/* RIGHT */}
                  <div className="p-2">
                    <h1 className="font-bold text-xl uppercase text-blue-500">Info</h1>
                    <hr />
                    <section className="grid grid-cols-2">
                      <div className="flex flex-col items-center p-4">
                        <h2 className="text-3xl font-bold text-blue-500">{projects || 0}</h2>
                        <p className="uppercase text-xs font-bold">projects</p>
                      </div>
                      <div className="flex flex-col items-center p-4">
                        <h2 className="text-3xl font-bold text-blue-500">{courses || 0}</h2>
                        <p className="uppercase text-xs font-bold">courses</p>
                      </div>
                    </section>
                  </div>
                  <div className="p-2">
                    <h1 className="font-bold text-xl uppercase text-blue-500">Skills</h1>
                    <hr />
                    <div className="flex flex-wrap justify-start items-center my-4 gap-2">
                      {
                        profile?.skills?.map((e, i) => <h1 key={i} className="bg-blue-50 font-bold text-blue-400 p-1 px-3 rounded-lg border border-blue-500">{e}</h1>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='w-full flex justify-center items-center h-half'>
              <LoaderIcon size="large" />
            </div>
          )
        }
      </div>
      {/* <Profile data={profile} user={user} /> */}
    </div>
  )
}

export default Profile