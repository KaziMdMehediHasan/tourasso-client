import "./App.css";
import Home from "./components/Home/Home";
import AddService from "./components/AddService/AddService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import MyTrips from "./components/MyTrips/MyTrips";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./components/Login/Login";

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
          <Route path="/offer/:id">
            <OfferDetails></OfferDetails>
          </Route>
          <Route path="/mytrips">
            <MyTrips></MyTrips>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
