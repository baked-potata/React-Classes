import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./Data.js";
import { useState } from "react";

function App() {
  const [travelData, setTravelData] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {travelData.map((item) => {
          return <Main key={data.key} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
