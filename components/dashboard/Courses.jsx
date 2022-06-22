import React from "react";
import UseRedirectOnAuth from "../../hooks/UseIsAuthenticated";
import CourseContent from "./CourseContent";
import Sidebar from "./Sidebar";

export default function Courses() {
  const { isAuth } = UseRedirectOnAuth("/");

  return (
    <div className="grid grid-cols-12 gap-4 pt-4 pb-10">
      <Sidebar />
      <CourseContent />
    </div>
  );
}
