import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CourseContent from "../../components/Common/CourseContent";
import { getPublishedCourses } from "../../services/api";

const Explore = () => {

  const [response, setResponse] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getPublishedCourses()
        setResponse(data.data)
      } catch (err) {
        console.log(err)
        toast.error(err.response.data.msg)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="flex items-start pt-20 justify-center min-h-screen gap-10 pb-10">
      <div className="w-1/5 p-2 border-r">
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          All Classess
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Trending
        </h2>
        <h3 className="mt-4 text-xs font-bold text-gray-400 uppercase">
          Technologies
        </h3>
        <hr className="mb-4" />
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          React
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Angular
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Vue
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Flutter
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Nodejs
        </h2>
        <h2 className="p-2 px-4 my-1 font-semibold cursor-pointer hover:bg-blue-50 rounded-xl">
          Django
        </h2>
      </div>
      <div className="w-4/5">
        <div className="relative flex justify-end overflow-hidden bg-blue-50 h-96 rounded-3xl">
          <h1 className="absolute font-black text-blue-200 uppercase -translate-y-1/2 text-9xl left-20 top-1/2">
            React
          </h1>
          <img src="/hero_2.svg" className="w-1/2" />
        </div>

        <div className="flex items-center justify-end p-3">
          <p className="text-xs font-bold text-gray-400 uppercase">Sort by:</p>
          <select className="w-64 ml-4 select select-sm select-bordered">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <hr />

        <CourseContent courses={response} />

      </div>
    </div>
  );
};

export default Explore;
