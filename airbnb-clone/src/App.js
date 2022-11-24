import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "./data.js";

function App() {
  // const cards = data.map((item) => {
  //   return (
  //     <Card
  //       key={item.id}
  //       img={item.coverImg}
  //       rating={item.stats.rating}
  //       reviewCount={item.stats.reviewCount}
  //       location={item.location}
  //       title={item.title}
  //       price={item.price}
  //     />
  //   );
  // });

  const [card, setCard] = useState(data);
  // console.log(card);
  return (
    <div>
      <Navbar />
      <Header />
      <section className="card-list">
        {card.map((item) => {
          return <Card key={item.id} detail={item} />;
        })}
      </section>
    </div>
  );
}

export default App;

// export default function App() {
//   const colors = [
//     "Red",
//     "Orange",
//     "Yellow",
//     "Green",
//     "Blue",
//     "Indigo",
//     "Violet",
//   ];
//   return (
//     <div>
//       {colors.map((a) => {
//         console.log({ color: `${a}` });
//         return <h1 style={{ color: `${a}` }}>{a}</h1>;
//       })}
//     </div>
//   );
// }
