import { useState } from "react";

function StudentList() {
  //array of objects
  const studentData = [
    { id: 1, name: "abc", fee: 18000 },
    { id: 2, name: "abc1", fee: 18000 },
    { id: 3, name: "abc2", fee: 18000 },
    { id: 4, name: "abc3", fee: 18000 },
    { id: 5, name: "abc4", fee: 18000 },
    { id: 6, name: "abc5", fee: 18000 },
    { id: 7, name: "abc6", fee: 18000 },
    { id: 8, name: "abc7", fee: 18000 },
  ];

  const [students, setStudents] = useState(studentData);

  // first variable is used to store data, second is method to update data. it will always be updated using this method.
  //usestate can be used to pass data to first variable.

  return (
    <div>
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>fee</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.fee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
