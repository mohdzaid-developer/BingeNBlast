import "./Theater.scss";

// Components
import AddOns from "./Components/AddOns/AddOns";
import Cakes from "./Components/Cakes/Cakes";
import Checkout from "./Components/Checkout/Checkout";
import Event from "./Components/Event/Event";
import Hero from "./Components/Hero/Hero";



// Redux
import { useDispatch, useSelector } from "react-redux";

// State Slice
import { setInfo } from "../../../Redux/Slices/User/State/modalSlice";

const Theater = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.modal.info);

  const changeHandler = (props) => {
    dispatch(setInfo({ ...info, ...props }));
  };

  return (
    <section className="theater">
      <Hero info={info} />
      <Checkout info={info} />
      <Event changeHandler={changeHandler} info={info} />
      <Cakes changeHandler={changeHandler} info={info} />
      <AddOns changeHandler={changeHandler} info={info} />
    </section>
  );
};

export default Theater;
