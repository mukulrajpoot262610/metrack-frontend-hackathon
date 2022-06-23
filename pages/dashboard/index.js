import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import Sidebar from "../../components/dashboard/Sidebar";

export default function index() {
  return <div className="grid grid-cols-6 gap-4 pt-4 pb-10">
    <Sidebar />
    <DashboardComponent />
  </div>;
}
