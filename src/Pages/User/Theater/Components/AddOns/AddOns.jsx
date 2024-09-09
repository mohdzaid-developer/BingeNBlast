import "./AddOns.scss";
import { toast } from "react-hot-toast";

// Images
import noImg from "../../../../../Assets/noImg.jpg";

// Api Slices
import { useGetAddonsQuery } from "../../../../../Redux/Slices/Admin/Api/apiSlice";

//Hex to Image Function
import { HexToImage } from "../../../../../Utils/HexToImage";

const AddOns = ({ changeHandler, info }) => {
  const { data, error, isLoading } = useGetAddonsQuery();

  if (error) {
    toast("Something went wrong!");
  }

  return (
    <section className="addOns-container">
      <h3>Add On's</h3>
      {isLoading ? (
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
                      {info &&
                      info.addOns &&
                      info.addOns.some((addon) => addon.id === id) ? (
                        <button
                          className="button_remove"
                          onClick={() => {
                            const updatedAddOns = info.addOns.filter(
                              (addon) => addon.id !== id
                            );
                            changeHandler({ addOns: updatedAddOns });
                          }}
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            const newAddOn = { id, price, itemsName };
                            const updatedAddOns = (info.addOns || []).concat(
                              newAddOn
                            );
                            changeHandler({ addOns: updatedAddOns });
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

export default AddOns;
