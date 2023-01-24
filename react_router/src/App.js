import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
