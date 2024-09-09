import "./CheckoutModal.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

// MUI
import { Box, Modal } from "@mui/material";

//Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// State Slice
import {
  setModalClose,
  setInfo,
} from "../../../../../Redux/Slices/User/State/modalSlice";
import {
  setCheckoutActive,
  setSlot,
} from "../../../../../Redux/Slices/User/State/checkoutSlice";

//Api SLice
import { useBookSlotMutation } from "../../../../../Redux/Slices/User/Api/apiSlice";

const CheckoutModal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [bookSlot] = useBookSlotMutation();

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const date = useSelector((state) => state.checkout.date);
  const slot = useSelector((state) => state.checkout.slot);
  const person = useSelector((state) => state.checkout.person);
  const grandTotal = useSelector((state) => state.checkout.grandTotal);
  const theater = useSelector((state) => state.checkout.theater);
  const info = useSelector((state) => state.modal.info);

  const handlePopupCloseModal = () => {
    dispatch(setModalClose());
  };

  const [user, setUser] = useState({
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await bookSlot({
        ...user,
        ...info,
        theaterUid: id,
        noOfPersons: person,
        bookedDate: date,
        price: grandTotal,
        theaterName: theater.theaterName,
        timeSlotId: slot.slotId,
        bookedSlot: slot.timing,
      });

      if (response) {
        toast.success("Booking Successful!");
        setUser({
          customerName: "",
          phoneNumber: "",
          customerEmail: "",
        });
        dispatch(setModalClose());
        dispatch(setInfo(null));
        dispatch(setCheckoutActive(false));
        dispatch(setSlot(null));
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handlePopupCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-popup-box">
          <h2>Checkout</h2>

          <div className="details">
            {theater && (
              <p>
                <span>Venue:</span> {theater.theaterName}{" "}
              </p>
            )}
            <p>
              <span>Date:</span> {date}
            </p>
            <p>
              <span>Slot:</span> {slot && slot.timing}
            </p>
            <p>
              <span>Persons:</span> {person}
            </p>
            <p>
              <span>Price:</span> ₹{grandTotal}
            </p>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Name"
              name="customerName"
              value={user.customerName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="customerEmail"
              value={user.customerEmail}
              onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <button className="yes" onClick={handleSubmit}>
              Yes
            </button>
            <button className="no" onClick={handlePopupCloseModal}>
              No
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
