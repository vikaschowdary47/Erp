import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <h3>Students</h3>
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary active">
            - <Link to="/students">View Students</Link>
          </li>
          <li className="list-group-item list-group-item-dark">
            - <Link to="/students/add">Add Student</Link>
          </li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
