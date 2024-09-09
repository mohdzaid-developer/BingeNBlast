import "./Contact.scss";
import { useState } from "react";
import toast from "react-hot-toast";

//Api Slices
import { usePostMessageMutation } from "../../../../../Redux/Slices/Admin/Api/apiSlice";

const Contact = () => {
  const [postMessage] = usePostMessageMutation();

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postMessage(user);
    if (response) {
      toast.success("Message sent successfully!");
      setUser({
        full_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } else {
      toast.error("Please try again!");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3>Send us a message</h3>
        <div className="main">
          <div className="form">
            <div className="left">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  autoComplete="off"
                  value={user.full_name}
                  name="full_name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone number"
                  autoComplete="off"
                  value={user.phone_number}
                  name="phone_number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  autoComplete="off"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="right">
              <textarea
                placeholder="Please enter your event details..."
                value={user.message}
                name="message"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
