import React from "react";
// import { useState } from "react";

function BoxC(props) {
  // console.log(props);
  // const [on, setOn] = useState(props.on);
  const { id, on } = props.items;
  return (
    <div
      className="box"
      style={{ backgroundColor: on ? "red" : "blue" }}
      onClick={() => props.handleClick(id)}
    ></div>
  );
}

export default BoxC;
