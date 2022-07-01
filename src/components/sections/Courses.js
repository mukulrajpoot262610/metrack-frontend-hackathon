import Link from "next/link";
import React from "react";
import CourseCard from "components/common/CourseCard";

const COURSES = [
  {
    id: 0,
    _id: "62bb37317bbb60feb01b4bd4",
    name: "Build A Whatsapp Clone With MERN Stack",
    channel: "Clever Programmer",
    description:
      "In this FREE LIVE training, Sonny and David will build a MERN Stack Whatsapp Clone LIVE  and deploy it with firebase & Heroku!🚀🔥 This course will  help you to master React JS and make an income with your new skills or get hired in top tech companies.",
    thumbnail: "https://img.youtube.com/vi/gzdQDxzW2Tw/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/gzdQDxzW2Tw",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj",
    students: ["0", "s", "l", "l", "i"],
    respect: 8,
  },
  {
    id: 1,
    _id: "62bb3ec97bbb60feb01b4cb0",
    name: "2022 Flutter Master Class Travel App | Tutorial for Beginners to Advanced | iOS & Android App",
    channel: "dbestech",
    description:
      "From this tutorial we build a flutter cubit state management app. We will build it step by step. We will also build the ui and do api request.",
    thumbnail: "https://img.youtube.com/vi/x4DydJKVvQk/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/x4DydJKVvQk",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLSyCq8OAzGjhpoDNhEzP6rF4S35341A9Wd133E6=s48-c-k-c0x00ffffff-no-rj",
    students: ["0", "s"],
  },
  {
    id: 2,
    _id: "62bb40d87bbb60feb01b4d30",
    name: "File sharing app with deployment in Node Js, Express Js, Mongo DB in Hindi in 2020",
    channel: "Coder's Gyan",
    description:
      "This will be a file sharing app in node Js in Hindi. In this project we will build apis for a file sharing app using Node Js, Express Js and Mongo DB. We will learn how to upload a file in Node Js. For that we will use a package called Multer. We will also use nodemailer to send emails using free SMTP from our node server. Finally we will deploy this project on the live server. We will deploy it on Heroku server. We will also schedule a script on the server so we could delete 24 hours old files from the storage.",
    thumbnail: "https://img.youtube.com/vi/_xKCi5OI_Mg/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/_xKCi5OI_Mg",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLTKC5Ndcl2a27tMzcPDArrP8ZJdfRvj_EB5E6JV=s48-c-k-c0x00ffffff-no-rj",
    students: ["0", "s", "l"],
    respect: 5,
  },
];

const Courses = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen gap-4 my-32">
      <h1 className="text-3xl font-bold text-center lg:text-5xl">
        Trending courses of the month
      </h1>
      <p className="text-lg font-medium text-center">
        These are the selected courses from YouTube to build your focus on
        learning rather than finding courses.
      </p>

      <div className="grid w-10/12 grid-cols-1 gap-8 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 ">
        {COURSES.map((e) => (
          <Link href={`/courses/${e.slug}`} key={e.id}>
            <CourseCard data={e} />
          </Link>
        ))}
      </div>
      <Link href="/explore">
        <button className="mt-10 bg-blue-200 shadow-lg btn btn-ghost hover:bg-blue-100">
          View More
        </button>
      </Link>
    </div>
  );
};

export default Courses;
