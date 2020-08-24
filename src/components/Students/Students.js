import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar/Sidebar";
import "./Students.css";

const Students = () => {
  return (
    <div className="student">
      <Head />
      <div className="Student__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default Students;
