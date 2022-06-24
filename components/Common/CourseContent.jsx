import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaArrowAltCircleRight, FaUsers } from 'react-icons/fa'

export default function CourseContent({ courses }) {

  const router = useRouter()
  const path = router.pathname

  const elements = courses.map((data, j) => {
    return (
      <div key={j} className="max-w-sm duration-200 hover:shadow-lg border cursor-pointer card bg-base-100 border-t-0 border-black">
        <figure>
          <img src={data?.thumbnail} alt="Shoes" />
        </figure>
        <div className="p-4 card-body">
          <h2 className="font-semibold card-title hover:underline capitalize text-lg">{data?.name}</h2>
          <p className="text-gray-400 font-light">{data?.description}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaUsers className="text-xl" />
              <p className="font-semibold flex items-center gap-1">{data?.respect} <span className="text-xs font-normal">students</span></p>
            </div>
            {
              path === '/dashboard/courses' && <button className="border border-blue-200 btn btn-sm btn-ghost hover:bg-blue-50">
                Continue Watching
              </button>
            }
            <Link href={`/explore/${data._id}`}>
              <a className="flex items-center gap-2 text-base">
                View <FaArrowAltCircleRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="space-y-2">
          {
            path === '/dashboard/courses' && <h2 className="text-sm font-bold text-blue-400">Enrolled Courses</h2>
          }

          {
            courses.length === 0 ? <div className="w-full flex justify-center items-center flex-col h-full mt-8">
              <img src="/no-data.svg" className="h-64" />
              <h1 className="mt-8 font-bold text-2xl">No Courses Found...</h1>
              {
                path === '/dashboard/courses' && <>
                  <p className="my-2">Try Enrolling in some courses.</p>
                  <Link href="/explore">
                    <button className="btn btn-ghost border border-blue-300 mt-6 hover:bg-blue-50">Explore Courses</button>
                  </Link>
                </>
              }
            </div> : <div className="grid grid-cols-1 gap-6 mt-4 z-20 sm:grid-cols-2 lg:grid-cols-3">
              {elements}
            </div>
          }

        </div>
      </div>
    </section>
  );
}
