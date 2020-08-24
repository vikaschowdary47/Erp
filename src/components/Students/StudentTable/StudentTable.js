import React from "react";
import "./StudentTable.css";

const StudentTable = () => {
  return (
    <div className="filter__fields">
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        {/* <input type="text" placeholder="School"> */}
        {/* <button className="dropdown-toggle dropdown-toggle-split"></button> */}
        {/* </input> */}
      </form>
    </div>
  );
};

export default StudentTable;
