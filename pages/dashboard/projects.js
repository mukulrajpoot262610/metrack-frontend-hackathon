import React, { useEffect, useState } from "react";
import Sidebar from "components/dashboard/Sidebar";
import toast from "react-hot-toast";
import ProjectContent from "components/common/ProjectContent";
import { getProjects } from "services/api";
import { ProtectedRoute } from "utils/ProtectedRoute";

export default function EnrolledCourses() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data?.data || []);
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
          <ProjectContent projects={projects} />
        </div>
      </ProtectedRoute>
    </>
  );
}
