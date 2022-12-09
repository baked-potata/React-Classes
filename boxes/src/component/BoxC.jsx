import React from "react";
// import { useState } from "react";

function BoxC(props) {
  // console.log(props);
  // const [on, setOn] = useState(props.on);
  const { id, on } = props.items;
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      className="box"
      style={{ backgroundColor: on ? `black` : `white` }}
      onClick={() => props.handleClick(id)}
    ></div>
  );
}

export default BoxC;
