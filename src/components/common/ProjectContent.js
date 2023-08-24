import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Project from "./Project";

export default function ProjectContent({ projects = [], cols = 3 }) {
  const router = useRouter();
  const path = router.pathname;

  const elements = projects.map((i) => {
    return <Project key={i._id} project={i} />;
  });

  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="space-y-2">
          {path === "/profile" && (
            <h2 className="text-sm font-bold text-blue-400 uppercase">
              Submissions
            </h2>
          )}

          {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full mt-8">
              <img alt="no-data" src="/no-data.svg" className="h-40 mt-10" />
              <h1 className="mt-8 text-2xl font-bold">No projects Found...</h1>
              {path === "/profile" && (
                <>
                  <p className="my-2">
                    Enroll in courses and build your own projects.
                  </p>
                  <Link href="/explore">
                    <button className="mt-6 border border-blue-300 btn btn-ghost hover:bg-blue-50">
                      Explore Courses
                    </button>
                  </Link>
                </>
              )}
            </div>
          ) : (
            <>
              {cols === 2 ? (
                <div className="z-20 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 lg:grid-cols-2">
                  {elements}
                </div>
              ) : (
                <div className="z-20 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                  {elements}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
