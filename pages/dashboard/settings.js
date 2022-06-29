import React from "react";
import SettingComponent from "../../components/Dashboard/SettingsComponent";
import Sidebar from "../../components/common/Sidebar";
import { ProtectedRoute } from "../../utils/ProtectedRoute";

export default function SettingComp() {
  return <>
    <ProtectedRoute>
      <div className="grid grid-cols-12 gap-4 pt-4 pb-10 my-16">
        <Sidebar />
        <SettingComponent />
      </div>
    </ProtectedRoute>
  </>
}
