import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";
import CounterWithObject from "./components/CounterWithObject";
function App() {
  return (
    <>
      <Header />
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

      <CounterWithObject />
    </>
  );
}

export default App;
