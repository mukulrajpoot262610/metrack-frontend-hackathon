import React from "react";
import CourseCarousel from "./CourseCarousel";
import ProjectCarousel from "./ProjectCarousel";
import Stats from "./Stats";

export default function DashboardComponent({ data, projects }) {
  console.log("ddata", data);
  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full p-4 space-y-8 bg-blue-50 rounded-xl">
        <Stats courses={data?.length || 0} projects={projects?.length || 0} />
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-blue-300">Recent Courses</h2>
          <CourseCarousel data={data} />
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-blue-300">Recent Projects</h2>
          <ProjectCarousel data={projects} />
        </div>
      </div>
    </section>
  );
}
