import React from "react";

const Stats = ({ projects, courses }) => {
  return (
    <div className="p-4 custom-overlay">
      <section className="grid grid-cols-2 p-4">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-3xl font-bold text-blue-500">{projects || 0}</h2>
          <p className="">projects</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <h2 className="text-3xl font-bold text-blue-500">{courses || 0}</h2>
          <p className="">courses</p>
        </div>
      </section>
    </div>
  );
};

export default Stats;
