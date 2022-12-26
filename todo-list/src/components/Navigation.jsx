import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import logo from "../images/logo.png";

function Navigation(props) {
  const { loggedUser, setLoggedUser } = useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const response = await fetch(
          `http://localhost:5000/users?email=${localUser}`,
          { method: "GET" }
        );
        if (response.ok) {
          const userDetails = await response.json();
          if (userDetails) {
            setLoggedUser((prev) => ({
              ...prev,
              user: userDetails[0],
              isLoggedIn: true,
            }));
          }
        }
      }
    };
    getUser();
  }, [setLoggedUser]);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    setLoggedUser(() => ({
      user: {},
      isLoggedIn: false,
    }));
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
      <div className="container ">
        <NavLink className="navbar-brand text-warning" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/login"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            {/* profile drop down starts here */}
            {loggedUser.isLoggedIn === true && (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/create-task"
                  >
                    Create Task
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/task-list"
                  >
                    Task List
                  </NavLink>
                </li>
                {/* main drop down menu here */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/profile"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {loggedUser?.user?.UserName}
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-dark bg-white "
                        onClick={logout}
                        to="#"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
