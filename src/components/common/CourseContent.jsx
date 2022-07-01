import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import CourseCard from "components/common/CourseCard";

export default function CourseContent({ courses }) {
  const router = useRouter();
  const path = router.pathname;

  const elements = courses.map((i) => {
    return <CourseCard key={i._id} data={i} />;
  });

  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="space-y-2">
          {path === "/dashboard/courses" && (
            <h2 className="text-sm font-bold text-blue-400 uppercase">
              Enrolled Courses
            </h2>
          )}

          {courses.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full mt-8">
              <img alt="no-data" src="/no-data.svg" className="h-40 mt-10" />
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
