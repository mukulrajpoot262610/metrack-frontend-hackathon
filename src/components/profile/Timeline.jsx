import ProjectContent from "components/common/ProjectContent";
import React from "react";

export default function Timeline({ projects }) {

  return (
    <div className="px-4 py-2 custom-overlay w-full">
      <h2 className="py-2 font-bold text-blue-500 border-b uppercase">Courses</h2>
      <div className="py-2">
        <ProjectContent projects={projects} cols={4} />
      </div>
    </div>
  );
}
