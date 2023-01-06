import React from "react";
import logo from "../sam-goodgame-a96Pb3auxDo-unsplash.jpg";
function Header(props) {
  return (
    <div className="video-header">
      <img src={logo} alt="" />
      <div className="caption">
        <h1>title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quos
          suscipit accusantium, mollitia qui, corporis voluptatem quae facilis
          soluta ab perferendis tenetur pariatur et reiciendis consequatur,
          perspiciatis harum optio esse.
        </p>
        <div className="d-flex">
          <span>Action</span>
          <span>Comedy</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
