import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";
import CounterWithObject from "./components/CounterWithObject";
import Data from "./components/Data";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("some title");
  const handleClick = () => {
    setTitle("some changed title");
  };
  return (
    <>
      {/* <Header />
      <h1> kuch bhi</h1>
      <p> dusra kuch bhi</p>
      <div className="abc">
        <p>lorem</p>
      </div>
      <div className="nav">
        <ul>
          <li></li>
        </ul>
      </div>
      *5
      <br></br>
      <StudentList />
      <Counter />

      <CounterWithObject /> */}
      <h3>{title} </h3>

      <Data ct={handleClick} />
    </>
  );
}

export default App;
