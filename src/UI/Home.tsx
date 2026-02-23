import "../Styles/Home.css";

import p1 from "../assets/Product 1.png";
import p2 from "../assets/Product 2.png";
import p3 from "../assets/Product 3.png";

const products = [
  {
    id: 1,
    name: "Cucumber Pore Tightening Toner",
    price: 260,
    reviews: 86,
    size: "120ml",
    image: p1,
    desc: "Prevents Pimples, Reduces dark spots",
  },
  {
    id: 2,
    name: "Papaya Deep Cleanse Face Wash",
    price: 240,
    reviews: 161,
    size: "150ml",
    image: p2,
    desc: "Helps in de tans, Brightens complexion",
  },
  {
    id: 3,
    name: "Ocean Anti Hair Fall Shampoo",
    price: 145,
    reviews: 102,
    size: "120ml",
    image: p3,
    desc: "Anti hair fall, healthier shine",
  },
];

function Home() {
  return (
    <div className="home-container">

      <div className="home-left">
        <h2>🌿 Bestsellers</h2>
        <button>View All</button>
      </div>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="size">{item.size}</div>

            <div className="reviews">
              ⭐⭐⭐⭐⭐ {item.reviews} reviews
            </div>

            <h3>{item.name}</h3>
            <p className="desc">{item.desc}</p>

            <p className="price">₹{item.price}.00</p>

            <select>
              <option>{item.size}</option>
            </select>

            <button className="cart-btn">Add To Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
