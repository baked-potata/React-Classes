import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Featured from "./components/Featured";
import NewProduct from "./components/NewProduct";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
