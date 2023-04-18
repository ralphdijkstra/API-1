import React from "react";
import { SideBar } from "../Components/Dashboard";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-[15%_85%] w-full h-full min-h-screen bg-black">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
