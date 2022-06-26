import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaArrowAltCircleRight, FaUsers } from "react-icons/fa";

export default function CourseContent({ courses }) {
  const router = useRouter();
  const path = router.pathname;

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const elements = courses.map((data, j) => {
    return (
      <div
        key={j}
        className="max-w-sm duration-200 border border-t-0 border-black cursor-pointer hover:shadow-lg card bg-base-100"
      >
        <Link href={`/explore/${data._id}`}>
          <figure>
            <img src={data?.thumbnail} alt="Shoes" />
          </figure>
        </Link>
        <div className="p-4 card-body">
          <Link href={`/explore/${data._id}`}>
            <h2 className="text-lg font-semibold leading-tight tracking-tight capitalize card-title hover:underline">
              {truncateString(data?.name, 50)}
            </h2>
          </Link>
          <p className="text-xs font-light text-gray-400">
            {truncateString(data?.description, 100)}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaUsers className="text-xl" />
              <p className="flex items-center gap-1 font-semibold">
                {data?.respect}{" "}
                <span className="text-xs font-normal">students</span>
              </p>
            </div>
            {path === "/dashboard/courses" && (
              <button className="border border-blue-200 btn btn-sm btn-ghost hover:bg-blue-50">
                Continue Watching
              </button>
            )}
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
          {path === "/dashboard/courses" && (
            <h2 className="text-sm font-bold text-blue-400">
              Enrolled Courses
            </h2>
          )}

          {courses.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full mt-8">
              <img src="/no-data.svg" className="h-64" />
              <h1 className="mt-8 text-2xl font-bold">No Courses Found...</h1>
              {path === "/dashboard/courses" && (
                <>
                  <p className="my-2">Try Enrolling in some courses.</p>
                  <Link href="/explore">
                    <button className="mt-6 border border-blue-300 btn btn-ghost hover:bg-blue-50">
                      Explore Courses
                    </button>
                  </Link>
                </>
              )}
            </div>
          ) : (
            <div className="z-20 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {elements}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
