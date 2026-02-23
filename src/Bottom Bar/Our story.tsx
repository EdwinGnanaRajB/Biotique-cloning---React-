import "../Styles/OurStory.css";
import aboutImg from "../assets/about.jpg"; // image add panniko

function OurStory() {
  return (
    <div className="about-container">

      {/* Title */}
      <h2 className="about-title">🌿 About Us</h2>

      {/* Subtitle */}
      <h4 className="about-subtitle">
        WELCOME TO THE NATURAL WORLD OF BIOTIQUE.
      </h4>

      {/* Content */}
      <div className="about-content">

        <p>
          A combination of the 5,000-year-old science of Ayurveda and 21st-century biotechnology. 
          A dream that has today become a global reality. We are synonymous with serious skin and 
          hair care developed from Ayurveda, the principal medical tradition in India for over 5000 years. 
          Longer than long ago, health and beauty were fleeting.
        </p>

        <p>
          Before the pyramids were built, these ancient sages created Ayurveda. It is the science of life; 
          the Sanskrit words 'Ayur' means life and 'veda' means science or knowledge. Ayurveda is the 
          time-tested natural medicinal system that treats the total individual.
        </p>

      </div>

      {/* Image */}
      <div className="about-image">
        <img src={aboutImg} alt="About" />
      </div>

    </div>
  );
}

export default OurStory;