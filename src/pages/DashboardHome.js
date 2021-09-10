import React from "react";
import AddHotel from "../components/Dashboard/AddHotel";
import DashboardNav from "../components/Dashboard/DashboardNav";

export default function DashboardHome() {
  return (
    <div className="dashboard-home">
      <DashboardNav />
      <AddHotel />
    </div>
  );
}
