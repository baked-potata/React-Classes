import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg py-0 border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand lg">
          GharBecho
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav px-3 ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark px-4">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <a
                href="#"
                className="nav-link dropdown-toggle text-dark"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/" className="dropdown-item">
                  {" "}
                  1 BHK{" "}
                </Link>
                <Link to="/" className="dropdown-item">
                  {" "}
                  2 BHK{" "}
                </Link>
                <Link to="/" className="dropdown-item">
                  {" "}
                  3 BHK{" "}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark px-4">
                About Us
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/" className="nav-link btn btn-outline contact-us px-4">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
