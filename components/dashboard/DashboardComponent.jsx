import React from "react";
import Carousel from "./Carousel";
import Stats from "./Stats";

export default function DashboardComponent() {
  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full p-4 space-y-4 bg-red-50 rounded-xl">
        <Stats />
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-red-300">Recent Courses</h2>
          <Carousel />
        </div>
      </div>
    </section>
  );
}
