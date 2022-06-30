import React, { useEffect, useState } from "react";
import CourseContent from "components/common/CourseContent";
import Sidebar from "components/dashboard/Sidebar";
import { getEnrolledCourses } from "services/api";
import toast from "react-hot-toast";
import { ProtectedRoute } from "utils/ProtectedRoute";

export default function EnrolledCourses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEnrolledCourses();
        setData(data?.data || []);
      } catch (err) {
        // console.log(err);
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ProtectedRoute>
        <div className="grid grid-cols-12 gap-4 pt-4 pb-10 mt-16">
          <Sidebar />
          <CourseContent courses={data} />
        </div>
      </ProtectedRoute>
    </>
  );
}
