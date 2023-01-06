import React from "react";
import { SwiperSlide } from "swiper/react";
function Card(props) {
  return (
    <SwiperSlide>
      <div className="card">
        <div className="card-body">item</div>
      </div>
    </SwiperSlide>
  );
}

export default Card;
