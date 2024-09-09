import "./Cakes.scss";
import { toast } from "react-hot-toast";

// Images
import noImg from "../../../../../Assets/noImg.jpg";

// Api Slices
import { useGetCakesQuery } from "../../../../../Redux/Slices/Admin/Api/apiSlice";

//Hex to Image Function
import { HexToImage } from "../../../../../Utils/HexToImage";

const Cakes = ({ changeHandler, info }) => {
  const { data, error, isLoading } = useGetCakesQuery();

  if (error) {
    toast("Something went wrong!");
  }

  return (
    <section className="cakes-container">
      <h3>Cakes</h3>
      {isLoading && !data ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="cards">
          {data && data.data.length === 0 ? (
            <h1 className="no-data">No Data!</h1>
          ) : (
            data.data.map((card) => {
              const { id, uid, price, itemsName, details, imagesJsonArray } =
                card;

              const hexValues = imagesJsonArray ? [imagesJsonArray.image] : [];
              return (
                <div className="card" key={id}>
                  {hexValues.length > 0 ? (
                    <HexToImage
                      hexValues={hexValues}
                      name={`addon-image-${uid}`}
                    />
                  ) : (
                    <img src={noImg} alt="" className="cake-image" />
                  )}
                  <div className="content">
                    <h4>{itemsName}</h4>
                    <p>{details}</p>
                    <div className="action">
                      <p>₹ {price}</p>
                      {info && info.cake && info.cake.id == id ? (
                        <button
                          className="button_remove"
                          onClick={() => {
                            changeHandler({ cake: null });
                          }}
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            changeHandler({ cake: { id, price, itemsName } });
                          }}
                        >
                          add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </section>
  );
};

export default Cakes;
