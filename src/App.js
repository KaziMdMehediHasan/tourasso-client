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
import ManageOrders from "./components/ManageOrders/ManageOrders";
import NotFound from "./components/NotFound/NotFound";

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
          <PrivateRoute path="/manageallorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
