import "./CommonSections.scss";
import { Link } from "react-router-dom";

//Images
import homeImg1 from "../../../../../Assets/homeImg1.png";
import homeImg2 from "../../../../../Assets/homeImg2.png";
import homeImg3 from "../../../../../Assets/homeImg3.png";
import homeImg4 from "../../../../../Assets/homeImg4.png";
import homeImg5 from "../../../../../Assets/homeImg5.png";
import homeImg6 from "../../../../../Assets/homeImg6.png";

const CommonSections = () => {
  const commonData = [
    {
      id: 1,
      title: "Decoration",
      desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      className: "straight",
      img: homeImg1,
    },
    {
      id: 2,
      title: "Food & Beverages",
      desc: "Save your favorites easily and always have something to watch.",
      className: "reverse",
      img: homeImg2,
    },
    {
      id: 3,
      title: "Cakes",
      desc: "Save your favorites easily and always have something to watch.",
      className: "straight",
      img: homeImg3,
    },
    {
      id: 4,
      title: "Roses & Bouquet",
      desc: "Save your favorites easily and always have something to watch.",
      className: "reverse",
      img: homeImg4,
    },
    {
      id: 5,
      title: "Screening",
      desc: "Save your favorites easily and always have something to watch.",
      className: "straight",
      img: homeImg5,
    },
    {
      id: 6,
      title: "Photography",
      desc: "Save your favorites easily and always have something to watch.",
      className: "reverse",
      img: homeImg6,
    },
  ];
  return (
    <section className="common-section">
      <div className="content">
        <h2>What we offer</h2>
        <p>
          We aim to provide everything you need to enjoy your special moments.{" "}
          <br />
          Our comprehensive offerings include
        </p>
      </div>
      {commonData.map((item) => (
        <div className={`card ${item.className}`} key={item.id}>
          <div className={`container ${item.className}`}>
            {item.className === "reverse" && <div className="blob"></div>}
            <div className="data">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/theaters">Book now !</Link>
            </div>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommonSections;
