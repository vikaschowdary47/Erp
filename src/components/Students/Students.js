import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar/Sidebar";
import StudentTable from "./StudentTable/StudentTable";
import AddStudent from "./AddStudent/AddStudent";
import { Switch, Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import "./Students.css";

const Students = () => {
  return (
    // <Router>
    <div>
      <Head />
      <div className="student">
        <StudentProvider>
          <Sidebar />
          <Switch>
            <Route exact path="/students">
              <StudentTable />
            </Route>
            <Route exact path="/students/add">
              <AddStudent />
            </Route>
            {/* <div className="Student__body"></div> */}
          </Switch>
        </StudentProvider>
      </div>
    </div>
    // </Router>
  );
};

export default Students;
