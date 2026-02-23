import "../Styles/GiftPacks.css";

import p1 from "../assets/Product 28.png";
import p2 from "../assets/Product 29.png";
import p3 from "../assets/Product 30.png";

const giftProducts = [
  {
    id: 1,
    name: "Skin Care Kit",
    image: p1,
  },
  {
    id: 2,
    name: "Grooming Kit",
    image: p2,
  },
  {
    id: 3,
    name: "Complete Care Combo",
    image: p3,
  },
];

function GiftPacks() {
  return (
    <div className="gift-container">

      <h2 className="gift-title">Gift Packs</h2>

      <div className="gift-grid">
        {giftProducts.map((item) => (
          <div className="gift-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default GiftPacks;