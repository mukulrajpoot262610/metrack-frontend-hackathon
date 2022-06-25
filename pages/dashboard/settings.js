import React from "react";
import SettingsContent from "../../components/dashboard/SettingsContent";
import Sidebar from "../../components/dashboard/Sidebar";

export default function SettingComp() {
  return <>
    <div className="grid grid-cols-12 gap-4 pt-4 pb-10 my-16">
      <Sidebar />
      <SettingsContent />
    </div>
  </>
}
