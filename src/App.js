import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Student from "./components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Route path="/students">
          <Student />
        </Route>
      </Router>
    </div>
  );
}

export default App;
