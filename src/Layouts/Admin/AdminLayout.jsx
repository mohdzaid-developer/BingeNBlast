import Sidebar from "../../Components/Admin/Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default AdminLayout;
