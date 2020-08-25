import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar/Sidebar";
import StudentTable from "./StudentTable/StudentTable";
import AddStudent from "./AddStudent/AddStudent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Students.css";

const Students = () => {
  return (
    <Router>
      <div>
        <Head />
        <div className="student">
          <Sidebar />
          <Switch>
            <Route exact to="/students">
              <StudentTable />
            </Route>
            <Route exact to="/students/add">
              <AddStudent />
            </Route>
            <div className="Student__body"></div>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Students;
