import "../Styles/Natural makeup.css";

import p1 from "../assets/Product 25.png";
import p2 from "../assets/Product 26.png";
import p3 from "../assets/Product 27.png";

const makeupProducts = [
  {
    id: 1,
    name: "Lipstick",
    image: p1,
  },
  {
    id: 2,
    name: "Foundation",
    image: p2,
  },
  {
    id: 3,
    name: "Compact",
    image: p3,
  },
];

function NaturalMakeup() {
  return (
    <div className="makeup-container">

      <h2 className="makeup-title">Natural Makeup</h2>

      <div className="makeup-grid">
        {makeupProducts.map((item) => (
          <div className="makeup-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default NaturalMakeup;