import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import Sidebar from "../../components/dashboard/Sidebar";
import UseRedirectOnAuth from "../../hooks/UseIsAuthenticated";
import { getEnrolledCourses, getProjects } from "../../services/api";

export default function Dashboard() {
  const { user, isAuth } = UseRedirectOnAuth();
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEnrolledCourses();
        const projects = await getProjects();
        console.log(projects, data, "projects");
        setData(data?.data || []);
        setProjects(projects?.data?.data || []);
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 pt-4 pb-10 mt-16">
      <Sidebar />
      <DashboardComponent data={data} projects={projects} />
    </div>
  );
}
