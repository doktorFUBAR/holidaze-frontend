import React, { useContext } from "react";
import AddHotel from "../components/Dashboard/AddHotel";
import Messages from "../components/Dashboard/Messages";
import AuthContext from "../context/AuthContext";


export default function DashboardHome() {
  const [auth] = useContext(AuthContext);

  if(auth) {
    return (
      <div className="dashboard-home">
        <AddHotel />
        <Messages />
      </div>
    );
  }

}
