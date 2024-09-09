import "./Theaters.scss";
import { toast } from "react-hot-toast";

//Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

//Images
import theater from "../../../Assets/theater.png";
import noImg from "../../../Assets/theaterImg.png";

//Redux
import { useGetTheatersQuery } from "../../../Redux/Slices/Admin/Api/apiSlice";

const Theaters = () => {
  const { data, error, isLoading } = useGetTheatersQuery();

  if (error) {
    toast.error("Something went wrong!");
  }

  return (
    <>
      <Navbar title="Theaters" image={theater} />
      <section className="admin-theaters">
        <div className="blue-blob"></div>
        <div className="red-blob"></div>
        {data && data.data.length === 0 ? (
          <h1 className="no-data">No data!</h1>
        ) : (
          <>
            {isLoading ? (
              <div className="loading">
                <h1>Loading...</h1>
              </div>
            ) : (
              <div className="cards">
                {data &&
                  data.data.map((card) => {
                    const {
                      uid,
                      theaterName,
                      details,
                      price,
                      imagesJsonArray,
                    } = card;

                    return (
                      <div className="card" key={uid}>
                        <div className="content">
                          <img src={noImg} alt="" />
                          <h3>{theaterName}</h3>
                          <p>{details}</p>
                        </div>
                        <div className="action">
                          <h3>₹ {price}</h3>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Theaters;
