import "./Checkout.scss";

// Icons
import { FaPlus, FaMinus } from "react-icons/fa";

// Components
import CheckoutModal from "../Modal/CheckoutModal";

// Redux
import { useSelector, useDispatch } from "react-redux";

// State Slice
import {
  setCheckoutActive,
  setPrice,
  setGrandTotal,
} from "../../../../../Redux/Slices/User/State/checkoutSlice";
import { setModalOpen } from "../../../../../Redux/Slices/User/State/modalSlice";

const Checkout = ({ info }) => {
  const dispatch = useDispatch();

  const isCheckoutActive = useSelector(
    (state) => state.checkout.isCheckoutActive
  );
  const date = useSelector((state) => state.checkout.date);
  const slot = useSelector((state) => state.checkout.slot);
  const person = useSelector((state) => state.checkout.person);
  const price = useSelector((state) => state.checkout.price);
  const theater = useSelector((state) => state.checkout.theater);

  const handleCheckoutActive = () => {
    dispatch(setCheckoutActive(!isCheckoutActive));
  };

  if (parseInt(person) <= parseInt(theater.noOfPersons)) {
    dispatch(setPrice(parseInt(theater.price)));
  }

  for (let i = 1; i < 7; i++) {
    if (parseInt(person) === parseInt(theater.noOfPersons) + i) {
      dispatch(
        setPrice(
          parseInt(theater.price) + parseInt(theater.extraPersonCost) * i + 1
        )
      );
    }
  }


  const notNull = (val) => {
    if (val == undefined || val == null) {
      return 0;
    }
    return parseInt(val);
  };

  const grandTotal =
    notNull(price) +
    (info && info.addOns
      ? info.addOns.reduce((sum, addon) => sum + notNull(addon.price), 0)
      : 0) +
    notNull(info && info.cake ? info.cake.price : 0) +
    notNull(info && info.decoration ? info.decoration.price : 0);

  const handleSubmit = () => {
    dispatch(setGrandTotal(grandTotal));
    dispatch(setModalOpen());
  };

  return (
    <>
      <CheckoutModal />
      {window.innerWidth > 1100 ? (
        <section className="desktop-checkout">
          <div className="content">
            <div className="top">
              <h2>Booking Summary</h2>
            </div>

            <div className="main">
              <div className="data">
                <h3>{theater.theaterName}</h3>
                <p>₹ {price}</p>
              </div>
              <div className="date">
                <p>
                  Date:<span> {date}</span>
                </p>
                <p>
                  Slot: <span> {slot && slot.timing}</span>
                </p>
                <p>
                  People: <span> {person}</span>
                </p>
              </div>
              <hr />
            </div>

            <div className="rest">
              <h3>Event Decoration</h3>
              <div className="data">
                {info && info.decoration ? (
                  <div className="data">
                    <p>{info.decoration.itemsName}</p>
                    <p>₹ {info.decoration.price}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <hr />
            </div>

            <div className="rest">
              <h3>Cakes</h3>
              <div className="data">
                {info && info.cake ? (
                  <div className="data">
                    <p>{info.cake.itemsName}</p>
                    <p>₹ {info.cake.price}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <hr />
            </div>

            <div className="rest">
              <h3>Add On’s</h3>

              {info &&
                info.addOns &&
                info.addOns.map((addOn) => (
                  <div className="data" key={addOn.id}>
                    <p>{addOn.itemsName}</p>
                    <p>₹ {addOn.price}</p>
                  </div>
                ))}
              <hr />
            </div>

            <div className="total">
              <h2>Grand Total</h2>
              <h2>₹{grandTotal}</h2>
            </div>
          </div>
          <button onClick={handleSubmit}>Proceed to checkout</button>
        </section>
      ) : (
        <section className="mobile-checkout">
          {isCheckoutActive ? (
            <>
              <div className="top" onClick={handleCheckoutActive}>
                <h2>Booking Summary</h2>
                <FaMinus
                  style={{ color: "white", cursor: "pointer" }}
                  size={16}
                />
              </div>

              <div className="main">
                <div className="data">
                  <h3>{theater.theaterName}</h3>
                  <p>₹ {price}</p>
                </div>
                <div className="date">
                  <p>
                    Date:<span> {date}</span>
                  </p>
                  <p>
                    Slot: <span> {slot && slot.timing}</span>
                  </p>
                  <p>
                    People: <span> {person}</span>
                  </p>
                </div>
                <hr />
              </div>

              <div className="rest">
                <h3>Event Decoration</h3>
                <div className="data">
                  {info && info.decoration ? (
                    <div className="data">
                      <p>{info.decoration.itemsName}</p>
                      <p>₹ {info.decoration.price}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
              </div>

              <div className="rest">
                <h3>Cakes</h3>
                <div className="data">
                  {info && info.cake ? (
                    <div className="data">
                      <p>{info.cake.itemsName}</p>
                      <p>₹ {info.cake.price}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
              </div>

              <div className="rest">
                <h3>Add On’s</h3>
                {info && info.addOns ? (
                  <div className="data">
                    <p>{info.addOns.itemsName}</p>
                    <p>₹ {info.addOns.price}</p>
                  </div>
                ) : (
                  ""
                )}
                <hr />
              </div>

              <div className="total">
                <h2>Grand Total</h2>
                <h2>₹{grandTotal}</h2>
              </div>

              <button onClick={handleSubmit}>Proceed to checkout</button>
            </>
          ) : (
            <div className="top" onClick={handleCheckoutActive}>
              <h2>Booking Summary</h2>
              <FaPlus style={{ color: "white", cursor: "pointer" }} size={16} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Checkout;
