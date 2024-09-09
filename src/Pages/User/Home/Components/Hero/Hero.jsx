import "./Hero.scss";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../../../Assets/heroImg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="gradient"></div>

      <img src={heroImg} alt="" />

      <div className="content">
        <p>One stop destination for all celebrations</p>
        <h1>
          Enjoy your special moments <br />
          in our Luxurious private <br /> theatres!
        </h1>
      </div>
      <div className="buttons">
        <Link to="/theaters" className="button1">
          Book now !
        </Link>
        <a className="button2" href="#contact">
          Contact Us !
        </a>
      </div>
    </div>
  );
};

export default Hero;
