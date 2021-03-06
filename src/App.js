// Import React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//UseState
import { useState } from "react";

// Auth Provider
import { AuthProvider } from "./context/AuthContext";

// Page imports
import HomePage from "./pages/HomePage";
import HotelDetails from "./pages/HotelDetails";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NoMatch from "./pages/NoMatch";

// Layout/component imports
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoginModal from "./components/Login/LoginModal";
import { BASE_URL, GQL } from "./constants/api";
import DashboardHome from "./pages/DashboardHome";

// Framer motion import
import { AnimatePresence } from "framer-motion";

//Apollo Client
const client = new ApolloClient({
  uri: BASE_URL + GQL,
  cache: new InMemoryCache(),
});




function App() {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AuthProvider>
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Header handleClick={displayModal} />
            {showModal ? (
              <LoginModal shown={showModal} close={() => setShowModal(false)} />
            ) : null}
            <main>
            <AnimatePresence>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/details/:id">
                <HotelDetails />
              </Route>
              <Route path="/places">
                <Hotels />
              </Route>
              <Route path="/booking/:id">
                <Booking />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/dashboard">
                <DashboardHome />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
            </AnimatePresence>
            </main>
            <Footer />
          </div>
        </ApolloProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
