import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CourseContent({ courses }) {

  const router = useRouter()
  const path = router.pathname

  const elements = courses.map((data, j) => {
    return (
      <div key={j} className="max-w-sm duration-200 shadow-xl cursor-pointer card bg-base-100 ">
        <figure>
          <img src={data?.thumbnail} alt="Shoes" />
        </figure>
        <div className="p-6 card-body">
          <h2 className="font-bold card-title">{data?.name}</h2>
          <div className="flex items-center gap-2">
            <img src={data?.channelImage} className="h-8 w-8 border rounded-full" />
            <h1 className="font-medium text-gray-500">{data?.channel}</h1>
          </div>
          <div className="flex justify-between items-center card-actions">
            <div className="flex items-center gap-1">
              <img src="/like.png" className="h-10" />
              <p className="font-semibold">{data?.respect}</p>
            </div>
            {
              path === '/dashboard/courses' && <button className="border border-blue-200 btn btn-sm btn-ghost hover:bg-blue-50">
                Continue Watching
              </button>
            }
            <Link href={`/explore/${data._id}`}>
              <button className="border btn-sm border-blue-200 btn btn-ghost hover:bg-blue-50">
                Enroll
              </button>
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
