import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = sessionStorage.getItem("token");

  if (isAuthenticated || token) {
    return children;
  }
  return <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
