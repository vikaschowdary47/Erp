import React, { useContext } from "react";
import { StudentContext } from "../StudentContext";

const StudentDetailsTable = () => {
  const [students, setStudents] = useContext(StudentContext);
  return (
    <div>
      <table className="table table-striped">
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
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
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
