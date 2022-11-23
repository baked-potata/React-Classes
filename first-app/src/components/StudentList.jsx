import { useState } from "react";
import './StudentList.css'

function StudentList() {
  //array of objects
  const studentData = [
    { id: 1, name: "abc", fee: 18000,gender:"female" },
    { id: 2, name: "abc1", fee: 18000,gender:"male" },
    { id: 3, name: "abc2", fee: 18000 ,gender:"male"},
    { id: 4, name: "abc3", fee: 18000 ,gender:"female"},
    { id: 5, name: "abc4", fee: 18000 ,gender:"male"},
    { id: 6, name: "abc5", fee: 18000 ,gender:"male"},
    { id: 7, name: "abc6", fee: 18000 ,gender:"female"},
    { id: 8, name: "abc7", fee: 18000 ,gender:"male"},
  ];

  const [students, setStudents] = useState(studentData);

  // first variable is used to store data, second is method to update data. it will always be updated using this method.
  //usestate can be used to pass data to first variable.

  // const [counter,setCounter] = useState(0);

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
              // <tr key={item.id} className = { item.gender==="female"?"bg":""} >
              <tr key={item.id} className = { item.gender==="female"?"bg":(item.id%2===0?"even":"")} >

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.fee}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
