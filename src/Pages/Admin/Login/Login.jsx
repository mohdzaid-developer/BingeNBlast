import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

//Redux
import { useDispatch } from "react-redux";

//State Slice
import { login } from "../../../Redux/Slices/Admin/State/authSlice";

//Api Slice
import { useAdminLoginMutation } from "../../../Redux/Slices/Admin/Api/apiSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminLogin] = useAdminLoginMutation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await adminLogin(loginData);
    if (response.data) {
      toast.success("Login Successful!");
      dispatch(login());
      sessionStorage.setItem("token", response.data.data.accessToken);
      navigate("/admin/bookings");
      setLoginData({
        email: "",
        password: "",
      });
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };

  return (
    <>
      <section className="admin-login">
        <div className="red-blob"></div>
        <div className="blue-blob"></div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
