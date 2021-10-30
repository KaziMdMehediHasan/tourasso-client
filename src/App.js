import "./App.css";
import Home from "./components/Home/Home";
import AddService from "./components/AddService/AddService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import MyTrips from "./components/MyTrips/MyTrips";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path exact="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/offer/:id">
            <OfferDetails></OfferDetails>
          </PrivateRoute>
          <PrivateRoute path="/mytrips">
            <MyTrips></MyTrips>
          </PrivateRoute>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
