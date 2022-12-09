import "./App.css";
import React, { useState } from "react";
import boxes from "./boxes";
import BoxC from "./component/BoxC";

function App() {
  const [box, setBox] = useState(boxes);
  const toggle = (id) => {
    console.log(id);
  };
  return (
    <div className="boxholder">
      {box.map((item) => {
        //item is the data from state, i.e. object in box state
        return <BoxC key={item.id} items={item} handleClick={toggle} />;
      })}
    </div>
  );
}

export default App;
