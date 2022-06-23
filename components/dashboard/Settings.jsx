import React from "react";
import UseRedirectOnAuth from "../../hooks/UseIsAuthenticated";
import SettingsContent from "./SettingsContent";
import Sidebar from "./Sidebar";

export default function Settings() {
  const { isAuth } = UseRedirectOnAuth("/");

  return (
    <div className="grid grid-cols-12 gap-4 pt-4 pb-10">
      <Sidebar />
      <SettingsContent />
    </div>
  );
}
