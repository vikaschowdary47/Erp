import React, { useState } from "react";
import "./StudentTable.css";
import StudentDetailsTable from "./StudentDetailsTable";

const StudentTable = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [classNum, setClassNum] = useState("");
  const [division, setDivision] = useState("");
  return (
    <div className="details">
      <div className="filter__fields">
        <form>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="inst"
                className="form-control"
                list="institution"
                placeholder="School"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
              <datalist id="institution">
                <option value="	LEAD School Karmala" />
                <option value="KKR" />
                <option value="Sri Chaitanya" />
                <option value="Narayana" />
              </datalist>
            </div>
            <div className="col">
              <input
                type="text"
                name="inst"
                className="form-control"
                list="className"
                placeholder="Class"
                value={classNum}
                onChange={(e) => setClassNum(e.target.value)}
              />
              <datalist id="className">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
                <option value="6" />
                <option value="7" />
                <option value="8" />
                <option value="9" />
                <option value="10" />
              </datalist>
            </div>
            <div className="col">
              <input
                type="text"
                name="inst"
                className="form-control"
                list="division"
                placeholder="Division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
              />
              <datalist id="division">
                <option value="A" />
                <option value="B" />
                <option value="C" />
                <option value="D" />
                <option value="E" />
              </datalist>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-secondary ml-3">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="main__table">
          <StudentDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
