import React from "react";
import { useState } from "react";
// import data from "./Data.js";

function Data(props) {
  const [data, setdata] = useState("Data");
  const handleClick = () => {
    setdata("some another data");
    props.ct();
  };
  return (
    <div>
      <h2>{data}</h2>
      {/* <button onClick={props.ct}>Change data</button> */}
      <button onClick={handleClick}>Change data</button>
    </div>
  );
}

export default Data;
