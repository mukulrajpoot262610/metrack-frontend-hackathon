import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import Sidebar from "../../components/dashboard/Sidebar";

export default function Dashboard() {
  return <div className="grid grid-cols-12 gap-4 pt-4 pb-10 mt-16">
    <Sidebar />
    <DashboardComponent />
  </div>;
}
