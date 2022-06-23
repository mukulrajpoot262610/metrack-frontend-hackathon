import React from "react";
import CourseContent from "../../components/Common/CourseContent";
import Sidebar from "../../components/dashboard/Sidebar";

export default function EnrolledCourses() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 pt-4 pb-10">
        <Sidebar />
        <CourseContent courses={[]} />
      </div>
    </>
  );
}
