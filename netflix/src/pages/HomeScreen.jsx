import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Row from "../components/Row";

function HomeScreen(props) {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Row />
      </div>
    </div>
  );
}

export default HomeScreen;
