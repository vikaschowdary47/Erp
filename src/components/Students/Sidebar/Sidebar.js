import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <h3>Students</h3>
        <ul class="list-group">
          <li class="list-group-item list-group-item-secondary active">
            - <Link>View Students</Link>
          </li>
          <li class="list-group-item list-group-item-dark">
            - <Link>Add Student</Link>
          </li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
