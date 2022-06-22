import React from "react";
import UseRedirectOnAuth from "../../hooks/UseIsAuthenticated";
import DashboardComponent from "./DashboardComponent";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const { isAuth } = UseRedirectOnAuth("/");

  return (
    <div className="grid grid-cols-12 gap-4 pt-4 pb-10">
      <Sidebar />
      <DashboardComponent />
    </div>
  );
}
