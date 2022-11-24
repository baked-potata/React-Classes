import "./Header.css";
import headImg from "../../images/photo-grid.png";

export default function Header() {
  return (
    <main>
      <img src={headImg} alt="header" className="header--photo" />
      <h1 className="header--h1">Online Experiences</h1>
      <p className="header--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
