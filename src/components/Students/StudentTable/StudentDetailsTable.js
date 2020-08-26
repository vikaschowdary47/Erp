import React, { useContext } from "react";
import { StudentContext } from "../StudentContext";

const StudentDetailsTable = ({ search }) => {
  const [students, setStudents] = useContext(StudentContext);

  let filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.name.toLowerCase()) &&
      // student.Age.toLowerCase().includes(search.Age.toLowerCase()) &&
      student.school.toLowerCase().includes(search.school.toLowerCase()) &&
      student.class.toLowerCase().includes(search.class.toLowerCase()) &&
      student.division.toLowerCase().includes(search.division.toLowerCase())
    );
  });
  return (
    <div style={{ overflowX: "auto" }} className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">School</th>
            <th scope="col">Class</th>
            <th scope="col">Division</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, i) => (
            <tr key={i}>
              <th scope="row">{i}</th>
              <td>{student.name}</td>
              <td>{student.Age}</td>
              <td>{student.school}</td>
              <td>{student.class}</td>
              <td>{student.division}</td>
              <td>{student.status}</td>
              <td>
                <a href="##">EDIT</a>{" "}
                <a href="##" className="danger">
                  DELETE
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsTable;
