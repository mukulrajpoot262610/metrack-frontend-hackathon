import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Sidebar from "../../components/Common/Sidebar";
import ProjectContent from "../../components/Common/ProjectContent";
import { getProjects } from "../../services/api";
import { ProtectedRoute } from "../../utils/ProtectedRoute";

export default function EnrolledCourses() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data?.data || []);
      } catch (err) {
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
