import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(props) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div id="notfound">
      <div className="notfound container">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
}

export default PageNotFound;
