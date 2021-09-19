import React, { useContext } from "react";
import AddHotel from "../components/Dashboard/AddHotel";
import Enquiries from "../components/Dashboard/Enquiries";
import Messages from "../components/Dashboard/Messages";
import AuthContext, { AuthProvider } from "../context/AuthContext";
import DashboardMenu from "../components/Dashboard/Menu/DashboardMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardHome from "../components/Dashboard/DashboardHome";


export default function Dashboard() {
  const [auth] = useContext(AuthContext);


  if(auth) {
    return (
      <AuthProvider>
        <Router>
          <DashboardMenu />
          <div className="dashboard">
            <Switch>
            <div className="dashboard__right">
              <Route exact path="/dashboard">
                  <DashboardHome />
              </Route>
              <Route exact path="/dashboard/add-hotel">
                  <AddHotel />
              </Route>
              <Route exact path="/dashboard/messages">
                  <Messages />
              </Route>
              <Route exact path="/dashboard/booking-requests">
                  <Enquiries />
              </Route>
            </div>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    );
  }

}
