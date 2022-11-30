import React from "react";
import { FaChevronDown } from "react-icons/fa";
import banner from "../images/840a7c09663cc1e7a0eb.webp";

function Main(props) {
  return (
    <div className="container py-4 mt-2 my-auto">
      {/* ?text data */}
      <div className="row">
        <h1 className="display-2 heading-1 col">
          <strong>Discover a place you'll love to live.</strong>
        </h1>
        <div className="right-data col my-auto m-3">
          <p className="lead">Beautiful Homes. Incredible Locations.</p>
          <p className="lead"> Pricing that makes sense.</p>
          <div className="row ">
            <div className="col text-muted ">City</div>
            <div className="col text-muted">Type</div>
            <div className="w-100"></div>
            <div className="col city  ">
              Kasauli{" "}
              <span>
                <FaChevronDown />
              </span>
            </div>
            <div className="col city type ">
              Bunglow{" "}
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      <img src={banner} alt="banner" className="img-fluid" />
    </div>
  );
}

export default Main;
