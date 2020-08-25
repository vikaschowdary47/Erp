import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddStudent.css";
import { StudentContext } from "../StudentContext";

const AddStudent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [classNum, setClassNum] = useState("");
  const [division, setDivision] = useState("");
  const [status, setStatus] = useState("");
  const [students, setStudents] = useContext(StudentContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const student = {
      name: name,
      date: selectedDate,
      school: school,
      class: classNum,
      division: division,
      status: status,
      id: "11",
    };
    setStudents((prevStudents) => [...prevStudents, student]);
    console.log(student);
  };

  return (
    <div className="addstudent mt-5">
      <div className="addstudent__body">
        <h3 className="mb-5">Add Student</h3>
        <form onSubmit={onSubmit}>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Full Name
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Date of Birth
            </label>
            <div className="col-sm-8">
              <DatePicker
                maxDate={new Date()}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="text-center"
              />
            </div>
            {/* button */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                School
              </label>
              <div className="col-sm-5">
                {/* <input type="text" className="form-control" id="name" /> */}
                {/* <div class="col"> */}
                <input
                  type="text"
                  name="inst"
                  className="form-control"
                  list="institution"
                  placeholder="Select"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
                <datalist id="institution">
                  <option value="Schoolool Karmala" />
                  <option value="KKR" />
                  <option value="Sri Chaitanya" />
                  <option value="Narayana" />
                </datalist>
                {/* </div> */}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Class
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="class"
                  className="form-control"
                  list="class"
                  placeholder="Select"
                  value={classNum}
                  onChange={(e) => setClassNum(e.target.value)}
                />
                <datalist id="class">
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
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Division
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="division"
                  className="form-control"
                  list="division"
                  placeholder="Select"
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
            </div>
            <fieldset>
              <div className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                <div className="col-sm-10 radios">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="true"
                      onChange={() => setStatus("Active")}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Active
                    </label>
                  </div>
                  <div className="form-check ml-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="false"
                      onChange={() => setStatus("InActive")}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="button-save text-center">
            <button className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
