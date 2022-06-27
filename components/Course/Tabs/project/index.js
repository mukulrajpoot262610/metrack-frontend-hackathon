import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Project from "../../../Common/Project";

export default function Projects({ course }) {

  const { user } = useSelector(state => state.auth)

  const elements = course?.projects.map((i) => {
    return <Project project={i} key={i._id} />;
  });

  return (
    <div>
      <div className="flex justify-end">
        {user?.courseEnrolled?.includes(course?._id) ? (
          <Link href={`/project/submission/?courseId=${course._id}`}>
            <a className="btn modal-button btn-primary">submit project</a>
          </Link>
        ) : null}
      </div>
      {
        elements.length === 0 && <div className="flex flex-col items-center justify-center w-full h-full ">
          <img src="/projects.svg" className="h-60 mt-10" />
          <h1 className="mt-8 text-2xl font-bold">Submit your project...</h1>

          <p className="my-1 text-center text-sm">Enroll in this course to submit your project. And be the first one to submit.</p>
        </div>
      }
      {
        elements.length > 0 && <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3">
          {elements}
        </div>
      }


    </div>
  );
}
