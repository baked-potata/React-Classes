import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products(props) {
  return (
    <div>
      Products
      <div className="nav">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Products;
