import "../Styles/Collections.css";

import p1 from "../assets/Product 4.png";
import p2 from "../assets/Product 5.png";
import p3 from "../assets/Product 6.png";

const collections = [
  {
    id: 1,
    name: "Advanced Ayurveda",
    image: p1,
  },
  {
    id: 2,
    name: "Advanced Organics",
    image: p2,
  },
  {
    id: 3,
    name: "BXL Cellular",
    image: p3,
  },
];

function Collections() {
  return (
    <div className="collections-container">

      <h2 className="title">Collections</h2>

      <div className="collections-grid">
        {collections.map((item) => (
          <div className="collection-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Collections;