import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";
import CounterWithObject from "./components/CounterWithObject";
import Data from "./components/Data";
import { useState } from "react";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from "./pages/Services";
import Blog from './pages/Blog'
import Contact from "./pages/Contact";
function App() {
  const [title, setTitle] = useState("some title");
  const handleClick = () => {
    setTitle("some changed title");
  };
  const item=true;

const conditonalRender = () =>
{
if (item)
return <h1>some div </h1>

}

  return (
    <>

{/* {conditonalRender()} */}
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
      {/* <h3>{title} </h3>

    <Data ct={handleClick} /> */}
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />}></Route>

      <Route path='/About' element={<About />}></Route>
      <Route path="/Services" element={<Services />} ></Route>

      <Route path="/Blog" element={<Blog />} ></Route>
      <Route path="/Contact" element={<Contact />} ></Route>

    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
