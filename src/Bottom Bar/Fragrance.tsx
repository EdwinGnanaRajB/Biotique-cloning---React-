import "../Styles/Fragrance.css";

import p1 from "../assets/Product 22.png";
import p2 from "../assets/Product 23.png";
import p3 from "../assets/Product 24.png";

const fragranceProducts = [
  {
    id: 1,
    name: "Cologne",
    image: p1,
  },
  {
    id: 2,
    name: "Saffron",
    image: p2,
  },
  {
    id: 3,
    name: "Lavender",
    image: p3,
  },
];

function Fragrance() {
  return (
    <div className="fragrance-container">

      <h2 className="fragrance-title">Fragrance</h2>

      <div className="fragrance-grid">
        {fragranceProducts.map((item) => (
          <div className="fragrance-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Fragrance;