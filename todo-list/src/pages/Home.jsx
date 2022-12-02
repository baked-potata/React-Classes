import React from "react";
import { Outlet } from "react-router-dom";
import illustration from "../images/illustration.png";

function Home(props) {
  return (
    <div className="container-fluid h-100 ">
      <div className="row h-100">
        <div className="col-md-6 bg-dark h-100 text-white text-center p-4 home-heading d-flex align-items-center justify-content-center flex-column">
          <h1 className="py-1 my-4">
            {" "}
            An App to <br /> Make Your Life <br />
            <span className="text-uppercase display-3">Easy</span>
          </h1>
          <img src={illustration} className="img-fluid my-4" alt="" />
        </div>
        <div className="col-md-6">
          <Outlet />

          {/* tag from react-router-dom to display the child route component */}
        </div>
      </div>
    </div>
  );
}

export default Home;
