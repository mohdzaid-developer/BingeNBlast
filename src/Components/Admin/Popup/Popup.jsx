import "./Popup.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// MUi
import { Box, Modal } from "@mui/material";

//Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Reducers
import { handlePopupClose } from "../../../Redux/Slices/Admin/State/popupSlice";
import { logout } from "../../../Redux/Slices/Admin/State/authSlice";

const Popup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.popup.open);

  const handlePopupCloseModal = () => {
    dispatch(handlePopupClose());
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out!");
    navigate("/admin/login");
    sessionStorage.removeItem("token");
    dispatch(handlePopupClose());
  };

  return (
    <div className="popup">
      <Modal
        open={open}
        onClose={handlePopupCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popup-box">
          <h2>Are you sure ?</h2>
          <div className="buttons">
            <button className="yes" onClick={handleLogout}>
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

export default Popup;
