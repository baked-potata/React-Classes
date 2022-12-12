import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import illustration from "../images/illustration.png";

function Home(props) {
  let activeClassName =
    "bg-primary text-white py-3 w-50 text-decoration-none shadow-sm active";
  let nonActiveClass =
    "py-3 bg-dark text-white w-50 text-decoration-none opacity-75";
  return (
    <div className="container-fluid abc  ">
      <div className="row h-100 d-flex   ">
        <div className="col-md-6 d-none d-md-flex bg-dark abc h-100 text-white text-center p-5 home-heading align-items-center justify-content-center flex-column ">
          <h1 className="py-1 my-4">
            {" "}
            An App to <br /> Make Your Life <br />
            <span className="text-uppercase display-3">Easy</span>
          </h1>
          <img src={illustration} className="img-fluid my-4" alt="" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card home-card  w-50">
            <div className="card-header d-flex p-0 text-center border-0 bg-white shadow-sm rounded">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeClassName : nonActiveClass
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? activeClassName : nonActiveClass
                }
              >
                Register
              </NavLink>
            </div>
            <div className="card-body py-4 d-flex align-items-center justify-content-center">
              <Outlet />
            </div>
          </div>

          {/* tag from react-router-dom to display the child route component */}
        </div>
      </div>
    </div>
  );
}

export default Home;
// bg-white text-primary py-3 w-50
