import "./Sidebar.scss";
import { Link } from "react-router-dom";

// Component
import Popup from "../../Admin/Popup/Popup";

// Images
import logo from "../../../Assets/logo.png";
import booking from "../../../Assets/calendar.png";
import message from "../../../Assets/message.png";
import payment from "../../../Assets/money.png";
import theater from "../../../Assets/theater.png";
import decoration from "../../../Assets/decoration.png";
import addon from "../../../Assets/addon.png";
import cake from "../../../Assets/cake.png";
import logout from "../../../Assets/logout.png";

//Redux
import { useDispatch } from "react-redux";

//State Slice
import { handlePopupOpen } from "../../../Redux/Slices/Admin/State/popupSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(handlePopupOpen());
  };
  return (
    <>
      <Popup />
      <section className="sidebar">
        <div className="top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="links">
            <div className="link">
              <img src={booking} alt="" />
              <Link to="/admin/bookings">Bookings</Link>
            </div>
            <div className="link">
              <img src={message} alt="" />
              <Link to="/admin/messages">Messages</Link>
            </div>
            <div className="link">
              <img src={payment} alt="" />
              <Link to="/admin/payments">Payments</Link>
            </div>
            <div className="link">
              <img src={theater} alt="" />
              <Link to="/admin/theaters">Theaters</Link>
            </div>
            <div className="link">
              <img src={decoration} alt="" />
              <Link to="/admin/decorations">Decorations</Link>
            </div>
            <div className="link">
              <img src={cake} alt="" />
              <Link to="/admin/cakes">Cakes</Link>
            </div>
            <div className="link">
              <img src={addon} alt="" />
              <Link to="/admin/add-ons">Add ons</Link>
            </div>
          </div>
        </div>

        <div className="logout">
          <div className="link">
            <img src={logout} alt="" />
            <button onClick={handleOpenModal}>Logout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
