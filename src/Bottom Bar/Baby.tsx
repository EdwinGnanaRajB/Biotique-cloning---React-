import "../Styles/Baby.css";

import p1 from "../assets/Product 16.png";
import p2 from "../assets/Product 17.png";
import p3 from "../assets/Product 18.png";

const babyProducts = [
  {
    id: 1,
    name: "Baby Shampoo",
    image: p1,
  },
  {
    id: 2,
    name: "Baby Wash",
    image: p2,
  },
  {
    id: 3,
    name: "Baby Oil cleanser ",
    image: p3,
  },
];

function Baby() {
  return (
    <div className="baby-container">

      <h2 className="baby-title">Baby Care</h2>

      <div className="baby-grid">
        {babyProducts.map((item) => (
          <div className="baby-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Baby;