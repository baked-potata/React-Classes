import { useState } from "react";
import "./StudentList.css";

function StudentList() {
  //array of objects
  const studentData = [
    { id: 1, name: "abc", fee: 18000, gender: "female" },
    { id: 2, name: "abc1", fee: 18000, gender: "male" },
    { id: 3, name: "abc2", fee: 18000, gender: "male" },
    { id: 4, name: "abc3", fee: 18000, gender: "female" },
    { id: 5, name: "abc4", fee: 18000, gender: "male" },
    { id: 6, name: "abc5", fee: 18000, gender: "male" },
    { id: 7, name: "abc6", fee: 18000, gender: "female" },
    { id: 8, name: "abc7", fee: 18000, gender: "male" },

    {
      id: 11,
      name: "Life Lessons with Katie Zaferes",
      description:
        'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
      price: 136,
      coverImg: "katie-zaferes.png",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      location: "Online",
      openSpots: 0,
    },
    {
      id: 12,
      name: "Learn Wedding Photography",
      description:
        "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
      price: 125,
      coverImg: "wedding-photography.png",
      stats: {
        rating: 5.0,
        reviewCount: 30,
      },
      location: "Online",
      openSpots: 27,
    },
    {
      id: 13,
      title: "Group Mountain Biking",
      description:
        "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
      price: 50,
      coverImg: "mountain-bike.png",
      stats: {
        rating: 4.8,
        reviewCount: 2,
      },
      location: "Norway",
      openSpots: 3,
    },
  ];

  const [students, setStudents] = useState(studentData);

  // first variable is used to store data, second is method to update data. it will always be updated using this method.
  //usestate can be used to pass data to first variable.

  // const [counter,setCounter] = useState(0);
  console.log(students);

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
              <tr
                key={item.id}
                className={
                  item.gender === "female"
                    ? "bg"
                    : item.id % 2 === 0
                    ? "even"
                    : ""
                }
              >
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
