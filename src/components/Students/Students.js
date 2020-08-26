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
          </Switch>
        </StudentProvider>
      </div>
    </div>
  );
};

export default Students;
