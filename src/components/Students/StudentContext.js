import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 1,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 2,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 3,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 4,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 5,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 6,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 7,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 8,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 9,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "LEAD School Karmala",
      class: "3",
      division: "B",
      id: 10,
      status: "Active",
    },
  ]);
  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};
