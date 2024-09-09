import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <div className="red-blob"></div>
      <div className="blue-blob"></div>
      <h1>Page not found!</h1>
      <Link to="/">Go back to Home</Link>
    </section>
  );
};

export default Error;
