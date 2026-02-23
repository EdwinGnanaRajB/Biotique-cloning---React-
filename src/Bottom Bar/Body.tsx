import "../Styles/Body.css";

import p1 from "../assets/Product 13.png";
import p2 from "../assets/Product 14.png";
import p3 from "../assets/Product 15.png";

const bodyProducts = [
  {
    id: 1,
    name: "Body Wash",
    image: p1,
  },
  {
    id: 2,
    name: "Body Lotion",
    image: p2,
  },
  {
    id: 3,
    name: "Body Scrub",
    image: p3,
  },
];

function Body() {
  return (
    <div className="body-container">

      <h2 className="body-title">Body Care</h2>

      <div className="body-grid">
        {bodyProducts.map((item) => (
          <div className="body-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Body;