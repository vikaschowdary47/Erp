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
      division: "E",
      id: 2,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "12",
      school: "Narayana",
      class: "4",
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
      Age: "12",
      school: "Narayana",
      class: "5",
      division: "B",
      id: 5,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "14",
      school: "LEAD School Karmala",
      class: "7",
      division: "C",
      id: 6,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "11",
      school: "Sri Chaitanya",
      class: "4",
      division: "D",
      id: 7,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "15",
      school: "LEAD School Karmala",
      class: "10",
      division: "C",
      id: 8,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "Sri Chaitanya",
      class: "8",
      division: "A",
      id: 9,
      status: "Active",
    },
    {
      name: "Student Name",
      Dob: "10/5/2010",
      Age: "10",
      school: "KKR",
      class: "6",
      division: "D",
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
