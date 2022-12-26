import React from "react";
import StaffList from "../components/StaffList";
import StudentList from "../components/StudentList";
function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <StudentList />
      <StaffList />
    </div>
  );
}

export default Home;
