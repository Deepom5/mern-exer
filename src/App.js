import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateItem from "./components/create-item.component";
import CreateCustomer from "./components/create-customer.component";
import CreateVehicle from "./components/create-vehicle.component";
import CreateOrder from "./components/create-order.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/item" component={CreateItem} />
      <Route path="/customer" component={CreateCustomer} />
      <Route path="/vehicle" component={CreateVehicle} />
      <Route path="/order" component={CreateOrder} />
      
      </div>
    </Router>
  );
}

export default App;
