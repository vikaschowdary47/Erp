import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar/Sidebar";
import StudentTable from "./StudentTable/StudentTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Students.css";

const Students = () => {
  return (
    <div>
      <Head />
      <div className="student">
        <Router>
          <Sidebar />
          <StudentTable />
          <div className="Student__body"></div>
        </Router>
      </div>
    </div>
  );
};

export default Students;
