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
import DashboardHome from "./pages/DashboardHome";

// Layout/component imports
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoginModal from "./components/Login/LoginModal";
import { BASE_URL, GQL } from "./constants/api";

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
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/dashboard">
                <DashboardHome />
              </Route>
            </Switch>
            <Footer />
          </div>
        </ApolloProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
