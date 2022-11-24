import "./Card.css";
import star from "../../images/star.png";
// import katie from "../../images/katie-zaferes.png";

export default function Card(props) {
  // console.log(props.detail.img);
  return (
    <div className="card">
      {/* <div className="card--badge">
        {" "}
        {props.detail.openSpots === 0
          ? "Sold Out"
          : `${props.detail.openSpots} Spots Available`}
      </div> */}
      {!props.detail.openSpots && <div className="card--badge">Sold Out</div>}
      <img
        src={require(`../../images/${props.detail.coverImg}`)}
        alt=""
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="" />
        <span>{props.detail.stats.rating}</span>
        <span className="gray">
          ({props.detail.stats.reviewCount}) • &nbsp;
        </span>
        <span className="gray">USA</span>
      </div>
      <p>{props.detail.title}</p>
      <p>
        <strong>From ${props.detail.price}</strong> / person
      </p>
    </div>
  );
}
