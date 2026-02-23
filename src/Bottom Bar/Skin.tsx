import "../Styles/Skin.css";

import p1 from "../assets/Product 7.png";
import p2 from "../assets/Product 8.png";
import p3 from "../assets/Product 9.png";

const skinProducts = [
  {
    id: 1,
    name: "Face Wash",
    image: p1,
  },
  {
    id: 2,
    name: "Serums",
    image: p2,
  },
  {
    id: 3,
    name: "Moisturisers",
    image: p3,
  },
];

function Skin() {
  return (
    <div className="skin-container">

      <h2 className="skin-title">Skin Care</h2>

      <div className="skin-grid">
        {skinProducts.map((item) => (
          <div className="skin-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skin;