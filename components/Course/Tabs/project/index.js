import Link from "next/link";
import React, { useState } from "react";
import Project from "../../../Common/Project";

export default function Projects({ course }) {
  const elements = course?.projects.map((i) => {
    return <Project project={i} key={i._id} />;
  });

  return (
    <div>
      <div className="flex justify-end">
        {course?._id ? (
          <Link href={`/project/submission/?courseId=${course._id}`}>
            <a className="btn modal-button btn-primary">submit project</a>
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        {elements}
      </div>
    </div>
  );
}
