import "../Styles/Men.css";

import p1 from "../assets/Product 19.png";
import p2 from "../assets/Product 20.png";
import p3 from "../assets/Product 21.png";

const menProducts = [
  {
    id: 1,
    name: "Face Wash",
    image: p1,
  },
  {
    id: 2,
    name: "Body Lotion",
    image: p2,
  },
  {
    id: 3,
    name: "Shaving Cream",
    image: p3,
  },
];

function Men() {
  return (
    <div className="men-container">

      <h2 className="men-title">Men Care</h2>

      <div className="men-grid">
        {menProducts.map((item) => (
          <div className="men-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Men;