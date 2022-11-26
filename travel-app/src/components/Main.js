import React from "react";

function Main(props) {
  console.log(props);
  return (
    <>
      {" "}
      <div className="card">
        <img src={props.imageUrl} alt="" />
        <div className="side-content">
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <h4>
            {props.startDate} - {props.endDate}
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Main;
