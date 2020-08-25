import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Student from "./components/Students/Students";
import AddStudent from "./components/Students/AddStudent/AddStudent";
import StudentTable from "./components/Students/StudentTable/StudentTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          {/* <Route exact to="/students">
            <StudentTable />
          </Route> */}
        </Switch>
        {/* <Route exact to="/students">
          <StudentTable />
        </Route>
        <Route to="/students/add">
          <AddStudent />
        </Route> */}
        <Route path="/students">
          <Student />
        </Route>
      </Router>
    </div>
  );
}

export default App;
