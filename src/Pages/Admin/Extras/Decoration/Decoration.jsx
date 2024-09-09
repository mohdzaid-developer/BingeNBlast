import "./Decoration.scss";
import { toast } from "react-hot-toast";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import decoration from "../../../../Assets/decoration.png";
import noImg from "../../../../Assets/noImg.jpg";
import deleteIcon from "../../../../Assets/delete.png";

// Redux
import { useDispatch } from "react-redux";

//State Slice
import {
  handleFormOpen,
  handleFormTitle,
  handlePath,
  getItemId,
  setEditItem,
  setFormData,
} from "../../../../Redux/Slices/Admin/State/formSlice";

//Api Slice
import {
  useGetDecorationsQuery,
  useDeleteDecorationMutation,
} from "../../../../Redux/Slices/Admin/Api/apiSlice";

//Hex to Image
import { HexToImage } from "../../../../Utils/HexToImage";



const Decoration = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetDecorationsQuery();
  const [deleteDecoration] = useDeleteDecorationMutation();

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
    dispatch(handleFormTitle("Add new decoration"));
    dispatch(handlePath(`${window.location.pathname}`));
  };

  const handleDelete = async (id) => {
    const response = await deleteDecoration(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };
  const handleEdit = (card) => {
    dispatch(handlePath(`${window.location.pathname}`));
    dispatch(handleFormTitle("Edit decoration details"));
    dispatch(handleFormOpen());
    dispatch(setEditItem(true));
    dispatch(getItemId(card.uid));
    dispatch(
      setFormData({
        itemsName: card.itemsName,
        details: card.details,
        price: card.price,
      })
    );
  };

  return (
    <>
      <Form />
      <Navbar title="Decorations" image={decoration} />
      <section className="decoration">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Decoration!</button>
        </div>

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
                const { uid, price, itemsName, details, imagesJsonArray } =
                  card;
                const hexValues = imagesJsonArray
                  ? [imagesJsonArray.image]
                  : [];

                return (
                  <div className="card" key={uid}>
                    <img
                      src={deleteIcon}
                      onClick={() => handleDelete(uid)}
                      className="delete"
                      alt=""
                    />
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
                        <button onClick={() => handleEdit(card)}>Edit</button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Decoration;
