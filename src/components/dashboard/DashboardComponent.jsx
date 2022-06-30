import React from "react";
import Stats from "./Stats";

export default function DashboardComponent({ data, projects }) {
  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full p-4 space-y-8 bg-blue-50 rounded-xl">
        <Stats courses={data?.length || 0} projects={projects?.length || 0} />
      </div>
    </section>
  );
}
