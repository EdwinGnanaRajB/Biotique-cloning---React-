import "../Styles/Hair.css";

import p1 from "../assets/Product 10.png";
import p2 from "../assets/Product 11.png";
import p3 from "../assets/Product 12.png";

const hairProducts = [
  {
    id: 1,
    name: "Shampoo",
    image: p1,
  },
  {
    id: 2,
    name: "Conditioner",
    image: p2,
  },
  {
    id: 3,
    name: "Hair Oil",
    image: p3,
  },
];

function Hair() {
  return (
    <div className="hair-container">

      <h2 className="hair-title">Hair Care</h2>

      <div className="hair-grid">
        {hairProducts.map((item) => (
          <div className="hair-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Hair;