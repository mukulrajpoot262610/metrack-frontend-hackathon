import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CourseContent() {
  const data = [1, 2];

  const router = useRouter()
  const path = router.pathname

  const elements = data.map((i, j) => {
    return (
      <div
        key={j}
        className="p-4 hover:border-red-400 hover:border overflow-hidden shadow bg-base-100 rounded-xl"
      >
        <figure className="overflow-hidden rounded-md aspect-h-1 aspect-w-2">
          <img
            src="https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes"
          />
        </figure>
        <section className="p-0 py-2 card-body">
          <h2 className="text-sm font-bold card-title">Title</h2>
          <div className="flex items-center gap-2">
            <img src="avatar.svg" className="h-10 border rounded-full" />
            <h1 className="text-sm font-medium text-gray-500">channel</h1>
          </div>
          <div className="flex items-center justify-between card-actions">
            <div className="flex items-center gap-1">
              <img src="/like.png" className="h-10" />
              <p className="font-semibold">4</p>
            </div>
            <button className="capitalize border border-red-200 btn btn-sm btn-ghost hover:bg-red-50">
              continue watching
            </button>
          </div>
        </section>
      </div>
    );
  });

  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="space-y-2">
          {
            path === '/dashboard/courses' && <h2 className="text-sm font-bold text-red-400">Enrolled Courses</h2>
          }

          {
            data.length === 0 ? <div className="w-full flex justify-center items-center flex-col h-full mt-8">
              <img src="/no-data.svg" className="h-64" />
              <h1 className="mt-8 font-bold text-2xl">No Courses Found...</h1>
              {
                path === '/dashboard/courses' && <>
                  <p className="my-2">Try Enrolling in some courses.</p>
                  <Link href="/explore">
                    <button className="btn btn-ghost border border-red-300 mt-6 hover:bg-red-50">Explore Courses</button>
                  </Link>
                </>
              }
            </div> : <div className="grid grid-cols-1 gap-4 mt-4 z-20 sm:grid-cols-2 lg:grid-cols-3">
              {elements}
            </div>
          }

        </div>
      </div>
    </section>
  );
}
