import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button className="btn btn-danger" onClick={() => navigate("order")}>
        {" "}
        CLick me
      </button>
    </div>
  );
}

export default Home;
