import "./Celebrations.scss";
import { Link } from "react-router-dom";

// Images
import img1 from "../../../../../Assets/img1.png";
import img2 from "../../../../../Assets/img2.png";
import img3 from "../../../../../Assets/img3.png";
import img4 from "../../../../../Assets/img4.png";
import img5 from "../../../../../Assets/img5.png";
import img6 from "../../../../../Assets/img6.png";
import img7 from "../../../../../Assets/img7.png";
import img8 from "../../../../../Assets/img8.png";

// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Celebrations = () => {
  const cardsData = [
    {
      img: img1,
      title: "Birthday",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img2,
      title: "Anniversary",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img3,
      title: "Proposal",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img4,
      title: "Bride to Be",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img5,
      title: "Baby Shower",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img6,
      title: "Farewell",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img7,
      title: "Reunion",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
    {
      img: img8,
      title: "Kitty Party",
      desc: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras",
    },
  ];

  return (
    <section className="celebrations">
      <div className="blue-blob1"></div>
      <div className="blue-blob2"></div>
      <div className="red-blob"></div>

      <div className="content">
        <h2>
          We’ll make your next <br />
          celebration very special!
        </h2>
        <p>
          Binge'n Blast welcomes you for an extraordinary private theatre
          experience with personalized decor. <br /> Our exclusive premium
          private theatres feature enhanced 4K resolution with DOLBY atoms sound
          system.
        </p>
      </div>

      {window.innerWidth > 850 ? (
        <div className="cards">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="content">
                <img src={card.img} alt="" />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              <div className="button">
                <Link to="/theaters">Book now !</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          loop={true}
          grabCursor={true}
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          className="carousel"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="card">
              <div className="content">
                <img src={card.img} alt="" />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              <div className="button">
                <Link to="/theaters">Book now !</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Celebrations;
