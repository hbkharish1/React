import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../Components/login.component";
import SignUp from "../Components/signup.component";
import Dashboard from '../Components/Dashboard';
import ProductList from '../Consumers/ProductList';
import Counter from '../Components/Counter';
// import InputForm from '../Components/InputForm';
export default function Routing() {
    return (
      <div><Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Redux" component={Counter} />
            <Route path="/ProductList" component={ProductList} />
          </Switch>
          </Router>
      </div>
    );
  }