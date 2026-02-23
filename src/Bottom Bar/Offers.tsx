import "../Styles/Offers.css";
import banner from "../assets/Offers-banner.png";

function Offers() {
  return (
    <div className="offers-page">

      {/* 🔥 Offer Banner */}
      <div className="offer-banner">

        {/* Left content */}
        <div className="offer-left">
          <h2>Limited Period Offer</h2>
          <p>Rs.899 Get Flat 25% OFF</p>
          <button>SHOP NOW</button>
        </div>

        {/* Right image */}
        <div className="offer-right">
          <img src={banner} alt="Offer" />
        </div>

      </div>

      {/* 🔥 Bottom Info */}
      <div className="offer-info">

        <div className="info-box">
          <span>📦</span>
          <div>
            <h4>Free Shipping</h4>
            <p>On Prepaid Orders Above ₹499</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="info-box">
          <span>💳</span>
          <div>
            <h4>COD Available</h4>
            <p>₹40 + Extra Shipping Charges</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Offers;